import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 5);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--surface) 0%, var(--background) 60%)",
          borderBottom: "1px solid var(--border)",
        }}
        className="relative overflow-hidden py-24 px-4"
      >
        {/* Background decorative elements */}
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div
                style={{ background: "var(--gold)", width: 8, height: 8 }}
                className="rounded-full animate-pulse"
              />
              <span style={{ color: "var(--gold)" }} className="text-xs font-semibold uppercase tracking-widest">
                Investment Insights
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span style={{ color: "var(--foreground)" }}>스마트한 투자를 위한</span>
              <br />
              <span style={{ color: "var(--gold)" }}>Kim Investment</span>
            </h1>

            <p style={{ color: "#999" }} className="text-lg leading-relaxed mb-8 max-w-lg">
              주식, ETF, 부동산, 암호화폐까지 — 데이터 기반의 투자 분석과
              실전 전략을 제공합니다. 장기적 부의 창출을 함께 추구합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                style={{ background: "var(--gold)", color: "#000" }}
                className="px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                블로그 보기
              </Link>
              <Link
                href="/about"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
                className="px-6 py-3 rounded-lg font-semibold text-sm hover:border-[var(--gold)] transition-colors"
              >
                운영자 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}
        className="py-6 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "게시글", value: `${posts.length}+` },
              { label: "투자 카테고리", value: "5개" },
              { label: "운영 기간", value: "2024~" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ color: "var(--gold)" }} className="text-2xl font-bold">
                  {value}
                </div>
                <div style={{ color: "#666" }} className="text-xs mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full" />
              <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                최신 글
              </h2>
            </div>
            <PostCard post={featuredPost} featured />
          </section>
        )}

        {/* Recent Posts Grid */}
        {recentPosts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div style={{ background: "var(--green)", width: 4 }} className="h-6 rounded-full" />
                <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                  최근 글
                </h2>
              </div>
              <Link
                href="/blog"
                style={{ color: "var(--gold)" }}
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
            <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full" />
            <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
              카테고리
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "주식", color: "#2ecc71", emoji: "📈" },
              { name: "ETF", color: "#c9a84c", emoji: "📊" },
              { name: "투자전략", color: "#3498db", emoji: "🎯" },
              { name: "부동산", color: "#e67e22", emoji: "🏢" },
              { name: "암호화폐", color: "#9b59b6", emoji: "₿" },
            ].map(({ name, color, emoji }) => (
              <Link
                key={name}
                href={`/blog?category=${name}`}
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
