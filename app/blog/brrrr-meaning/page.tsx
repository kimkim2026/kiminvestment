import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "BRRRR 뜻 — 30초 만에 이해하는 미국 부동산 투자 용어 | 김통찰의 미국 부동산",
  description:
    "미국 부동산 투자 커뮤니티에서 자주 보이는 BRRRR이 무엇의 약자인지, 5단계 구조를 쉽고 짧게 설명합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/brrrr-meaning",
  },
  openGraph: {
    title: "BRRRR 뜻 — 30초 만에 이해하는 미국 부동산 투자 용어",
    description:
      "미국 부동산 투자 커뮤니티에서 자주 보이는 BRRRR이 무엇의 약자인지, 5단계 구조를 쉽고 짧게 설명합니다.",
    url: "https://kiminvestment.com/blog/brrrr-meaning",
    images: [
      "https://images.unsplash.com/photo-1674649207083-281c2517ab49?auto=format&fit=crop&w=1600&q=80",
    ],
    type: "article",
    publishedTime: "2026-07-28",
  },
};

const GREEN = "#16a34a";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(201,168,76,0.08)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <span style={{ fontSize: 20, lineHeight: 1.4, flexShrink: 0 }}>💡</span>
      <span className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
        {children}
      </span>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 mt-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span
            className="text-sm font-bold mt-0.5 flex-shrink-0"
            style={{ color: GREEN }}
          >
            ✓
          </span>
          <span className="text-sm" style={{ color: "#bbb" }}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function BrrrrMeaningPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1674649207083-281c2517ab49?auto=format&fit=crop&w=1600&q=80"
          alt="리모델링 중인 주택 — BRRRR 투자 용어 입문"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.65)" }}
        />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(22,163,74,0.2)", color: GREEN }}
          >
            부동산 투자 기초
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            BRRRR 뜻
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: GREEN }}
          >
            30초 만에 이해하는 미국 부동산 투자 용어
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            Buy · Rehab · Rent · Refinance · Repeat — 각 단어의 첫 글자만 모았습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: GREEN, color: "#fff" }}
            >
              투자 상담 신청하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${GREEN}`, color: GREEN }}
            >
              블로그 전체보기
            </Link>
          </div>
        </div>
      </section>

      {/* ── 글 메타 정보 ── */}
      <div
        className="flex flex-wrap items-center gap-4 mb-14 pb-6"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
        >
          부동산 투자 기초
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 7월 28일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 4분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["BRRRR", "BRRRR 뜻", "부동산 투자 용어", "리모델링 투자", "재융자"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{
                  background: "var(--surface-2)",
                  color: "#888",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <ShareButtons
        title="BRRRR 뜻 — 30초 만에 이해하는 미국 부동산 투자 용어"
        url="https://www.kiminvestment.com/blog/brrrr-meaning"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          유튜브나 미국 부동산 커뮤니티를 보다 보면 BRRRR이라는 단어가 자주 등장합니다.
          정확히 무슨 뜻인지 몰라 그냥 넘어가신 분들을 위해, 아주 짧게 개념만
          정리해 드립니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글은 용어 입문용으로, 실제로 어떻게 실행하는지에 대한 심화 내용은
          다루지 않습니다. 구체적인 전략과 실제 숫자 예시는 이 글 마지막 부분에
          연결된 심화 글에서 확인하실 수 있습니다.
        </p>
      </section>

      {/* ── BRRRR 5단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-8">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            BRRRR은 5단어의 첫 글자입니다
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              num: "01",
              en: "Buy",
              ko: "매입",
              desc: "시세보다 저렴하거나 수리가 필요한 매물을 매입합니다. 저평가된 가격에 사는 것이 전략의 출발점입니다.",
            },
            {
              num: "02",
              en: "Rehab",
              ko: "리모델링",
              desc: "임대 가능한 상태로 집을 수리합니다. Rehab(리하브)은 집을 고쳐 가치를 높이는 과정을 뜻합니다.",
            },
            {
              num: "03",
              en: "Rent",
              ko: "임대",
              desc: "수리를 마친 집에 세입자를 들여 임대 수익을 발생시킵니다.",
            },
            {
              num: "04",
              en: "Refinance",
              ko: "재융자",
              desc: "상승한 감정가를 바탕으로 새로운 대출을 받아 초기 투자금을 회수합니다. 이를 Cash-out Refinance(캐시아웃 재융자, 늘어난 집값만큼 현금을 받는 방식)라고 합니다.",
            },
            {
              num: "05",
              en: "Repeat",
              ko: "반복",
              desc: "회수한 자금으로 다음 매물을 매입해 같은 사이클을 반복합니다.",
            },
          ].map(({ num, en, ko, desc }) => (
            <div
              key={num}
              className="rounded-2xl p-6 flex gap-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0 w-10 text-center"
                style={{ color: GREEN }}
              >
                {num}
              </span>
              <div className="w-full">
                <p
                  className="font-semibold mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {en}{" "}
                  <span className="font-normal text-sm" style={{ color: "#888" }}>
                    ({ko})
                  </span>
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 이런 분들이 알아두면 좋은 개념입니다 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            이런 분들이 알아두면 좋은 개념입니다
          </h2>
        </div>
        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <CheckList
            items={[
              "소자본으로 여러 채를 순차적으로 운용하고 싶은 분",
              "리모델링을 통해 자산 가치를 높이는 방식에 관심 있는 분",
              "임대 수입과 투자금 회수를 동시에 노리고 싶은 분",
              "BRRRR이라는 단어를 자주 봤지만 정확한 뜻을 몰랐던 분",
            ]}
          />
        </div>
        <TipBox>
          BRRRR은 단순히 개념을 아는 것만으로는 실행하기 어렵습니다. 리모델링 비용 예측 능력과
          현금 흐름 관리 경험이 뒷받침되어야 안정적으로 사이클을 돌릴 수 있습니다. 어느 정도
          투자 경험이 쌓인 후 도전하시는 것을 권장합니다.
        </TipBox>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          여기서는 BRRRR이 무엇의 약자인지, 각 단계가 어떤 의미인지만 짧게
          정리했습니다. 실제로 어떻게 매물을 고르고 리모델링 예산을 짜고 재융자를
          받는지 등 실전 내용은{" "}
          <Link
            href="/blog/brrrr-strategy"
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            BRRRR 전략 완전 정복
          </Link>{" "}
          글에서 숫자 예시와 함께 단계별로 다루고 있습니다. 궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="BRRRR 뜻 — 30초 만에 이해하는 미국 부동산 투자 용어"
        url="https://www.kiminvestment.com/blog/brrrr-meaning"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          BRRRR 개념을 더 깊이 이해하고 싶은 분들께 추천합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/brrrr-strategy",
              category: "부동산 투자 기초",
              title: "BRRRR 전략으로 미국 부동산 투자금 회수하기",
              excerpt:
                "BRRRR(Buy·Rehab·Rent·Refinance·Repeat) 전략을 한국인 투자자 관점에서 실제 숫자 예시와 함께 단계별로 설명합니다. ARV 계산법, 세입자 심사, Cash-Out Refinance까지 실전 가이드입니다.",
            },
            {
              href: "/blog/us-real-estate-return-rate-example",
              category: "투자 가이드",
              title: "미국 부동산 수익률은 실제로 얼마나 될까?",
              excerpt:
                "미국 중서부 렌탈 투자 시나리오로 현금흐름, NOI, 집값 상승, 원금 상환을 모두 합산한 실제 수익률을 단계별로 계산해 드립니다.",
            },
          ].map(({ href, category, title, excerpt }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all hover:border-[var(--gold)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full self-start"
                style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
              >
                {category}
              </span>
              <p
                className="font-semibold text-sm leading-snug"
                style={{ color: "var(--foreground)" }}
              >
                {title}
              </p>
              <p
                className="text-xs leading-relaxed line-clamp-3"
                style={{ color: "#888" }}
              >
                {excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 하단 CTA ── */}
      <section className="rounded-2xl p-10 text-center bg-green-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          BRRRR, 개념에서 실전으로
        </h2>
        <p
          className="text-sm mb-8 mx-auto text-green-100"
          style={{ maxWidth: 420 }}
        >
          매물 발굴부터 리모델링, 임대, 재융자까지
          <br />
          단계별 투자 상담을 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog/brrrr-strategy"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: "#16a34a" }}
          >
            BRRRR 실전 전략 읽기 →
          </Link>
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff" }}
          >
            투자 상담 신청하기
          </Link>
        </div>
      </section>

    </div>
  );
}
