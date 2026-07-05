import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: "미국 부동산 매도 시 세금 완전 정리 — 초보자를 위한 쉬운 설명 | 김통찰의 미국 부동산",
  description:
    "미국 부동산을 매도할 때 발생하는 양도소득세, 감가상각 환수, 외국인 원천징수(FIRPTA), 1031 Exchange까지 초보 투자자 눈높이에서 쉽게 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/real-estate-selling-tax-guide",
  },
  openGraph: {
    title: "미국 부동산 매도 시 세금 완전 정리 — 초보자를 위한 쉬운 설명",
    description:
      "미국 부동산을 매도할 때 발생하는 양도소득세, 감가상각 환수, 외국인 원천징수(FIRPTA), 1031 Exchange까지 초보 투자자 눈높이에서 쉽게 정리합니다.",
    images: ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80"],
    type: "article",
    publishedTime: "2026-07-05",
  },
};

const AMBER = "#f59e0b";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(245,158,11,0.08)",
        border: "1px solid rgba(245,158,11,0.25)",
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
            style={{ color: AMBER }}
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

export default function RealEstateSellingTaxGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{
          minHeight: 360,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.65)" }}
        />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(245,158,11,0.18)", color: AMBER }}
          >
            세금/법률
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            미국 부동산 매도 시 세금 완전 정리
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: AMBER }}
          >
            초보자를 위한 쉬운 설명
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            양도소득세, 감가상각 환수, FIRPTA 원천징수, 1031 Exchange까지
            <br />
            초보 투자자 눈높이에서 8단계로 쉽게 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: AMBER, color: "#1a1a1a" }}
            >
              세무 상담 신청하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${AMBER}`, color: AMBER }}
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
          style={{ background: "rgba(245,158,11,0.15)", color: AMBER }}
        >
          세금/법률
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 7월 5일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 10분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["양도소득세", "FIRPTA", "감가상각 환수", "1031 Exchange", "부동산 세금"].map((tag) => (
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
        title="미국 부동산 매도 시 세금 완전 정리 — 초보자를 위한 쉬운 설명"
        description="양도소득세, 감가상각 환수, FIRPTA 원천징수, 1031 Exchange까지 초보 투자자 눈높이에서 정리합니다."
        url="https://www.kiminvestment.com/blog/real-estate-selling-tax-guide"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          미국 부동산을 매도할 때는 매매 가격만큼이나 세금 계산이 중요합니다.
          특히 외국인 신분으로 투자하는 한국인 투자자라면 원천징수, 감가상각
          환수 등 미국 시민권자와는 다른 규칙이 적용되는 부분이 있어 미리
          알아두는 것이 좋습니다.
        </p>
      </section>

      {/* ── 1단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1단계 — 거주용 주택인지 투자용(임대) 부동산인지부터 구분하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          어떤 유형이냐에 따라 세금 처리 방식이 완전히 달라집니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            01
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              거주 주택은 최대 $500,000까지 양도차익 면제
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              본인이 실제 거주한 주택과 임대 목적으로 보유한 투자용 부동산은
              세금 처리 방식이 완전히 다릅니다. 본인 거주 주택은 지난 5년 중
              2년 이상 거주했다면 양도차익 중 단독 신고자는 $250,000, 부부
              공동 신고자는 $500,000까지 면제받을 수 있습니다. 반면 임대
              부동산에는 이 면제가 적용되지 않으며, 아래에서 설명하는
              양도소득세와 감가상각 환수 규칙을 그대로 적용받습니다.
            </p>
          </div>
        </div>

        <TipBox>
          임대 부동산을 본인 거주지로 전환한 뒤 매도하더라도, 임대 기간 중
          받은 감가상각 혜택은 별도로 환수 대상이 됩니다.
        </TipBox>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2단계 — 양도소득세(Capital Gains Tax) 기본 이해하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          보유 기간 1년을 기준으로 세율 구조가 완전히 달라집니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            02
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              1년 초과 보유 시 장기 세율(0·15·20%) 적용
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              1년을 초과해 보유한 부동산을 매도하면 장기 양도소득세율(0%,
              15%, 20%) 중 하나가 적용되며, 세율은 매도 연도의 전체
              과세소득 수준에 따라 결정됩니다. 반대로 1년 이하로 보유한 뒤
              매도하면 일반 소득세율(최대 37%)이 그대로 적용되므로, 세금만
              놓고 보면 1년을 넘겨 매도하는 것이 훨씬 유리합니다.
            </p>
            <CheckList
              items={[
                "보유 기간 1년 초과 여부 확인",
                "매도 연도 예상 총 과세소득 파악",
                "장기 보유 시 0·15·20% 중 해당 구간 확인",
                "1년 이하 보유 시 일반 소득세율 적용 여부 확인",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 3단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3단계 — 감가상각 환수(Depreciation Recapture) 이해하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          그동안 절감한 세금을 매도 시 다시 정산받는 절차입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            03
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              감가상각 청구액에는 최대 25% 별도 세율 적용
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              임대 부동산을 운영하며 매년 감가상각(Depreciation)을 통해
              세금을 절감했다면, 매도 시 그 혜택을 다시 세금으로 돌려받는
              절차가 있습니다. 이를 감가상각 환수라고 하며, 그동안 청구한
              감가상각 금액에 대해서는 최대 25%의 별도 세율이 적용됩니다.
              나머지 차익 부분은 일반 장기 양도소득세율을 그대로 적용받습니다.
            </p>
          </div>
        </div>

        <WarningBox>
          실제로 감가상각을 청구하지 않았더라도, 세법상 청구 가능했던
          금액만큼은 그대로 환수 대상이 됩니다. 감가상각 내역을 정확히
          기록해두는 것이 중요합니다.
        </WarningBox>

        <div className="rounded-xl overflow-hidden mt-6" style={{ border: "1px solid var(--border)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1772588627527-db42040f3a8b?w=1200"
            alt="계산기와 세금 서류 — 감가상각 환수 계산"
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 4단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            4단계 — 외국인 매도자 원천징수, FIRPTA 이해하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          매매가 구간에 따라 원천징수율이 달라집니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            04
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              매수자가 매도 대금 일부를 원천징수해 IRS에 납부
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              한국 국적으로 미국 영주권이나 시민권이 없는 상태에서 부동산을
              매도하는 경우, FIRPTA(Foreign Investment in Real Property Tax
              Act)에 따라 매수자가 매도 대금의 일정 비율을 원천징수해
              국세청(IRS)에 납부해야 합니다. 원칙적으로는 매도 총액의 15%가
              원천징수되며, 매수자가 거주 목적으로 사용하고 매매가가
              $300,000 이하이면 원천징수가 면제되고, $300,001에서
              $1,000,000 사이라면 10%로 낮아집니다.
            </p>
            <CheckList
              items={[
                "본인이 세법상 외국인(Nonresident Alien)에 해당하는지 확인",
                "매수자의 거주 목적 여부 확인",
                "매매가 구간별 원천징수율(0%, 10%, 15%) 확인",
                "ITIN 발급 여부 확인",
                "필요 시 Form 8288-B로 원천징수 감액 신청",
              ]}
            />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581427579553-50c0f6f55e52?w=1200"
            alt="100달러 지폐 — FIRPTA 원천징수"
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 5단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            5단계 — FIRPTA 원천징수는 최종 세금이 아니라는 점 알아두기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          다음 해 신고를 통해 초과분을 환급받을 수 있습니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            05
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Form 1040-NR 신고로 초과 원천징수액 환급 가능
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              FIRPTA로 원천징수된 금액은 최종 세금이 아니라 일종의
              선납입니다. 실제 세금은 매도 다음 해에 Form 1040-NR을 통해
              신고하며, 실제 양도소득세와 감가상각 환수액을 계산한 뒤
              원천징수액과 비교해 초과분이 있으면 환급받을 수 있습니다.
              장기 보유 부동산일수록 실제 세금이 원천징수액보다 적어
              환급받는 경우가 많습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            6단계 — 1031 Exchange로 세금 이연하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          45일·180일 규칙을 지켜야 하는 엄격한 절차입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            06
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              재투자 시 45일 이내 대체 매물 지정, 180일 이내 클로징
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              매도 대금을 다른 투자용 부동산에 재투자하면 1031 Exchange를
              통해 양도소득세와 감가상각 환수 세금 납부를 미룰 수 있습니다.
              다만 절차가 엄격해서, 매도 후 45일 이내에 대체 매물을 지정하고
              180일 이내에 클로징까지 마쳐야 합니다. 외국인 매도자의 경우
              FIRPTA 원천징수 자체는 1031 Exchange 여부와 관계없이 그대로
              적용되므로, 사전에 Form 8288-B로 원천징수 감액을 신청해두는
              것이 자금 계획에 유리합니다.
            </p>
          </div>
        </div>

        <TipBox>
          1031 Exchange는 세금을 없애는 것이 아니라 미루는 제도입니다.
          재투자한 부동산을 다시 매도할 때 이연된 세금이 함께 계산됩니다.
        </TipBox>
      </section>

      {/* ── 7단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            7단계 — 주(State) 세금과 실수령액 계산하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          연방세 외에 주 세금까지 계산해야 실수령액이 나옵니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            07
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              주(State)에 따라 별도의 양도소득세가 부과될 수 있습니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              연방세 외에도 부동산이 위치한 주(State)에 따라 별도의
              양도소득세가 부과될 수 있습니다. 플로리다, 텍사스처럼 주
              소득세가 없는 지역도 있지만, 캘리포니아나 뉴욕처럼 일반
              소득세율로 과세하는 주도 있습니다. 최종적으로 손에 쥐는
              금액은 매도가에서 연방 양도소득세, 감가상각 환수세, 주세,
              중개 수수료, 클로징 비용을 모두 뺀 금액이라는 점을 미리
              계산해두는 것이 좋습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            8단계 — 매도 후 신고 절차와 전문가 상담
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          매도가 끝났다고 세금 문제가 끝나는 것은 아닙니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            08
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Form 1040-NR과 Form 8288-A 사본을 함께 제출
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              외국인 매도자는 Form 1040-NR로 다음 해 세금 신고를 해야 하고,
              FIRPTA 원천징수 확인서(Form 8288-A 사본)를 함께 제출해
              원천징수액을 세액공제로 반영합니다. 클로징 서류, 감가상각
              내역, 개보수 영수증은 반드시 보관해두어야 하며, 매도 전 CPA나
              미국 세무 전문가와 미리 상담하면 예상치 못한 세금 부담을
              줄일 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          미국 부동산 매도 세금은 항목이 많고 복잡해 보이지만, 양도소득세,
          감가상각 환수, FIRPTA 원천징수라는 세 가지 큰 축만 이해하면 전체
          흐름을 파악할 수 있습니다.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#888" }}>
          이 글은 일반적인 정보 제공을 목적으로 하며, 실제 매도 전에는
          반드시 CPA 등 세무 전문가와 상담하시기 바랍니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          궁금한 점이 있으시면{" "}
          <Link href="/contact" style={{ color: AMBER, textDecoration: "underline" }}>
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="미국 부동산 매도 시 세금 완전 정리 — 초보자를 위한 쉬운 설명"
        description="양도소득세, 감가상각 환수, FIRPTA 원천징수, 1031 Exchange까지 초보 투자자 눈높이에서 정리합니다."
        url="https://www.kiminvestment.com/blog/real-estate-selling-tax-guide"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          매도 세금을 준비하신다면 아래 글들도 함께 읽어보시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/home-selling-guide",
              category: "투자 가이드",
              color: "#2ecc71",
              bg: "rgba(46,204,113,0.15)",
              title: "미국 부동산 매도 가이드 — 초보 셀러를 위한 전 과정 정리",
              excerpt:
                "미국에서 집을 팔 때 거쳐야 하는 준비, 가격 책정, 리스팅, 오퍼 검토, 인스펙션, 클로징, 세금까지 전 과정을 초보 셀러 눈높이에서 8단계로 정리합니다.",
            },
            {
              href: "/blog/1031-exchange-guide-korean",
              category: "세금/법률",
              color: "#3498db",
              bg: "rgba(52,152,219,0.15)",
              title: "미국 부동산 투자자라면 꼭 알아야 할 1031 Exchange",
              excerpt:
                "부동산을 팔고 다른 부동산을 살 때 세금을 미룰 수 있는 1031 Exchange. 핵심 조건부터 진행 절차, 장단점까지 한국어로 쉽게 정리했습니다.",
            },
            {
              href: "/blog/us-rental-income-tax-korean",
              category: "세금/법률",
              color: "#3498db",
              bg: "rgba(52,152,219,0.15)",
              title: "미국 렌탈 수익, 한국인은 세금을 어떻게 낼까?",
              excerpt:
                "미국에서 임대 수익이 발생하면 미국과 한국 양쪽에 세금 신고 의무가 생깁니다. ITIN 발급, Schedule E, 감가상각 혜택, FBAR 신고까지 정리했습니다.",
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
          매도 세금, 미리 계산해 보세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          FIRPTA 원천징수부터 1031 Exchange까지,
          <br />
          매도 전 세금 상담을 무료로 받아보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: AMBER, color: "#1a1a1a" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${AMBER}`, color: AMBER }}
          >
            블로그 전체보기 →
          </Link>
        </div>
      </section>

    </div>
  );
}
