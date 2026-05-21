import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BRRRR 전략으로 미국 부동산 투자금 회수하기 | 김통찰의 미국 부동산",
  description:
    "BRRRR(Buy·Rehab·Rent·Refinance·Repeat) 전략을 한국인 투자자 관점에서 쉽게 설명합니다. 실제 숫자 예시로 투자금 회수 과정을 단계별로 안내합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/brrrr-strategy",
  },
  openGraph: {
    title: "BRRRR 전략으로 미국 부동산 투자금 회수하기",
    description:
      "BRRRR(Buy·Rehab·Rent·Refinance·Repeat) 전략을 한국인 투자자 관점에서 쉽게 설명합니다. 실제 숫자 예시로 투자금 회수 과정을 단계별로 안내합니다.",
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"],
    type: "article",
    publishedTime: "2026-05-20",
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

export default function BrrrrStrategyPage() {
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
            부동산 투자 기초
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            BRRRR 전략으로
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: GREEN }}
          >
            미국 부동산 투자금 회수하기
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 560 }}
          >
            Buy · Rehab · Rent · Refinance · Repeat
            <br />
            낡은 집을 싸게 사서 수리하고, 세입자를 구하고, 재융자로 투자금을 회수해
            다음 매물에 다시 투자하는 전략입니다.
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
          2026년 5월 20일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 10분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["BRRRR", "재융자", "리모델링", "임대투자", "현금흐름"].map((tag) => (
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

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          미국 부동산 투자 커뮤니티에서 자주 등장하는 용어 중 하나가{" "}
          <span style={{ color: GREEN }} className="font-semibold">
            BRRRR
          </span>
          입니다. 처음 들으셨을 때 낯설게 느껴지셨을 수 있는데, 사실 구조 자체는
          그리 복잡하지 않습니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          BRRRR은{" "}
          <strong style={{ color: "var(--foreground)" }}>
            Buy(구매) → Rehab(리모델링) → Rent(임대) → Refinance(재융자) →
            Repeat(반복)
          </strong>
          의 첫 글자를 딴 전략입니다. 간단히 설명하면, 낡은 집을 저렴하게 매입해
          수리한 후 세입자를 구하고, 집값이 오른 상태에서 재융자(Cash-Out
          Refinance)를 받아 투자금을 회수합니다. 그리고 회수한 돈으로 다음 매물에
          다시 투자하는 방식을 반복합니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글에서는 한국인 투자자 관점에서 BRRRR 전략의 각 단계를 실제 숫자
          예시와 함께 쉽게 설명해 드리겠습니다.
        </p>
      </section>

      {/* ── BRRRR 글자 시각화 ── */}
      <section className="mb-14">
        <div className="flex items-start justify-center gap-2 sm:gap-6 flex-wrap">
          {[
            { letter: "B", label: "Buy", sub: "구매" },
            { letter: "R", label: "Rehab", sub: "리모델링" },
            { letter: "R", label: "Rent", sub: "임대" },
            { letter: "R", label: "Refinance", sub: "재융자" },
            { letter: "R", label: "Repeat", sub: "반복" },
          ].map(({ letter, label, sub }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{
                  background: `rgba(22,163,74,${0.12 + i * 0.04})`,
                  color: GREEN,
                  border: `2px solid ${GREEN}`,
                }}
              >
                {letter}
              </div>
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {label}
              </p>
              <p className="text-xs" style={{ color: "#666" }}>
                {sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 리모델링 공사 현장 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
          alt="리모델링 공사 현장 — BRRRR 전략의 Rehab 단계"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by Bidvine on Unsplash
      </p>

      {/* ── 01 Buy ── */}
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
            01 — Buy (구매): 저평가 매물 찾기
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          BRRRR의 성패는 첫 단계에서 결정됩니다. 얼마나 좋은 가격에 매물을
          매입하느냐가 핵심입니다.
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
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              ARV(After Repair Value, 수리 후 예상 가치) 기준으로 매물 평가
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              BRRRR 투자에서는 현재 집값이 아니라 수리 후 예상 가치(ARV)를 기준으로
              매입 여부를 판단합니다. 일반적으로{" "}
              <strong style={{ color: "var(--foreground)" }}>
                매입가 + 수리비의 합이 ARV의 75% 이내
              </strong>
              가 될 때 좋은 딜(Deal)로 봅니다.
            </p>
            <TipBox>
              ARV를 계산할 때는{" "}
              <strong style={{ color: "var(--foreground)" }}>
                Comps(Comparable Sales, 유사 매물 거래가)
              </strong>
              를 활용합니다. Zillow나 Redfin에서 같은 동네, 비슷한 평수, 수리된 집의
              최근 거래가를 3~5개 찾아 평균을 내면 대략적인 ARV를 추정할 수
              있습니다. 정확한 ARV는 현지 에이전트나 감정사와 함께 산출하는 것이
              안전합니다.
            </TipBox>
            <CheckList
              items={[
                "매입가 + 수리비 ≤ ARV × 75% 기준 충족 여부 확인",
                "같은 동네 수리된 집의 Comps 3~5개 조사",
                "홈 인스펙션(Home Inspection)으로 숨겨진 결함 파악",
                "지역 렌트 시세(Local Rental Market) 사전 조사",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 02 Rehab ── */}
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
            02 — Rehab (리모델링): 가치 올리는 수리에 집중
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          모든 수리가 가치를 높이는 것은 아닙니다. 비용 대비 효과가 큰 항목에
          집중하세요.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p
            className="font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            가치 상승 효과가 큰 수리 영역
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              {
                icon: "🍳",
                title: "주방(Kitchen)",
                desc: "캐비닛, 카운터탑, 조명 업그레이드. 임대 매력도에 가장 큰 영향을 줍니다.",
              },
              {
                icon: "🚿",
                title: "욕실(Bathroom)",
                desc: "타일, 변기, 세면대 교체. 세입자가 가장 꼼꼼히 보는 공간입니다.",
              },
              {
                icon: "🏠",
                title: "외관(Curb Appeal)",
                desc: "페인트, 정원, 현관문. 첫인상은 임대 문의 수에 직결됩니다.",
              },
              {
                icon: "🪟",
                title: "창문(Windows)",
                desc: "에너지 효율 개선으로 세입자 유지율을 높이고 감정가도 상승합니다.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-4"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {icon} {title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#888" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <WarningBox>
            <strong style={{ color: "#f87171" }}>고급 마감재는 지양하세요.</strong>{" "}
            BRRRR 전략에서 수리의 목적은 집을 럭셔리하게 만드는 것이 아니라,
            세입자가 깨끗하고 살기 좋다고 느끼도록 만드는 것입니다. 고급 대리석이나
            맞춤 제작 가구는 비용만 높아지고 ARV에 비례해 가치가 올라가지 않는
            경우가 많습니다.
          </WarningBox>
        </div>
      </section>

      {/* ── 03 Rent ── */}
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
            03 — Rent (임대): 좋은 세입자 구하기
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          안정적인 임대 수입은 재융자 심사와 장기 현금흐름 모두에 영향을 줍니다.
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
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              세입자 심사(Tenant Screening)가 가장 중요합니다
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              수리가 잘된 집에 나쁜 세입자가 들어오면 모든 노력이 물거품이 됩니다.
              일반적으로{" "}
              <strong style={{ color: "var(--foreground)" }}>
                신용점수(Credit Score) 620점 이상
              </strong>
              ,{" "}
              <strong style={{ color: "var(--foreground)" }}>
                월 수입이 임대료의 3배 이상
              </strong>
              인 세입자를 기준으로 심사합니다. 범죄 기록과 과거 퇴거(Eviction)
              이력도 반드시 확인하세요.
            </p>
            <TipBox>
              프로퍼티 매니지먼트(Property Management) 회사를 활용하면 세입자 심사,
              임대차 계약, 유지보수 요청 처리를 대신해 줍니다. 통상 월 임대료의
              8~12%를 수수료로 받습니다. 원격 투자자라면 강력히 권장합니다.
            </TipBox>
            <CheckList
              items={[
                "신용점수 620점 이상, 월 수입 임대료 3배 이상 기준 적용",
                "범죄 기록(Background Check) 및 퇴거 이력(Eviction History) 확인",
                "직전 집주인 레퍼런스 체크",
                "임대차 계약서(Lease Agreement)에 수리·페널티 조항 명시",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 04 Refinance ── */}
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
            04 — Refinance (재융자): 투자금 회수하기
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          BRRRR 전략의 핵심 단계입니다. 오른 집값을 기준으로 새 대출을 받아
          투자금을 돌려받습니다.
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
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              Cash-Out Refinance(현금 인출 재융자)란?
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              수리 후 상승한 집값을 기준으로 새로운 대출을 받아, 기존 대출을 갚고
              남은 금액을 현금으로 받는 방식입니다. 일반적으로 감정가(Appraised
              Value)의{" "}
              <strong style={{ color: "var(--foreground)" }}>
                70~80%까지
              </strong>{" "}
              대출(LTV 기준)이 가능합니다.
            </p>
            <TipBox>
              <strong style={{ color: "var(--foreground)" }}>
                시즌닝 기간(Seasoning Period)
              </strong>
              에 주의하세요. 대부분의 대출 기관은 Cash-Out Refinance를 신청하기 전
              해당 부동산을{" "}
              <strong style={{ color: "var(--foreground)" }}>
                6~12개월 이상 보유
              </strong>
              해야 한다는 조건을 요구합니다. 이 기간 동안 세입자를 구하고 임대
              수입을 증명하는 것도 재융자 심사에 유리합니다.
            </TipBox>
            <WarningBox>
              재융자 후에도{" "}
              <strong style={{ color: "#f87171" }}>
                월 현금흐름이 플러스(+)
              </strong>
              여야 합니다. 새 대출의 월 납부액(PITI)이 임대 수입보다 높아지면,
              매달 손실을 보는 구조가 됩니다. 재융자 전 반드시 새 모기지 조건으로
              현금흐름을 다시 계산하세요.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* ── 05 Repeat ── */}
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
            05 — Repeat (반복): 포트폴리오 확장하기
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          회수한 자금으로 다음 매물에 투자합니다. 이 사이클이 반복될수록
          포트폴리오가 성장합니다.
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
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              회수한 자금으로 다음 사이클 시작
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              재융자로 받은 현금을 다음 매물의 계약금과 수리비로 활용합니다. 첫
              번째 집은 여전히 임대 수입과 장기 시세 차익을 만들어 주면서, 회수된
              자금은 새로운 투자를 위해 다시 굴러가게 됩니다.
            </p>
            <TipBox>
              처음부터 100% 회수를 목표로 할 필요는 없습니다. 투자금의{" "}
              <strong style={{ color: "var(--foreground)" }}>
                70~80%만 회수
              </strong>
              되더라도 충분히 훌륭한 딜입니다. 소액의 잔여 투자금으로 집 한 채를
              보유하면서 임대 수입과 자산 상승을 동시에 누리는 구조 자체가 BRRRR
              전략의 진가입니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 부동산 계약 열쇠 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
          alt="부동산 계약 열쇠 — BRRRR 투자 숫자 예시"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by Maria Ziegler on Unsplash
      </p>

      {/* ── 실제 숫자 예시 ── */}
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
            실제 숫자로 보는 BRRRR 예시
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          아래는 실제 투자를 가정한 예시 수치입니다. 지역과 시장 상황에 따라
          달라질 수 있습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

          {/* 구매 카드 */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="px-5 py-3"
              style={{
                background: "rgba(22,163,74,0.15)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p className="font-bold text-sm" style={{ color: GREEN }}>
                구매 단계
              </p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: "매입가", value: "$150,000", color: "" },
                { label: "계약금 20%", value: "$30,000", color: "" },
                { label: "대출금", value: "$120,000", color: "" },
                { label: "제반 비용 (클로징 비용 등)", value: "$5,000", color: "" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span style={{ color: "#888" }}>{label}</span>
                  <span
                    className="font-semibold"
                    style={{ color: color || "var(--foreground)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 리모델링 카드 */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="px-5 py-3"
              style={{
                background: "rgba(59,130,246,0.15)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p className="font-bold text-sm" style={{ color: "#3b82f6" }}>
                리모델링 단계
              </p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: "공사비(Rehab Cost)", value: "$25,000", color: "" },
                { label: "총 투자 현금", value: "$60,000", color: "" },
                { label: "수리 후 예상 가치 (ARV)", value: "$220,000", color: GREEN },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span style={{ color: "#888" }}>{label}</span>
                  <span
                    className="font-semibold"
                    style={{ color: color || "var(--foreground)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
              <p className="text-xs pt-1" style={{ color: "#666" }}>
                (매입가+공사비 $175K ÷ ARV $220K ≈ 79.5%)
              </p>
            </div>
          </div>

          {/* 임대 카드 */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="px-5 py-3"
              style={{
                background: "rgba(245,158,11,0.15)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p className="font-bold text-sm" style={{ color: "#f59e0b" }}>
                임대 단계 (월 현금흐름)
              </p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: "월 임대료", value: "+$1,500", color: "#16a34a" },
                { label: "모기지 납부", value: "-$750", color: "#ef4444" },
                { label: "재산세·보험·관리비", value: "-$350", color: "#ef4444" },
                { label: "월 순 현금흐름", value: "+$400", color: "#16a34a" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span style={{ color: "#888" }}>{label}</span>
                  <span className="font-bold" style={{ color }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 재융자 카드 */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="px-5 py-3"
              style={{
                background: "rgba(139,92,246,0.15)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p className="font-bold text-sm" style={{ color: "#8b5cf6" }}>
                재융자 단계
              </p>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: "감정가", value: "$220,000", color: "" },
                { label: "LTV 75% 대출 한도", value: "$165,000", color: "" },
                { label: "기존 대출 상환", value: "-$120,000", color: "#ef4444" },
                { label: "돌려받는 현금", value: "$45,000", color: "#16a34a" },
                { label: "순 투자 잔액", value: "$15,000", color: "" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span style={{ color: "#888" }}>{label}</span>
                  <span
                    className="font-bold"
                    style={{ color: color || "var(--foreground)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 결과 요약 박스 */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(22,163,74,0.08)",
            border: "1px solid rgba(22,163,74,0.3)",
          }}
        >
          <p className="font-bold text-sm mb-5" style={{ color: GREEN }}>
            결과 요약
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "투자금 회수", value: "$45K / $60K", sub: "75% 회수" },
              { label: "보유 자산", value: "$220K", sub: "순 투자 $15K" },
              { label: "월 현금흐름", value: "+$400", sub: "안정적 수입" },
              { label: "다음 투자금", value: "$45K", sub: "재투자 가능" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="text-center">
                <p className="text-xl font-bold mb-1" style={{ color: GREEN }}>
                  {value}
                </p>
                <p
                  className="text-xs font-semibold mb-0.5"
                  style={{ color: "var(--foreground)" }}
                >
                  {label}
                </p>
                <p className="text-xs" style={{ color: "#666" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 주의사항 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "#f59e0b", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            BRRRR 전략 실행 시 주의사항
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          전략이 매력적일수록 함정도 많습니다. 사전에 꼭 확인하세요.
        </p>

        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-5">
            {[
              {
                title: "ARV 과대평가 금지",
                desc: "ARV를 낙관적으로 추정하면 재융자 시 기대만큼 현금을 못 받을 수 있습니다. 냉정한 Comps 분석이 필수입니다.",
              },
              {
                title: "리모델링 예비비 10~20% 확보",
                desc: "공사를 시작하면 예상치 못한 비용이 발생하는 경우가 많습니다. 총 공사비의 10~20%를 예비비로 반드시 남겨두세요.",
              },
              {
                title: "공실 기간 현금 여유분 준비",
                desc: "세입자 교체 시 1~2개월 공실이 발생할 수 있습니다. 그 기간에도 모기지를 낼 수 있는 여유 자금을 갖추세요.",
              },
              {
                title: "캐시아웃 재융자 금리 주의",
                desc: "Cash-Out Refinance는 일반 구매 대출보다 금리가 0.5~1% 높은 경우가 많습니다. 새 대출 조건으로 현금흐름을 다시 계산하세요.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: "#f59e0b" }}
                />
                <div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
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
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          BRRRR 전략의 핵심은{" "}
          <strong style={{ color: "var(--foreground)" }}>
            한 번의 투자금으로 여러 채의 부동산을 보유하는 구조
          </strong>
          를 만드는 것입니다. 저평가된 매물을 매입해 수리로 가치를 올리고,
          세입자로 현금흐름을 만들고, 재융자로 투자금을 회수해 다음 매물에
          재투자하는 이 사이클이 반복될수록 포트폴리오는 기하급수적으로
          성장합니다. 처음에는 복잡해 보이지만, 단계별로 하나씩 실행하다 보면
          BRRRR 전략이 왜 미국 부동산 투자자들 사이에서 가장 인기 있는 방법 중
          하나인지 직접 체감하시게 될 것입니다. 궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            문의하기(/contact)
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

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
          BRRRR 전략을 실행하기 전에 아래 글들도 함께 읽어보시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/zillow-guide",
              category: "투자 가이드",
              title: "Zillow로 미국 첫 집 사기 — 단계별 완전 가이드",
              excerpt:
                "미국 최대 부동산 플랫폼 Zillow 사용법을 한국인 눈높이에서 쉽게 설명합니다. 계정 생성부터 매물 검색, Zestimate, 모기지 계산, 투어 신청까지 7단계로 정리했습니다.",
            },
            {
              href: "/blog/mortgage-guide-for-koreans",
              category: "투자 가이드",
              title: "한국인을 위한 미국 모기지 완전 정복",
              excerpt:
                "미국 모기지는 한국 주택담보대출과 완전히 다릅니다. 고정금리 vs 변동금리, DTI 계산법, 외국인 모기지 조건까지 실제 대출 경험을 바탕으로 핵심만 정리했습니다.",
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
          BRRRR 투자, 함께 시작해 보세요
        </h2>
        <p
          className="text-sm mb-8 mx-auto text-green-100"
          style={{ maxWidth: 420 }}
        >
          매물 발굴부터 수리, 임대, 재융자까지
          <br />
          전 단계에 걸친 투자 상담을 도와드립니다.
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
