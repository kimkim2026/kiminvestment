import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, categoryToSlug } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "김통찰의 미국 부동산 | 한국인이 미국 집주인 되는 법",
  description:
    "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
  openGraph: {
    title: "김통찰의 미국 부동산 | 한국인이 미국 집주인 되는 법",
    description:
      "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
    url: "https://kiminvestment.com",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
        width: 1200,
        height: 630,
        alt: "한국인을 위한 미국 부동산 투자 가이드",
      },
    ],
  },
};

const FEATURED_SLUG = "buying-process-a-to-z";

const CATEGORY_PICKS = [
  { slug: "can-foreigners-buy-us-real-estate", category: "투자 가이드", color: "#2ecc71" },
  { slug: "us-rental-income-tax-korean", category: "세금/법률", color: "#3498db" },
  { slug: "korea-vs-usa-real-estate-investment", category: "나의 투자 경험담", color: "#e74c3c" },
];

const EXCLUDED_SLUGS = [
  FEATURED_SLUG,
  ...CATEGORY_PICKS.map((p) => p.slug),
];

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPost = getPostBySlug(FEATURED_SLUG);
  const categoryPosts = CATEGORY_PICKS.map((p) => ({
    ...p,
    post: getPostBySlug(p.slug),
  })).filter((p) => p.post != null);
  const recentPosts = allPosts
    .filter((p) => !EXCLUDED_SLUGS.includes(p.slug))
    .slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
        className="relative flex items-center overflow-hidden px-4 py-24"
      >
        <div
          style={{ background: "rgba(0,0,0,0.6)" }}
          className="absolute inset-0"
        />
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div
              style={{ background: "var(--gold)", width: 8, height: 8 }}
              className="rounded-full animate-pulse"
            />
            <span style={{ color: "var(--gold)" }} className="text-xs font-semibold uppercase tracking-widest">
              미국 부동산 투자 인사이트
            </span>
          </div>

          <h1 className="font-bold leading-tight mb-4">
            <span className="block text-[40px] md:text-6xl text-white mb-2">
              김통찰의 미국 부동산
            </span>
            <span style={{ color: "#C9A84C" }} className="block text-[26px] md:text-4xl">
              한국인이 미국 집주인 되는 법
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            미국 부동산 구매 프로세스부터 융자, 세금 신고, LLC 설립까지 —
            직접 경험한 내용을 한국어로 쉽게 알려드립니다.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/blog?category=${categoryToSlug("투자 가이드")}`}
              style={{ background: "#C9A84C", color: "#000" }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              투자 가이드 보기
            </Link>
            <Link
              href={`/blog?category=${categoryToSlug("나의 투자 경험담")}`}
              style={{ border: "1px solid #C9A84C", color: "#fff" }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:text-[#C9A84C] transition-colors"
            >
              나의 경험담 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Featured Post */}
        {featuredPost && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ background: "#C9A84C", width: 4 }} className="h-6 rounded-full" />
              <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                이 글부터 읽어보세요
              </h2>
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                className="rounded-2xl overflow-hidden hover:border-[#C9A84C] transition-all duration-200 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  {featuredPost.coverImage && (
                    <div
                      className="md:w-2/5 h-56 md:h-auto flex-shrink-0"
                      style={{
                        backgroundImage: `url('${featuredPost.coverImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "240px",
                      }}
                    />
                  )}
                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          style={{ background: "#C9A84C", color: "#000" }}
                          className="text-xs font-bold px-3 py-1 rounded-full"
                        >
                          추천
                        </span>
                        <span
                          style={{ color: "#2ecc71", background: "#2ecc7118", border: "1px solid #2ecc7140" }}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        >
                          {featuredPost.category}
                        </span>
                        <span style={{ color: "#666" }} className="text-xs ml-auto">
                          {featuredPost.readTime}분 읽기
                        </span>
                      </div>
                      <h3
                        style={{ color: "var(--foreground)" }}
                        className="text-xl md:text-2xl font-bold leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors"
                      >
                        {featuredPost.title}
                      </h3>
                      <p style={{ color: "#888" }} className="text-sm leading-relaxed line-clamp-3 mb-5">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <time style={{ color: "#555" }} className="text-xs">
                        {new Date(featuredPost.date).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span
                        style={{ background: "#C9A84C", color: "#000" }}
                        className="px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        읽기 →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {/* Category Picks */}
        {categoryPosts.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ background: "#C9A84C", width: 4 }} className="h-6 rounded-full" />
              <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                주제별 추천글
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {categoryPosts.map(({ post, color }) => (
                <PostCard key={post!.slug} post={post!} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div style={{ background: "#C9A84C", width: 4 }} className="h-6 rounded-full" />
                <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                  최근 글
                </h2>
              </div>
              <Link
                href="/blog"
                style={{ color: "#C9A84C" }}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Category Quick Links */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div style={{ background: "#C9A84C", width: 4 }} className="h-6 rounded-full" />
            <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
              카테고리
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "투자 가이드", color: "#2ecc71", emoji: "🏠", href: "/blog?category=investment-guide" },
              { name: "세금/법률", color: "#3498db", emoji: "📋", href: "/blog?category=tax-legal" },
              { name: "나의 투자 경험담", color: "#e74c3c", emoji: "📖", href: "/blog?category=my-experience" },
            ].map(({ name, color, emoji, href }) => (
              <Link
                key={name}
                href={href}
                style={{
                  border: `1px solid ${color}40`,
                  color,
                  background: `${color}0d`,
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <span>{emoji}</span>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
