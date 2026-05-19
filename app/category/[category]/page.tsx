import { getAllPosts, getPostsByCategory, toCategorySlug } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import { Metadata } from "next";

interface CategoryConfig {
  title: string;
  description: string;
  color: string;
  matchCategories: string[];
  matchTags: string[];
}

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  "투자-가이드": {
    title: "투자 가이드",
    description: "미국 부동산 투자의 A to Z — 초보자부터 경험자까지 실전에 바로 쓸 수 있는 가이드.",
    color: "#2ecc71",
    matchCategories: [
      "투자 가이드",
      "부동산 투자 기초",
      "구매 프로세스 A to Z",
      "융자/모기지",
      "임대 관리",
    ],
    matchTags: ["부동산투자기초", "임대관리", "모기지", "부동산구매"],
  },
  "세금-법률": {
    title: "세금/법률",
    description: "미국 세금 신고, LLC 설립, FBAR·FATCA 등 한국인 투자자가 꼭 알아야 할 세금·법률 정보.",
    color: "#3498db",
    matchCategories: ["세금/법률"],
    matchTags: [],
  },
  "나의-투자-경험담": {
    title: "나의 투자 경험담",
    description: "직접 경험한 미국 부동산 투자 이야기 — 성공과 실수, 그리고 그 사이에서 배운 것들.",
    color: "#e74c3c",
    matchCategories: ["나의 투자 경험담"],
    matchTags: [],
  },
  "부동산-투자-기초": {
    title: "부동산 투자 기초",
    description: "미국 부동산 투자를 처음 시작하는 분들을 위한 기초 개념과 필수 지식.",
    color: "#2ecc71",
    matchCategories: ["부동산 투자 기초"],
    matchTags: ["부동산투자기초"],
  },
  "구매-프로세스-a-to-z": {
    title: "구매 프로세스 A to Z",
    description: "미국 부동산 매물 탐색부터 클로징까지, 구매 절차 전 과정을 단계별로 설명합니다.",
    color: "#2ecc71",
    matchCategories: ["구매 프로세스 A to Z"],
    matchTags: ["부동산구매"],
  },
  "융자-모기지": {
    title: "융자/모기지",
    description: "한국인 투자자를 위한 미국 모기지 가이드 — 대출 조건, 금리, 승인 절차까지.",
    color: "#2ecc71",
    matchCategories: ["융자/모기지"],
    matchTags: ["모기지", "융자"],
  },
  "임대-관리": {
    title: "임대 관리",
    description: "임차인 선별부터 렌트비 관리, 유지보수까지 — 임대 수익을 극대화하는 방법.",
    color: "#2ecc71",
    matchCategories: ["임대 관리"],
    matchTags: ["임대관리"],
  },
};

function normalizeSlug(raw: string): string {
  try {
    return decodeURIComponent(raw).normalize("NFC");
  } catch {
    return raw.normalize("NFC");
  }
}

function getPostsForCategory(slug: string) {
  const config = CATEGORY_CONFIG[slug];
  if (!config) return [];

  const allPosts = getAllPosts();
  const seen = new Set<string>();

  return allPosts.filter((post) => {
    if (seen.has(post.slug)) return false;

    const catMatch = config.matchCategories.includes(post.category);
    const tagMatch =
      config.matchTags.length > 0 &&
      post.tags.some((t) =>
        config.matchTags.some((mt) => mt.toLowerCase() === t.toLowerCase())
      );

    if (catMatch || tagMatch) {
      seen.add(post.slug);
      return true;
    }
    return false;
  });
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_CONFIG).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: raw } = await params;
  const category = normalizeSlug(raw);
  const config = CATEGORY_CONFIG[category];
  if (!config) return { title: "카테고리 | 김통찰의 미국 부동산" };
  return {
    title: `${config.title} | 김통찰의 미국 부동산`,
    description: config.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: raw } = await params;
  const category = normalizeSlug(raw);
  const config = CATEGORY_CONFIG[category];

  if (!config) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p style={{ color: "#888" }}>존재하지 않는 카테고리입니다.</p>
        <Link
          href="/"
          style={{ color: "var(--gold)" }}
          className="mt-4 inline-block text-sm hover:underline"
        >
          ← 홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const posts = getPostsForCategory(category);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span
            style={{
              color: config.color,
              background: `${config.color}18`,
              border: `1px solid ${config.color}40`,
            }}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {config.title}
          </span>
        </div>
        <h1
          style={{ color: "var(--foreground)" }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          {config.title}
        </h1>
        <p style={{ color: "#888" }} className="text-base max-w-2xl">
          {config.description}
        </p>
      </div>

      {/* Results count */}
      {posts.length > 0 && (
        <p style={{ color: "#666" }} className="text-sm mb-6">
          {posts.length}개의 글
        </p>
      )}

      {/* Posts Grid or Empty State */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p style={{ color: "#666" }} className="text-base mb-2">
            현재 준비 중인 글입니다.
          </p>
          <p style={{ color: "#555" }} className="text-sm mb-8">
            곧 업데이트될 예정입니다.
          </p>
          <Link
            href="/"
            style={{
              color: "#000",
              background: "var(--gold)",
            }}
            className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            홈으로 돌아가기
          </Link>
        </div>
      )}
    </div>
  );
}
