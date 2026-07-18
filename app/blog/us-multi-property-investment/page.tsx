import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: "미국 다주택 투자의 장점 — 한국과 다른 이유 | 김통찰의 미국 부동산",
  description:
    "한국에서는 다주택자가 규제와 비난의 대상이지만, 미국에서는 임대 공급자이자 투자자로 인정받습니다. 월세 수입, 대출 레버리지, 세금 공제, 1031 Exchange, 지역 다양성까지 미국식 다주택 투자의 다섯 가지 장점을 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/us-multi-property-investment",
  },
  openGraph: {
    title: "미국 다주택 투자의 장점 — 한국과 다른 이유",
    description:
      "한국에서는 다주택자가 규제와 비난의 대상이지만, 미국에서는 임대 공급자이자 투자자로 인정받습니다. 월세 수입, 대출 레버리지, 세금 공제, 1031 Exchange, 지역 다양성까지 미국식 다주택 투자의 다섯 가지 장점을 정리합니다.",
    images: ["https://images.unsplash.com/photo-1758304480340-cb2c43aafd4f?w=900&q=80"],
    type: "article",
    publishedTime: "2026-07-18",
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

export default function UsMultiPropertyInvestmentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1758304480340-cb2c43aafd4f?w=1600&q=80"
          alt="항공에서 내려다본 미국 주택가 — 다주택 투자의 무대"
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
            미국 다주택 투자의 장점
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "#4ade80" }}
          >
            한국과 다른 이유
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            한국에서는 다주택자가 규제와 비난의 대상이지만
            <br />
            미국에서는 임대 공급자이자 투자자로 인정받습니다.
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
        <span className="text-xs" style={{ color: "#666" }}>2026년 7월 18일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 8분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["다주택 투자", "임대 수익", "1031 Exchange", "감가상각", "캐시플로우"].map((tag) => (
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
        title="미국 다주택 투자의 장점 — 한국과 다른 이유"
        description="월세 수입, 대출 레버리지, 세금 공제, 1031 Exchange, 지역 다양성까지 미국식 다주택 투자의 다섯 가지 장점을 정리합니다."
        url="https://www.kiminvestment.com/blog/us-multi-property-investment"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          한국에서는 주택 수가 늘어나면 세금과 대출 규제를 먼저 걱정하게
          됩니다. 반면 미국에서는 보유 주택 수 자체보다 각 부동산이 안정적인
          임대수익을 만드는지가 더 중요합니다. 이런 점에서 미국 부동산은 여러
          채를 장기적으로 보유하며 자산을 늘리기에 비교적 유리한 구조를
          가지고 있습니다.
        </p>
      </section>

      {/* ── 장점 1 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            장점 1 — 매월 월세 수입을 만들 수 있습니다
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          미국 임대시장의 기본 구조를 이해하면 꾸준한 현금흐름을 설계할 수 있습니다.
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
              대출금, 세금, 보험료를 제외하고도 남는 구조를 만드는 것이 핵심
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              미국의 임대시장은 대부분 월세 중심입니다. 임대료에서 대출금,
              재산세, 보험료, 수리비 등을 제외하고도 돈이 남는 부동산을
              구입하면 매월 꾸준한 현금흐름(Cash Flow, 임대수입에서 각종
              지출을 제외하고 실제로 손에 남는 돈)을 만들 수 있습니다. 이
              현금흐름은 집값 상승과 별개로 매달 발생하는 수입이기 때문에,
              시세 변동에 관계없이 안정적인 자산 운용의 기반이 됩니다.
            </p>
          </div>
        </div>

        <TipBox>
          매물을 고를 때는 예상 시세 차익보다 매달 실제로 남는 현금흐름을
          먼저 계산해 보는 것이 안전합니다. 공실 기간과 수리비까지 반영한
          보수적인 추정이 필요합니다.
        </TipBox>

        <div
          className="rounded-2xl overflow-hidden relative mt-6"
          style={{ border: "1px solid var(--border)", height: 360 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1742318592061-15c5f19e1e47?w=1200&q=80"
            alt="집 열쇠와 현금 — 임대 수입으로 만드는 캐시플로우"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── 장점 2 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            장점 2 — 대출을 활용해 자산을 확대할 수 있습니다
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          적은 자기자본으로도 임차인의 월세를 통해 대출을 상환하며 자산을 쌓을 수 있습니다.
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
              신용점수, 소득, 임대수입을 기반으로 투자용 대출이 가능합니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              미국에서는 신용점수, 소득, 임대수입과 부동산의 수익성을
              바탕으로 투자용 부동산 대출을 받을 수 있습니다. 적은
              자기자본에 대출을 더해 부동산을 구입하고, 임차인의 월세로
              대출을 상환하면서 자산을 쌓아갈 수 있습니다. 이렇게 대출을
              지렛대 삼아 자산을 늘리는 방식을 레버리지(Leverage, 대출을
              활용해 적은 자본으로 더 큰 자산을 운용하는 방식)라고 부르며,
              미국 투자용 부동산 대출 시장에서는 비교적 일반적인 전략으로
              자리 잡고 있습니다.
            </p>
            <CheckList
              items={[
                "신용점수(Credit Score) 요건 사전 확인",
                "소득 대비 부채비율(DTI) 점검",
                "임대수입 예상치로 상환 여력 계산",
                "자기자본(계약금) 비율에 따른 대출 조건 비교",
              ]}
            />
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden relative mt-6"
          style={{ border: "1px solid var(--border)", height: 360 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?w=1200&q=80"
            alt="대출 서류에 서명하는 모습 — 투자용 부동산 대출 실행"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── 장점 3 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            장점 3 — 세금상 비용 처리가 가능합니다
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          실제 현금흐름보다 과세소득을 낮추는 효과를 기대할 수 있습니다.
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
              모기지 이자부터 감가상각까지 폭넓게 비용으로 인정받습니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              임대수입에서 모기지 이자, 재산세, 보험료, 수리비, 관리비 등을
              비용으로 공제할 수 있습니다. 건물에 대해서는
              감가상각(Depreciation, 건물의 가치가 시간이 지나며 줄어드는
              것을 세법상 매년 일정 금액씩 비용으로 인정해 주는 제도)도
              적용할 수 있어, 실제 현금흐름보다 과세소득을 낮추는 효과를
              기대할 수 있습니다. 즉 매달 실제로는 현금이 남더라도, 세금
              신고상으로는 소득이 적게 잡혀 부담이 줄어드는 구조가
              만들어집니다.
            </p>
          </div>
        </div>

        <TipBox>
          감가상각은 매년 자동으로 적용되는 것이 아니라 세금 신고 시 별도로
          청구해야 하는 항목입니다. 매입가, 건물과 토지의 비율, 취득 시점
          등을 정확히 기록해 두면 신고가 훨씬 수월해집니다.
        </TipBox>
      </section>

      {/* ── 장점 4 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            장점 4 — 부동산을 팔고 더 큰 자산으로 이동하기 좋습니다
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          매도 자금을 다음 부동산에 재투자하며 자산 규모를 키울 수 있습니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            04
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              1031 Exchange로 양도세 납부를 뒤로 미룰 수 있습니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              미국의 1031 Exchange(동종자산 교환을 통한 양도세 이연 제도)
              제도를 활용하면 일정한 조건 아래 투자용 부동산을 매도한 후
              다른 투자용 부동산을 구입하면서 양도차익에 대한 세금 납부를
              뒤로 미룰 수 있습니다. 이를 통해 매각자금을 온전히 다음
              부동산에 다시 투자하며 자산 규모를 키울 수 있습니다.
            </p>
          </div>
        </div>

        <WarningBox>
          1031 Exchange는 세금을 없애는 제도가 아니라 미루는 제도이며, 매도
          후 45일 이내 대체 매물 지정, 180일 이내 클로징이라는 엄격한
          기한을 지켜야 합니다. 절차와 조건은{" "}
          <Link href="/blog/1031-exchange-guide-korean" style={{ color: GREEN, textDecoration: "underline" }}>
            1031 Exchange 가이드
          </Link>
          에서 더 자세히 확인하실 수 있습니다.
        </WarningBox>
      </section>

      {/* ── 장점 5 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            장점 5 — 지역과 가격대의 선택지가 다양합니다
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          자금 규모와 투자 목적에 맞춰 시장을 선택할 수 있는 폭이 넓습니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            05
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              현금흐름형, 성장형, 관리 편의형 등 목적에 맞는 지역 선택이 가능합니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              미국은 지역에 따라 주택가격과 임대수익률의 차이가 큽니다.
              투자자는 자신의 자금과 투자 목적에 맞춰 현금흐름이 좋은
              지역, 성장 가능성이 높은 지역 또는 관리가 쉬운 지역을 선택할
              수 있습니다.
            </p>
            <CheckList
              items={[
                "지역별 주택가격 대비 임대수익률 비교",
                "인구 유입과 일자리 성장 등 장기 성장 가능성 확인",
                "원격 투자 시 프로퍼티 매니지먼트 여건 확인",
                "재산세율과 임대인 관련 법규의 주(State)별 차이 확인",
              ]}
            />
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden relative mt-6"
          style={{ border: "1px solid var(--border)", height: 360 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1765106893273-980e5bf89a7c?w=1200&q=80"
            alt="항공에서 내려다본 샌안토니오 주택가 — 지역별 투자 선택지"
            fill
            className="object-cover"
          />
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

        <WarningBox>
          미국 다주택 투자의 가장 큰 장점은 월세 수입, 대출 활용, 세금
          혜택과 재투자를 결합해 장기적으로 자산을 확대할 수 있다는
          점입니다. 다만 성공적인 투자를 위해서는 집값 상승만 기대하기보다
          임대수입, 공실, 세금, 보험료와 수리비를 모두 반영한 실제
          현금흐름을 꼼꼼하게 계산해야 합니다.
        </WarningBox>

        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          궁금한 점이 있으시면{" "}
          <Link href="/contact" style={{ color: GREEN, textDecoration: "underline" }}>
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="미국 다주택 투자의 장점 — 한국과 다른 이유"
        description="월세 수입, 대출 레버리지, 세금 공제, 1031 Exchange, 지역 다양성까지 미국식 다주택 투자의 다섯 가지 장점을 정리합니다."
        url="https://www.kiminvestment.com/blog/us-multi-property-investment"
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
          미국 다주택 투자를 검토하신다면 아래 글들도 함께 읽어보시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/why-usa-welcomes-landlords",
              category: "나의 투자 경험담",
              color: "#e74c3c",
              bg: "rgba(231,76,60,0.15)",
              title: "미국은 왜 다주택자를 대우해줄까? — 한국과 전혀 다른 부동산 문화",
              excerpt:
                "한국에서 다주택자는 규제와 비난의 대상이었습니다. 하지만 미국에서는 달랐습니다. 직접 Landlord가 되어 첫 월세를 받던 날의 경험과 함께, 두 나라의 부동산 문화 차이를 정리했습니다.",
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
              href: "/blog/us-real-estate-tax-benefits",
              category: "세금/법률",
              color: "#3498db",
              bg: "rgba(52,152,219,0.15)",
              title: "미국 부동산 투자, 세금 혜택이 얼마나 클까? — 투자자가 꼭 알아야 할 7가지",
              excerpt:
                "감가상각, 모기지 이자 공제, 1031 Exchange까지. 미국 부동산이 투자자에게 세금 면에서 얼마나 유리한 구조인지 7가지 핵심 혜택으로 정리했습니다.",
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
          미국 다주택 투자, 어디서부터 시작할지 고민되신다면
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          월세 수입 설계부터 대출, 세금, 1031 Exchange까지
          <br />
          다주택 투자 상담을 무료로 받아보세요.
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
