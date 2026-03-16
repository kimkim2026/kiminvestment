"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";

const categoryColors: Record<string, string> = {
  주식: "#2ecc71",
  ETF: "#c9a84c",
  투자전략: "#3498db",
  부동산: "#e67e22",
  암호화폐: "#9b59b6",
};

function BlogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "전체";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = getAllPosts();
  const categories = ["전체", ...getAllCategories()];

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const categoryMatch =
        selectedCategory === "전체" || post.category === selectedCategory;
      const searchMatch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return categoryMatch && searchMatch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1
          style={{ color: "var(--foreground)" }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          블로그
        </h1>
        <p style={{ color: "#888" }} className="text-base">
          투자와 금융에 관한 다양한 인사이트를 공유합니다.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="제목, 내용, 태그로 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
          className="w-full md:w-96 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[#555]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          const color = cat === "전체" ? "var(--gold)" : categoryColors[cat] || "var(--gold)";
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                color: active ? "#000" : color,
                background: active ? color : `${color}18`,
                border: `1px solid ${active ? color : `${color}40`}`,
              }}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:opacity-90"
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p style={{ color: "#666" }} className="text-sm mb-6">
        {filteredPosts.length}개의 글
      </p>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p style={{ color: "#555" }} className="text-lg mb-2">
            검색 결과가 없습니다.
          </p>
          <p style={{ color: "#444" }} className="text-sm">
            다른 검색어나 카테고리를 시도해보세요.
          </p>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12">로딩 중...</div>}>
      <BlogContent />
    </Suspense>
  );
}
