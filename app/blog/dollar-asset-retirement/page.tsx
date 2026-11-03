import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const TITLE =
  "은퇴 자산, 왜 달러로 나눠 담아야 할까 — 서울 아파트 vs 미시간 주택 7년 비교";
const DESCRIPTION =
  "2019년부터 2026년까지 원/달러 환율, 서울 아파트, 미시간 주택 가격을 비교했습니다. 집값이 그대로여도 환율만으로 원금이 25% 늘어나는 구조와, 40~50대가 은퇴 자산을 달러로 분산해야 하는 이유를 설명합니다.";
const URL = "https://www.kiminvestment.com/blog/dollar-asset-retirement";

export const metadata: Metadata = {
  title: `${TITLE} | 김통찰의 미국 부동산`,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "김통찰의 미국 부동산",
    locale: "ko_KR",
    images: ["https://images.unsplash.com/photo-1713802574878-54a685c4e713?w=1200&q=80"],
    type: "article",
    publishedTime: "2026-11-02",
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        style={{ background: GREEN, width: 4 }}
        className="h-6 rounded-full flex-shrink-0"
      />
      <h2
        className="text-2xl font-bold"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </h2>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
      {children}
    </p>
  );
}

// 막대 길이는 최댓값 103%를 100% 너비로 놓고 비례 계산
const MAX_RATE = 103;
const CHART_ROWS = [
  { label: "한국 부동산", rate: 12, display: "+12%", barClass: "bg-slate-200", bold: false },
  { label: "서울 아파트", rate: 19.5, display: "+19.5%", barClass: "bg-slate-300", bold: false },
  { label: "원/달러 환율", rate: 25.4, display: "+25.4%", barClass: "bg-slate-400", bold: false },
  { label: "미시간 주택 (달러 기준)", rate: 62, display: "+62%", barClass: "bg-green-500", bold: false },
  { label: "미시간 주택 (원화 환산)", rate: 103, display: "+103%", barClass: "bg-green-700", bold: true },
];

const RELATED_POSTS = {
  comparison: {
    href: "/blog/10year-investment-comparison-2016-2025",
    category: "나의 투자 경험담",
    title:
      "2억원으로 10년 투자하면 어디가 최고일까? — S&P 500 vs 코스피200 vs 서울 아파트 vs 미국 부동산",
    excerpt:
      "2016년 2억원을 S&P 500, 코스피200, 서울 아파트(무주택자 1주택 전세), 미시간 Duplex에 투자했다면 2025년 말 기준 얼마가 됐을까? 실제 지수 데이터와 세금 구조(1주택 양도세 비과세 포함)까지 반영한 10년 수익률 비교 분석.",
  },
  remittance: {
    href: "/blog/korea-to-usa-remittance-guide",
    category: "세금/법률",
    title: "한국에서 미국으로 송금하는 방법 — 부동산 투자 자금 보내기 완벽 가이드",
    excerpt:
      "미국 부동산 투자를 위해 한국에서 자금을 송금할 때 필요한 절차, 서류, 주의사항을 단계별로 정리했습니다. 한국은행 신고부터 취득 후 사후 보고까지 직접 경험을 바탕으로 안내합니다.",
  },
  koreaVsUsa: {
    href: "/blog/korea-vs-usa-real-estate-investment",
    category: "나의 투자 경험담",
    title: "한국 부동산 vs 미국 부동산, 직접 투자해보니 이렇게 달랐다",
    excerpt:
      "한국과 미국 양쪽에 부동산을 보유하다 보니, 자연스럽게 두 나라의 차이점이 느껴지기 시작했습니다. 제도, 세금, 수익 구조, 관리 방식까지 생각보다 많은 부분이 다릅니다.",
  },
};

