import Link from "next/link";
import { Post } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  주식: "#2ecc71",
  ETF: "#c9a84c",
  투자전략: "#3498db",
  부동산: "#e67e22",
  암호화폐: "#9b59b6",
  "나의 투자 경험담": "#e74c3c",
  "투자 가이드": "#2ecc71",
  "세금/법률": "#3498db",
};

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const color = categoryColors[post.category] || "var(--gold)";

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
        className={`rounded-xl p-6 h-full transition-all duration-200 hover:border-[var(--gold)] hover:shadow-lg hover:shadow-black/30 ${featured ? "p-8" : ""}`}
      >
        {/* Category + Read time */}
        <div className="flex items-center justify-between mb-3">
          <span
            style={{
              color,
              background: `${color}18`,
              border: `1px solid ${color}40`,
            }}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {post.category}
          </span>
          <span style={{ color: "#666" }} className="text-xs">
            {post.readTime}분 읽기
          </span>
        </div>

        {/* Title */}
        <h3
          style={{ color: "var(--foreground)" }}
          className={`font-bold leading-snug mb-3 group-hover:text-[var(--gold)] transition-colors ${featured ? "text-[22px] md:text-xl" : "text-lg md:text-base"}`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p style={{ color: "#888" }} className="text-base md:text-sm leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{ color: "#666", background: "var(--surface-2)" }}
              className="text-xs px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Date + Arrow */}
        <div className="flex items-center justify-between">
          <time style={{ color: "#555" }} className="text-xs">
            {new Date(post.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span
            style={{ color: "var(--gold)" }}
            className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          >
            읽기 →
          </span>
        </div>
      </article>
    </Link>
  );
}
