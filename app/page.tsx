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
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
        className="relative flex items-center overflow-hidden px-4 py-24"
      >
        {/* Dark overlay */}
        <div
          style={{ background: "rgba(0,0,0,0.6)" }}
          className="absolute inset-0"
        />

        {/* Content */}
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
          {/* Badge */}
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
            <span className="block text-4xl md:text-6xl text-white mb-2">
              김통찰의 미국 부동산
            </span>
            <span style={{ color: "#C9A84C" }} className="block text-2xl md:text-4xl">
              한국인이 미국 집주인 되는 법
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            미국 부동산 구매 프로세스부터 융자, 세금 신고, LLC 설립까지 —
            직접 경험한 내용을 한국어로 쉽게 알려드립니다.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/blog"
              style={{ background: "#C9A84C", color: "#000" }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              블로그 보기
            </Link>
            <Link
              href="/experience"
              style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              나의 경험담
            </Link>
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
