import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://www.kiminvestment.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const description = escapeXml(post.excerpt);
      const title = escapeXml(post.title);
      const category = escapeXml(post.category);

      return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <category>${category}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  const lastBuildDate = posts.length > 0
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>김통찰의 미국 부동산</title>
    <link>${SITE_URL}</link>
    <description>미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.</description>
    <language>ko</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
