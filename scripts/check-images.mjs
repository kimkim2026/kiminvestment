// Unsplash 이미지 링크 검사 스크립트 (재사용 가능)
// 사용법: node scripts/check-images.mjs [--json] [검사폴더...=lib app components]
// - images.unsplash.com URL을 모두 찾아 실제 요청을 보내고, 200이 아닌 것을 글/위치별로 출력
// - 여러 글이 같은 사진 ID를 쓰는 경우도 함께 알려줌
// - 깨진 이미지가 있으면 exit code 1
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const dirs = args.filter((a) => !a.startsWith("--"));
const ROOTS = dirs.length ? dirs : ["lib", "app", "components"];
const URL_RE = /https:\/\/images\.unsplash\.com\/[^\s"'`)\]]+/g;
const CONCURRENCY = 8;

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(tsx?|jsx?|mjs|mdx?)$/.test(entry.name)) yield full;
  }
}

export const photoId = (url) => url.match(/photo-[0-9a-zA-Z-]+/)?.[0] ?? url;

// 파일 하나에서 URL과 "어느 글의 커버/본문인지"를 추출
function extract(file, text) {
  const refs = [];
  const lines = text.split(/\r?\n/);
  const isPosts = file.replaceAll("\\", "/").endsWith("lib/posts.ts");
  // app/blog/<slug>/page.tsx → <slug>, 그 외는 파일 경로
  const appSlug = file.replaceAll("\\", "/").match(/app\/(?:blog|posts)\/([^/[\]]+)\//)?.[1];
  let slug = appSlug ?? null;

  lines.forEach((line, i) => {
    if (isPosts) {
      const s = line.match(/^\s*slug:\s*"([^"]+)"/);
      if (s) slug = s[1];
    }
    for (const url of line.match(URL_RE) ?? []) {
      const prev = lines[i - 1] ?? "";
      let role;
      if (/coverImage/.test(line) || /coverImage:\s*$/.test(prev)) role = "커버";
      else if (/^\s*!\[/.test(line)) role = "본문";
      else if (isPosts) role = "본문";
      else role = "페이지";
      refs.push({ url, file: file.replaceAll("\\", "/"), line: i + 1, slug: slug ?? "-", role });
    }
  });
  return refs;
}

async function check(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
      await res.body?.cancel();
      return res.status;
    } catch (e) {
      if (attempt === 1) return `ERR ${e.cause?.code ?? e.name}`;
    }
  }
}

const refs = [];
for (const root of ROOTS) {
  for await (const file of walk(root)) refs.push(...extract(file, await readFile(file, "utf8")));
}

const urls = [...new Set(refs.map((r) => r.url))];
const status = new Map();
let next = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (next < urls.length) {
      const url = urls[next++];
      status.set(url, await check(url));
    }
  })
);

const broken = refs.filter((r) => status.get(r.url) !== 200).map((r) => ({ ...r, status: status.get(r.url) }));

// 같은 사진 ID를 서로 다른 글(slug)이 쓰는 경우
const bySlug = new Map();
for (const r of refs) {
  const id = photoId(r.url);
  if (!bySlug.has(id)) bySlug.set(id, new Set());
  bySlug.get(id).add(r.slug);
}
const shared = [...bySlug].filter(([, s]) => s.size > 1).map(([id, s]) => ({ id, slugs: [...s] }));

if (asJson) {
  console.log(JSON.stringify({ total: refs.length, unique: urls.length, broken, shared, ids: [...bySlug.keys()] }, null, 2));
} else {
  console.log(`검사: 참조 ${refs.length}개 / 고유 URL ${urls.length}개 / 깨짐 ${broken.length}개\n`);
  if (broken.length) {
    console.log("| 상태 | 글(slug) | 위치 | 파일:줄 | 사진 ID |");
    console.log("|---|---|---|---|---|");
    for (const b of broken) console.log(`| ${b.status} | ${b.slug} | ${b.role} | ${b.file}:${b.line} | ${photoId(b.url)} |`);
  }
  if (shared.length) {
    console.log(`\n여러 글이 함께 쓰는 사진 ID: ${shared.length}개`);
    for (const s of shared) console.log(`- ${s.id}: ${s.slugs.join(", ")}`);
  }
}
process.exitCode = broken.length ? 1 : 0;
