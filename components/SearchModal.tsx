"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getAllPosts, categoryToSlug } from "@/lib/posts";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const allPosts = getAllPosts();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query, allPosts]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleResultClick = (slug: string) => {
    router.push(`/blog/${slug}`);
    onClose();
  };

  if (!isOpen) return null;

  const categoryColors: Record<string, string> = {
    "투자 가이드": "#2ecc71",
    "세금/법률": "#3498db",
    "나의 투자 경험담": "#e74c3c",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-20"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          width: "100%",
          maxWidth: "640px",
        }}
        className="rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Search Input */}
        <div
          style={{ borderBottom: "1px solid var(--border)" }}
          className="flex items-center gap-3 px-4 py-3"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "#C9A84C", flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="제목, 내용, 태그로 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              background: "transparent",
              color: "var(--foreground)",
              outline: "none",
              border: "none",
              flex: 1,
              fontSize: "16px",
            }}
            className="placeholder:text-[#555]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{ color: "#666" }}
              className="hover:text-[#999] transition-colors text-lg leading-none"
            >
              ×
            </button>
          )}
          <button
            onClick={onClose}
            style={{ color: "#555", fontSize: "12px" }}
            className="hover:text-[#888] transition-colors ml-1 hidden sm:block"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="px-5 py-8 text-center">
              <p style={{ color: "#555" }} className="text-sm">
                검색어를 입력하세요
              </p>
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((post, i) => {
                const color = categoryColors[post.category] ?? "#C9A84C";
                return (
                  <li key={post.slug}>
                    <button
                      onClick={() => handleResultClick(post.slug)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        borderBottom: i < results.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                      className="block px-5 py-4 hover:bg-[var(--surface-2)] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          style={{
                            color,
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                          }}
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        >
                          {post.category}
                        </span>
                        <span style={{ color: "#555" }} className="text-xs">
                          {new Date(post.date).toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <p
                        style={{ color: "var(--foreground)" }}
                        className="text-sm font-semibold leading-snug mb-1"
                      >
                        {post.title}
                      </p>
                      <p
                        style={{ color: "#777" }}
                        className="text-xs leading-relaxed line-clamp-2"
                      >
                        {post.excerpt}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-5 py-10 text-center">
              <p style={{ color: "#666" }} className="text-sm mb-4">
                &quot;{query}&quot; 에 대한 검색 결과가 없습니다.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { name: "투자 가이드", slug: "investment-guide", color: "#2ecc71" },
                  { name: "세금/법률", slug: "tax-legal", color: "#3498db" },
                  { name: "나의 투자 경험담", slug: "my-experience", color: "#e74c3c" },
                ].map(({ name, slug, color }) => (
                  <button
                    key={slug}
                    onClick={() => {
                      router.push(`/blog?category=${slug}`);
                      onClose();
                    }}
                    style={{
                      color,
                      background: `${color}12`,
                      border: `1px solid ${color}40`,
                    }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-80 transition-opacity"
                  >
                    {name} 보기
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