export default function DollarAssetRetirementPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative"
        style={{
          background: "#0f172a",
          border: "1px solid #1e293b",
          minHeight: 360,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(22,163,74,0.04)" }}
        />
        <div
          className="relative z-10 p-8 md:p-12 w-full flex flex-col justify-end"
          style={{ minHeight: 360 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 self-start"
            style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
          >
            투자 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            은퇴 자산, 왜 달러로 나눠 담아야 할까
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: GREEN }}
          >
            서울 아파트 vs 미시간 주택 7년 비교
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 560 }}
          >
            2019년 말부터 2026년까지, 집값과 환율을 함께 놓고 보면
            <br />
            은퇴 자산을 어디에 담아야 하는지가 보입니다.
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

      {/* ── 100달러 지폐 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1713802574878-54a685c4e713?w=900&q=80"
          alt="나무 테이블 위에 쌓인 100달러 지폐 다발"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by David Trinks on Unsplash
      </p>

      {/* ── 글 메타 정보 ── */}
      <div
        className="flex flex-wrap items-center gap-4 mb-14 pb-6"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
        >
          투자 가이드
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 11월 2일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 5분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {[
            "환율",
            "달러 자산",
            "은퇴 준비",
            "자산 분산",
            "원화 환산 수익률",
            "서울 아파트",
            "미시간 부동산",
          ].map((tag) => (
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
          ))}
        </div>
      </div>

      <ShareButtons title={TITLE} url={URL} />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <Paragraph>
          은퇴를 앞둔 40~50대 분들께 자주 받는 질문이 있습니다. &ldquo;모아둔
          자산이 전부 한국 아파트와 원화 예금인데, 이대로 괜찮을까요?&rdquo;
          오늘은 지난 7년간의 숫자로 이 질문에 답해 보겠습니다.
        </Paragraph>
      </section>

      {/* ── 환율 효과 ── */}
      <section className="mb-14">
        <SectionTitle>집값이 그대로여도 원금이 25% 늘어나는 이유</SectionTitle>
        <Paragraph>
          2019년 원/달러 환율은 연평균 1,164원이었습니다. 2026년 현재는 1,460원
          안팎입니다. 같은 기간 달러 가치가{" "}
          <strong style={{ color: "var(--foreground)" }}>약 25%</strong> 오른
          셈입니다.
        </Paragraph>
        <Paragraph>
          2019년에 원화를 달러로 바꿔 미국 부동산에 투자했다면, 집값이 한 푼도
          오르지 않았더라도 원화로 환산한 원금은 약 25% 늘어났다는 뜻입니다.
        </Paragraph>
      </section>

      {/* ── 서울 아파트 ── */}
      <section className="mb-14">
        <SectionTitle>서울 아파트도 환율을 이기지 못했습니다</SectionTitle>
        <Paragraph>
          같은 기간 한국 부동산은 전국 기준으로 약 12% 올랐습니다. 한국에서 가장
          뜨거운 자산이라는 서울 아파트도 19.5% 오르는 데 그쳤습니다(2019년
          말~2026년 9월, 서울 아파트 매매가격지수, 한국부동산원). 서울 아파트에
          투자한 성과가 달러를 보유한 효과(+25.4%)에도 미치지 못한 것입니다.
        </Paragraph>
      </section>

      {/* ── 미시간 주택 ── */}
      <section className="mb-14">
        <div
          className="rounded-2xl overflow-hidden mb-2"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1770790323277-c1ca469472db?w=900&q=80"
            alt="맑은 하늘 아래 나무와 단독주택이 늘어선 미국 교외 주택가"
            className="w-full object-cover"
            style={{ maxHeight: 420 }}
          />
        </div>
        <p className="text-xs mb-10 text-center" style={{ color: "#555" }}>
          Photo by Ty Dennis on Unsplash
        </p>
        <SectionTitle>미시간 주택은 얼마나 올랐을까</SectionTitle>
        <Paragraph>
          제가 투자하고 있는 미국 미시간주 도시의 주택 가격은 같은 기간 약 62%
          올랐습니다. 서울 아파트 상승률의 3배가 넘습니다. 여기에 환율 효과까지
          더하면 원화 기준 수익률은{" "}
          <span style={{ color: GREEN }} className="font-semibold">
            약 103%
          </span>
          입니다. 투자 원금이 두 배 가까이 불어난 셈입니다.
        </Paragraph>

        {/* ── 비교 차트 ── */}
        <div
          className="rounded-2xl p-5 sm:p-6 mt-8"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p
            className="font-semibold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            2019년 말 → 2026년, 무엇이 얼마나 올랐을까
          </p>
          <div className="space-y-4">
            {CHART_ROWS.map(({ label, rate, display, barClass, bold }) => (
              <div key={label}>
                <p
                  className={`text-sm mb-1.5 ${bold ? "font-bold" : ""}`}
                  style={{ color: bold ? "var(--foreground)" : "#bbb" }}
                >
                  {label}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div
                      className={`h-6 rounded-md ${barClass}`}
                      style={{ width: `${(rate / MAX_RATE) * 100}%` }}
                    />
                  </div>
                  <span
                    className={`text-sm w-14 text-right flex-shrink-0 ${bold ? "font-bold" : "font-semibold"}`}
                    style={{ color: bold ? GREEN : "#bbb" }}
                  >
                    {display}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-6 leading-relaxed">
            자료: 한국부동산원, 한국은행, Zillow 주택가치지수(ZHVI, 저자 투자
            지역, 2019년 12월~2026년 9월). 환율은 2019년 연평균과 2026년 현재
            수준을 비교했습니다. 원화 환산 상승률 = (1 + 62%) × (1 + 25.4%) – 1
          </p>
        </div>

        <TipBox>
          원화 환산 수익률은 두 수익을 곱해서 계산합니다. 집값이 62% 오르고
          달러가 25.4% 오르면, 단순 합계인 87%보다 큰 103%가 됩니다. 집값
          상승분에도 환율 효과가 함께 붙기 때문입니다.
        </TipBox>
      </section>

      {/* ── 분산 ── */}
      <section className="mb-14">
        <SectionTitle>&lsquo;올인&rsquo;이 아니라 &lsquo;분산&rsquo;입니다</SectionTitle>
        <Paragraph>
          물론 환율은 언제든 반대로 움직일 수 있습니다. 그래서 저는 미국
          부동산을 &lsquo;올인&rsquo;의 대상이 아니라 &lsquo;분산&rsquo;의
          수단으로 봅니다.
        </Paragraph>
        <Paragraph>
          원화 자산에만 집중된 은퇴 자산의 일부를 달러 자산으로 나눠 담는 것,
          그리고 매달 들어오는 월세로 현금흐름을 만드는 것. 이것이 40~50대가
          은퇴 자산을 지키는{" "}
          <strong style={{ color: "var(--foreground)" }}>
            가장 현실적인 방법
          </strong>
          이라고 저는 믿습니다.
        </Paragraph>

        <WarningBox>
          이 글의 수치는 과거 특정 기간의 결과이며, 미래 수익을 보장하지
          않습니다. 환율이 떨어지면 원화 기준 수익률도 함께 낮아질 수 있습니다.
          투자 결정은 개인 상황에 맞게 신중하게 판단해 주세요.
        </WarningBox>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <SectionTitle>마무리</SectionTitle>
        <Paragraph>
          미국 부동산으로 자금을 보내는 절차가 궁금하시다면{" "}
          <Link
            href={RELATED_POSTS.remittance.href}
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            송금 절차 글
          </Link>
          을, 다른 투자 수단과의 장기 비교가 궁금하시다면{" "}
          <Link
            href={RELATED_POSTS.comparison.href}
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            10년 비교 글
          </Link>
          을 함께 읽어 보시기 바랍니다.
        </Paragraph>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
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

      <ShareButtons title={TITLE} url={URL} />

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
          달러 자산 분산을 고민하고 계시다면 아래 글들도 함께 읽어보시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            RELATED_POSTS.comparison,
            RELATED_POSTS.remittance,
            RELATED_POSTS.koreaVsUsa,
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
          은퇴 자산, 달러로 나눠 담아 보세요
        </h2>
        <p
          className="text-sm mb-8 mx-auto text-green-100"
          style={{ maxWidth: 420 }}
        >
          송금부터 매물 선정, 임대 관리까지
          <br />
          달러 자산 분산을 위한 투자 상담을 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.zillow.com/homes/for_sale/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: "#16a34a" }}
          >
            Zillow 매물 검색하기 →
          </a>
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
