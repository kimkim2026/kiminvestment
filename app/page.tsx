import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 6);

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
              href="/blog?category=투자가이드"
              style={{ background: "#C9A84C", color: "#000" }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              투자 가이드 보기
            </Link>
            <Link
              href="/blog?category=경험담"
              style={{ border: "1px solid #C9A84C", color: "#fff" }}
              className="px-7 py-3 rounded-lg font-semibold text-sm hover:text-[#C9A84C] transition-colors"
            >
              나의 경험담 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full" />
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
              { name: "투자 가이드", color: "#2ecc71", emoji: "🏠", href: "/blog?category=투자 가이드" },
              { name: "세금/법률", color: "#c9a84c", emoji: "📋", href: "/blog?category=세금/법률" },
              { name: "나의 투자 경험담", color: "#e74c3c", emoji: "📖", href: "/blog?category=나의 투자 경험담" },
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
