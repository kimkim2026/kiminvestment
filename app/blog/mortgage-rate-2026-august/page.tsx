import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title:
    "2026년 8월 모기지 금리 6.76%, 올해 최고치 — 지금 사도 될까? | 김통찰의 미국 부동산",
  description:
    "2026년 8월 기준 30년 고정 모기지 금리가 올해 최고 수준을 기록했습니다. 금리 상승 배경과 매물 재고 증가가 투자자에게 주는 의미를 짚어봅니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/mortgage-rate-2026-august",
  },
  openGraph: {
    title: "2026년 8월 모기지 금리 6.76%, 올해 최고치 — 지금 사도 될까?",
    description:
      "2026년 8월 기준 30년 고정 모기지 금리가 올해 최고 수준을 기록했습니다. 금리 상승 배경과 매물 재고 증가가 투자자에게 주는 의미를 짚어봅니다.",
    images: ["https://images.unsplash.com/photo-1643804926339-e94f0a655185?w=900&q=80"],
    type: "article",
    publishedTime: "2026-08-10",
    url: "https://kiminvestment.com/blog/mortgage-rate-2026-august",
  },
};

const GREEN = "#16a34a";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(22,163,74,0.08)",
        border: "1px solid rgba(22,163,74,0.25)",
      }}
    >
      <span style={{ fontSize: 20, lineHeight: 1.4, flexShrink: 0 }}>💡</span>
      <span className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
        {children}
      </span>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(220,38,38,0.07)",
        border: "1px solid rgba(220,38,38,0.3)",
      }}
    >
      <span style={{ fontSize: 20, lineHeight: 1.4, flexShrink: 0 }}>⚠️</span>
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

