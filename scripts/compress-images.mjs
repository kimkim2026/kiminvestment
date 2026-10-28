// 블로그 이미지 압축 스크립트 (재사용 가능)
// 사용법: node scripts/compress-images.mjs [대상폴더=public/images/blog] [기준KB=500]
// - 기준 크기 초과 jpg/jpeg/png만 처리, 같은 파일명으로 덮어쓰기
// - 가로 최대 1600px (작으면 유지), EXIF 회전 반영 후 메타데이터 제거
// - JPEG: 품질 80 + mozjpeg / PNG: 무손실 최대 압축
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.argv[2] ?? "public/images/blog";
const THRESHOLD = Number(process.argv[3] ?? 500) * 1024;
const MAX_WIDTH = 1600;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield full;
  }
}

const kb = (bytes) => (bytes / 1024).toFixed(0);
const rows = [];

for await (const file of walk(ROOT)) {
  const before = (await stat(file)).size;
  if (before <= THRESHOLD) continue;

  // 원본을 메모리로 읽어 같은 경로에 안전하게 덮어쓰기
  const input = await readFile(file);
  let pipeline = sharp(input)
    .rotate() // EXIF orientation 반영 (이후 출력에는 메타데이터 미포함)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true });

  pipeline = /\.png$/i.test(file)
    ? pipeline.png({ compressionLevel: 9 })
    : pipeline.jpeg({ quality: 80, mozjpeg: true });

  const output = await pipeline.toBuffer();
  if (output.length >= before) {
    rows.push({ file, before: kb(before), after: kb(before), saved: "skip" });
    continue;
  }
  await writeFile(file, output);
  const pct = ((1 - output.length / before) * 100).toFixed(1);
  rows.push({ file, before: kb(before), after: kb(output.length), saved: `${pct}%` });
}

if (rows.length === 0) {
  console.log(`${ROOT}: ${kb(THRESHOLD)}KB 초과 이미지 없음`);
} else {
  console.log("| 파일 | 전 (KB) | 후 (KB) | 절감 |");
  console.log("|---|---:|---:|---:|");
  for (const r of rows) console.log(`| ${r.file.replaceAll("\\", "/")} | ${r.before} | ${r.after} | ${r.saved} |`);
}
