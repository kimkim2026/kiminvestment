import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title:
    "21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것 | 김통찰의 미국 부동산",
  description:
    "2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/road-to-housing-act-2026",
  },
  openGraph: {
    title: "21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것",
    description:
      "2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다.",
    images: ["https://images.unsplash.com/photo-1519922838705-9d6cb8bcfaea?w=900&q=80"],
    type: "article",
    publishedTime: "2026-07-28",
    url: "https://kiminvestment.com/blog/road-to-housing-act-2026",
  },
};

const AMBER = "#d97706";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(217,119,6,0.08)",
        border: "1px solid rgba(217,119,6,0.25)",
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

export default function RoadToHousingAct2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{
          minHeight: 360,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519922838705-9d6cb8bcfaea?w=1600')",
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
            style={{ background: "rgba(217,119,6,0.18)", color: AMBER }}
          >
            세금/법률
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            21st Century ROAD to Housing Act 완전정리
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: AMBER }}
          >
            한국인 투자자가 알아야 할 것
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            2026년 7월 11일 발효된 초당적 주택 법안, 12개 Title 60개 섹션의
            <br />
            핵심 내용과 실제 투자 영향을 5단계로 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: AMBER, color: "#1a1a1a" }}
            >
              투자 상담 신청하기 →
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
      <div
        className="flex flex-wrap items-center gap-4 mb-14 pb-6"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(217,119,6,0.15)", color: AMBER }}
        >
          세금/법률
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 7월 28일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 6분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["ROAD to Housing Act", "미국 부동산법", "기관투자자 규제", "주택공급 정책", "부동산 투자자 가이드"].map((tag) => (
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
        title="21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것"
        description="2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다."
        url="https://www.kiminvestment.com/blog/road-to-housing-act-2026"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          2026년 7월 11일,{" "}
          <strong style={{ color: "var(--foreground)" }}>
            21st Century ROAD to Housing Act
          </strong>
          가 정식으로 발효됐습니다. 민주당과 공화당이 함께 지지한 초당적
          주택 법안으로, 주택 공급 확대부터 기관 투자자 규제, 모기지·감정평가
          제도 개편까지 아우르는{" "}
          <strong style={{ color: "var(--foreground)" }}>
            12개 Title, 60개 섹션
          </strong>
          으로 구성된 대규모 법안입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          법안 이름과 규모만 보면 복잡하게 느껴지실 수 있지만, 한국인
          투자자 입장에서 실제로 챙겨야 할 부분은 생각보다 명확합니다. 이
          글에서는 법안 통과 과정부터 기관 투자자 규제, 주택 공급 확대
          조항, 모기지·감정평가 변화, 그리고 한국인 투자자에게 실질적으로
          의미하는 바까지 5단계로 정리해 드리겠습니다.
        </p>
      </section>

      {/* ── 1단계 — 법안 통과 과정 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1단계 — 법안 통과 과정
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          하원과 상원을 오가며 조율을 거쳐 최종 서명까지 이어진 과정입니다.
        </p>

        <div className="space-y-4 mb-6">
          {[
            { step: "1차 하원 통과", detail: "390 대 9 압도적 찬성으로 하원 통과" },
            { step: "1차 상원 통과", detail: "89 대 10으로 상원 통과, 상하원 조율(Conference) 절차 개시" },
            { step: "상하원 조율", detail: "세부 조항 조정을 거쳐 최종 단일안 마련" },
            { step: "최종 상원 통과", detail: "85 대 5로 최종안 상원 통과" },
            { step: "최종 하원 통과", detail: "358 대 32로 최종안 하원 통과" },
            { step: "대통령 서명·발효", detail: "트럼프 대통령 서명, 2026년 7월 11일부로 발효" },
          ].map(({ step, detail }, i) => (
            <div key={i} className="flex items-start gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "rgba(217,119,6,0.15)", color: AMBER, border: `1px solid ${AMBER}` }}
              >
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--foreground)" }}>
                  {step}
                </p>
                <p className="text-sm" style={{ color: "#888" }}>
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <WarningBox>
          법안 통과까지 6개월 이상 걸린 초당적 협상 과정이었습니다. 하원과
          상원 모두에서 큰 표차로 통과됐다는 점은, 이 법안이 특정 정당의
          정책이 아니라 주택 공급 부족이라는 공통의 문제의식에서 출발했다는
          것을 보여줍니다.
        </WarningBox>
      </section>

      {/* ── 2단계 — 기관 투자자 단독주택 매입 제한 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2단계 — 가장 중요한 부분, 기관 투자자 단독주택 매입 제한 (Title 10)
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          이번 법안에서 가장 많이 회자되는 조항이지만, 대상은 생각보다
          제한적입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            10
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              350채 이상 보유한 대형 기관 투자자의 신규 매입 제한
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              Title 10의 핵심은{" "}
              <strong style={{ color: "var(--foreground)" }}>
                단독주택(Single-Family Home) 350채 이상을 보유한 대형 기관
                투자자
              </strong>
              가 기존에 지어진 단독주택을 신규로 매입하는 행위를 제한하는
              내용입니다. 대형 리츠(REIT)나 사모펀드 계열 임대 회사가
              대상이며, 다만{" "}
              <strong style={{ color: "var(--foreground)" }}>
                임대 목적의 신축 주택
              </strong>
              은 이 제한에서 예외로 인정됩니다. 이는 기존 매물을 두고
              기관과 실수요자·개인 투자자가 경쟁하는 구조를 줄이는 대신,
              기관 자금이 신규 공급 쪽으로 흘러가도록 유도하려는 취지입니다.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              법안에는 기관이 보유한 임대주택에 거주 중인 세입자를 보호하기
              위한{" "}
              <strong style={{ color: "var(--foreground)" }}>
                HUD(주택도시개발부) 세입자 지원 창구
              </strong>
              신설 조항도 함께 포함됐습니다.
            </p>
          </div>
        </div>

        <WarningBox>
          초기 상원안에 있던{" "}
          <strong style={{ color: "#f87171" }}>
            7년 강제 매각(Forced Divestiture) 조항
          </strong>
          은 최종안에서 삭제됐습니다. 즉, 이미 350채 이상을 보유한
          기관이라 해도 보유 물량을 강제로 매각해야 하는 의무는 없으며,
          앞으로의 신규 매입만 제한받습니다.
        </WarningBox>

        <p className="font-semibold mb-2 mt-6" style={{ color: "var(--foreground)" }}>
          한 줄로 정리하면
        </p>
        <CheckList
          items={[
            "개인 투자자와 소규모 LLC 명의의 단독주택 매입에는 영향이 없습니다",
            "350채 이상을 보유한 대형 리츠·펀드 계열 기관만 규제 대상입니다",
            "오히려 대형 기관의 매물 시장 이탈로 개인 투자자의 매물 경쟁이 완화될 가능성이 있습니다",
          ]}
        />
      </section>

      {/* ── 3단계 — 주택 공급 확대 조항 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3단계 — 주택 공급 확대 조항
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          기관 투자자 규제만큼이나 법안의 무게중심을 차지하는 부분입니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-5">
            {[
              {
                title: "6층 단일 계단(Single-Stair) 건물 가이드라인",
                desc: "중저층 아파트에서 계단을 하나만 두고도 짓는 것을 허용하는 연방 차원의 설계 가이드라인을 제시해, 좁은 부지에서도 중밀도 주택 공급이 쉬워지도록 유도합니다.",
              },
              {
                title: "USDA 인필(Infill) 부지 환경 검토 면제",
                desc: "이미 개발된 지역 안의 자투리 부지(Infill Lot)에 주택을 지을 때, 일부 연방 환경 검토 절차를 면제해 인허가 기간을 단축합니다.",
              },
              {
                title: "지자체 미개발 부지 데이터베이스 공개 의무화",
                desc: "지방 정부가 보유·관리하는 미개발 공공 부지 정보를 데이터베이스 형태로 공개하도록 의무화해, 개발업자와 투자자가 신규 공급 가능 부지를 쉽게 찾을 수 있게 합니다.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: AMBER }}
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
          세 조항 모두 공통적으로 겨냥하는 것은 신규 공급 속도입니다. 인허가
          기간이 짧아지고 지을 수 있는 부지 정보가 투명해질수록, 신축
          임대주택에 투자하거나 개발업자와 협업하는 투자자에게는 오히려
          기회가 늘어나는 구조입니다.
        </TipBox>
      </section>

      {/* ── 4단계 — 모기지·감정평가 관련 변화 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            4단계 — 모기지·감정평가 관련 변화
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          대출과 감정평가 실무에도 자잘하지만 실질적인 변화가 있습니다.
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
              10만 달러 이하 소액 모기지 FHA 파일럿 프로그램
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              대출 금액이 작다는 이유로 취급을 꺼리는 대출 기관이 많았던{" "}
              <strong style={{ color: "var(--foreground)" }}>
                10만 달러 이하 소액 모기지
              </strong>
              시장을 활성화하기 위해 FHA(연방주택청) 차원의 파일럿
              프로그램이 신설됐습니다. 저가 매물이 많은 중서부·남부 지역
              소형 주택 거래에 특히 도움이 될 것으로 예상됩니다.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
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
              감정평가 업계 개혁 — 트레이니 감정사 자격 완화
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              감정사 부족으로 인한 거래 지연 문제를 해소하기 위해, 트레이니
              감정사(Trainee Appraiser)가 정식 자격을 취득하기까지 필요한
              요건을 일부 완화했습니다. 감정평가 인력이 늘어나면 거래
              클로징까지 걸리는 시간이 단축될 것으로 기대됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5단계 — 한국인 투자자에게 실질적으로 의미하는 것 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            5단계 — 한국인 투자자에게 실질적으로 의미하는 것
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          결론부터 말씀드리면, 개인 명의 투자자에게 새로 생기는 규제는
          없습니다.
        </p>

        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-3" style={{ background: "rgba(217,119,6,0.12)" }}>
            <div className="p-4 text-sm font-bold" style={{ color: AMBER }}>구분</div>
            <div className="p-4 text-sm font-bold" style={{ color: AMBER }}>영향 여부</div>
            <div className="p-4 text-sm font-bold" style={{ color: AMBER }}>설명</div>
          </div>
          {[
            {
              type: "대형 기관 투자자 (350채 이상 보유)",
              impact: "영향 있음",
              impactColor: "#f87171",
              desc: "기존 단독주택 신규 매입 제한. 임대 목적 신축은 예외.",
            },
            {
              type: "개인 투자자·소규모 LLC (한국인 투자자 포함)",
              impact: "영향 없음",
              impactColor: "#16a34a",
              desc: "매입 채수 제한 없이 기존과 동일하게 단독주택 매입·보유 가능.",
            },
            {
              type: "신축 임대주택 개발·투자",
              impact: "간접 긍정",
              impactColor: "#16a34a",
              desc: "공급 확대 조항(인허가 단축, 부지 정보 공개)으로 오히려 기회 확대.",
            },
            {
              type: "소액·저가 매물 모기지 이용자",
              impact: "간접 긍정",
              impactColor: "#16a34a",
              desc: "10만 달러 이하 소액 모기지 FHA 파일럿으로 대출 접근성 개선.",
            },
          ].map(({ type, impact, impactColor, desc }, i) => (
            <div
              key={i}
              className="grid grid-cols-3"
              style={{
                borderTop: "1px solid var(--border)",
                background: i % 2 === 0 ? "transparent" : "var(--surface)",
              }}
            >
              <div className="p-4 text-sm" style={{ color: "var(--foreground)" }}>{type}</div>
              <div className="p-4 text-sm font-semibold" style={{ color: impactColor }}>{impact}</div>
              <div className="p-4 text-sm" style={{ color: "#888" }}>{desc}</div>
            </div>
          ))}
        </div>

        <TipBox>
          지금처럼 개인 명의나 LLC로 단독주택을 매입하는 방식에는 규제
          영향이 없습니다. Title 10의 매입 제한은 350채 이상을 보유한
          대형 기관에만 적용되며, 한국인 투자자 대부분이 활용하는 개인
          명의 또는 소규모 LLC 구조는 이번 법안 발효 전과 다르지 않게
          동일한 방식으로 매물을 검토하고 매입하실 수 있습니다.
        </TipBox>
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
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          ROAD to Housing Act는 법안 자체가 방대한 만큼, 앞으로 HUD와
          FHA가 내놓을 세부 시행 규정을 계속 지켜봐야 합니다. 350채
          기준선의 세부 산정 방식, HUD 세입자 지원 창구의 구체적인 운영
          방식, 6층 단일 계단 가이드라인을 각 주가 실제로 얼마나 채택할지
          등은 아직 확정되지 않은 부분이 많고, 완전한 시행까지는 수년이
          걸릴 수 있습니다. 다만 지금 시점에서 분명한 것은, 개인 명의로
          단독주택을 매입해 임대하는 한국인 투자자의 투자 방식 자체에는
          변화가 없다는 점입니다. 궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: AMBER, textDecoration: "underline" }}
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것"
        description="2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다."
        url="https://www.kiminvestment.com/blog/road-to-housing-act-2026"
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
          법안과 세금 이슈를 실제 투자 사례와 함께 이해하는 데 도움이 되는
          글들입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/property-tax-uncapping-explained",
              category: "세금/법률",
              title: "같은 동네, 비슷한 집인데 왜 재산세는 다를까",
              excerpt:
                "미국에서는 같은 동네, 비슷한 크기의 집이라도 재산세가 두 배 이상 차이 나는 경우가 흔합니다. 실제 렌탈 부동산 두 채를 비교하며 그 이유를 한국 투자자 눈높이에서 쉽게 설명합니다.",
            },
            {
              href: "/blog/us-multi-property-investment",
              category: "투자 가이드",
              title: "미국 다주택 투자의 장점 — 한국과 다른 이유",
              excerpt:
                "한국에서는 다주택자가 규제와 비난의 대상이지만, 미국에서는 임대 공급자이자 투자자로 인정받습니다. 월세 수입, 대출 레버리지, 세금 공제, 1031 Exchange까지 미국식 다주택 투자의 장점을 정리합니다.",
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
                style={{ background: "rgba(217,119,6,0.15)", color: AMBER }}
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
      <section className="rounded-2xl p-10 text-center bg-amber-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          법안 변화 속에서도 투자 기준은 명확하게
        </h2>
        <p className="text-sm mb-8 mx-auto text-amber-100" style={{ maxWidth: 420 }}>
          새로운 규제와 세법 변화가 내 투자에 어떤 의미인지
          <br />
          궁금하신 점을 상담을 통해 확인해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.zillow.com/homes/for_sale/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: AMBER }}
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