export default function MortgageRate2026AugustPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1643804926339-e94f0a655185?w=1600&q=80"
          alt="모기지 서류와 집 열쇠 — 2026년 8월 모기지 금리 상승"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.62)" }}
        />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(22,163,74,0.18)", color: GREEN }}
          >
            투자 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            모기지 금리 6.76%, 올해 최고치
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "#4ade80" }}
          >
            지금 사도 될까요
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            프레디맥 기준 30년 고정금리가 연중 최고 수준을 기록한 지금
            <br />
            매물 재고 증가가 만드는 새로운 협상 구도를 짚어봅니다.
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
      <div className="flex flex-wrap items-center gap-4 mb-14 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
        >
          투자 가이드
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 8월 10일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 5분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["모기지 금리", "프레디맥", "30년 고정금리", "주택 재고", "2026 부동산 시장"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md"
              style={{ background: "var(--surface-2)", color: "#888", border: "1px solid var(--border)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ShareButtons
        title="2026년 8월 모기지 금리 6.76%, 올해 최고치 — 지금 사도 될까?"
        description="2026년 8월 기준 30년 고정 모기지 금리가 올해 최고 수준을 기록했습니다. 금리 상승 배경과 매물 재고 증가가 투자자에게 주는 의미를 짚어봅니다."
        url="https://www.kiminvestment.com/blog/mortgage-rate-2026-august"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          미국 모기지 시장의 대표 지표인 프레디맥(Freddie Mac) 주간
          금리 조사에서 30년 고정금리가 올해 들어 가장 높은 수준을
          기록했습니다. 렌탈 투자를 준비하고 있거나 이미 대출을 활용해
          투자 중인 분들이라면, 금리가 오른다는 소식만으로 투자를 미뤄야
          할지 고민이 되실 수 있습니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          하지만 지금 시장에는 금리 상승만 있는 것이 아니라 매물 재고
          증가라는 반대 방향의 흐름도 함께 나타나고 있습니다. 이
          글에서는 금리 수치와 매물 재고 데이터를 함께 살펴보고, 두
          흐름이 투자자에게 실제로 어떤 의미인지 정리해 드리겠습니다.
        </p>
      </section>

      {/* ── 1단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1. 금리 현황 — 8월 6일 6.69%, 8월 10일 평균 6.76%
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          프레디맥이 매주 발표하는 30년 고정금리 조사 기준입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            01
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              연초 대비 가장 높은 수준까지 올라선 30년 고정금리
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              프레디맥 기준 8월 6일 30년 고정금리는{" "}
              <strong style={{ color: "var(--foreground)" }}>
                6.69%
              </strong>
              로 연중 최고치를 기록했고, 8월 10일 기준 평균 금리는{" "}
              <strong style={{ color: "var(--foreground)" }}>
                6.76%
              </strong>
              까지 올라섰습니다. 올해 초 기대됐던 금리 하락 흐름이
              늦춰지면서, 대출을 활용해 매입을 준비하던 투자자들의
              월 상환 부담 계산도 함께 다시 조정이 필요한 상황입니다.
            </p>
          </div>
        </div>

        <WarningBox>
          같은 매물이라도 금리가 0.5%p만 올라도 30년 만기 기준 월
          상환액이 크게 달라질 수 있습니다. 오퍼를 넣기 전 최신 금리
          기준으로 상환 계획을 다시 계산해 보시는 것이 안전합니다.
        </WarningBox>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2. 반대편 흐름 — 매물 재고는 오히려 늘고 있습니다
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          금리 상승과 동시에 나타나고 있는 공급 측 변화입니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-5">
            {[
              {
                title: "7월 가격 인하 매물 비중 20%까지 상승",
                desc: "매도자가 처음 제시한 호가를 낮춰 다시 내놓는 매물의 비중이 7월 기준 전체의 20%까지 올라갔습니다. 매도자들도 높아진 금리 환경에서 매수 심리가 위축되고 있다는 것을 체감하고 있다는 신호입니다.",
              },
              {
                title: "매물 재고, 7주 연속 110만 채 이상 유지",
                desc: "전국 매물 재고가 7주 연속으로 110만 채 이상을 유지하며, 팬데믹 이전 수준에 가까운 공급으로 회복하고 있습니다. 매수자가 고를 수 있는 선택지 자체가 예전보다 훨씬 넓어졌습니다.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: GREEN }}
                />
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TipBox>
          매물 재고가 늘고 가격 인하 비중이 높아지는 시장은, 금리가
          높더라도 매수자가 매입가 자체를 협상할 여지가 커지는
          시장입니다. 리스트 가격을 그대로 받아들이기보다 인근 매물의
          가격 인하 이력을 함께 확인해 보시기 바랍니다.
        </TipBox>
      </section>

      {/* ── 3단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3. 협상력의 이동 — 매도자 우위에서 매수자 우위로
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          높은 금리와 늘어난 재고가 함께 만드는 시장 구도입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            02
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              금리는 높지만 가격 조정 여지는 넓어진 시장
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              금리가 높아지면 대출 이용 매수자 수가 줄어들면서 매물이
              쌓이고, 쌓인 매물은 다시 가격 인하 압력으로 이어집니다.
              지금 시장은 이 순환이 진행되고 있는 구간으로, 매수자가
              대출 비용은 더 부담하는 대신 매입가 협상에서는 더 유리한
              위치에 서 있는 상황입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 시사점 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            한국인 투자자에게 주는 시사점
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          렌탈 투자자라면 금리 자체보다 캐시플로우와 매입가에 집중할 시점입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            03
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              금리 타이밍을 맞추기보다 매입가 협상에 집중하는 편이 현실적입니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              금리가 언제 떨어질지 정확히 예측해서 매수 시점을 맞추는
              것은 현실적으로 어렵습니다. 렌탈 투자 목적이라면 지금
              금리 수준에서도 임대료로 대출금과 비용을 감당하고
              캐시플로우가 남는지를 먼저 계산하고, 늘어난 매물 재고를
              활용해 매입가 자체를 낮추는 협상에 집중하는 편이 더
              현실적인 전략입니다.
            </p>
            <CheckList
              items={[
                "현재 금리 기준으로 월 상환액을 계산해 임대료로 감당 가능한지 확인합니다",
                "관심 매물 인근의 가격 인하 이력과 시장 체류 기간(DOM)을 함께 확인합니다",
                "금리가 추후 낮아지면 재융자(Refinance)로 대응한다는 전제로 매입가 협상에 집중합니다",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          모기지 금리가 올해 최고치를 기록한 것은 분명 부담스러운
          소식이지만, 동시에 매물 재고가 늘고 가격 인하 매물이
          늘어나는 흐름도 함께 진행되고 있습니다. 금리 하나만 보고
          투자를 미루기보다, 지금 시장에서 실제로 협상 가능한 매입가와
          캐시플로우를 꼼꼼히 따져보는 것이 더 중요한 시점입니다.
          궁금한 점이 있으시면{" "}
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
        title="2026년 8월 모기지 금리 6.76%, 올해 최고치 — 지금 사도 될까?"
        description="2026년 8월 기준 30년 고정 모기지 금리가 올해 최고 수준을 기록했습니다. 금리 상승 배경과 매물 재고 증가가 투자자에게 주는 의미를 짚어봅니다."
        url="https://www.kiminvestment.com/blog/mortgage-rate-2026-august"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          금리와 시장 흐름을 함께 이해하는 데 도움이 되는 글들입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/trump-mortgage-bond-2026",
              category: "투자 가이드",
              color: GREEN,
              bg: "rgba(22,163,74,0.15)",
              title: "트럼프發 2000억 달러 모기지 채권 매입, 금리 인하 효과는?",
              excerpt:
                "트럼프 행정부가 모기지 금리 인하를 위해 2000억 달러 규모의 모기지 채권 매입을 지시했습니다. 실제 효과와 전망을 정리합니다.",
            },
            {
              href: "/blog/foreign-buyer-decline-2026",
              category: "투자 가이드",
              color: GREEN,
              bg: "rgba(22,163,74,0.15)",
              title: "2026년 외국인 미국 부동산 매수 19% 감소, 그 이유는?",
              excerpt:
                "전미부동산협회(NAR) 최신 보고서 기준 외국인의 미국 주택 매수가 1년 새 19% 감소했습니다. 그 배경과 한국인 투자자에게 주는 의미를 정리합니다.",
            },
          ].map(({ href, category, color, bg, title, excerpt }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all hover:border-[var(--gold)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full self-start"
                style={{ background: bg, color }}
              >
                {category}
              </span>
              <p className="font-semibold text-sm leading-snug" style={{ color: "var(--foreground)" }}>
                {title}
              </p>
              <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "#888" }}>
                {excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 하단 CTA ── */}
      <section
        className="rounded-2xl p-10 text-center"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          지금 금리 수준에서 투자가 가능한지 확인해 보세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          캐시플로우 계산부터 매입가 협상 전략까지
          <br />
          투자 상담을 통해 확인해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: GREEN, color: "#fff" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${GREEN}`, color: GREEN }}
          >
            블로그 전체보기 →
          </Link>
        </div>
      </section>

    </div>
  );
}
