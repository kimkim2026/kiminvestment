import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "미국 LLC 설립 방법 — 한국인 투자자를 위한 7단계 완전 가이드 | 김통찰의 미국 부동산",
  description:
    "미국 부동산 투자를 위한 LLC 설립 절차를 한국인 투자자 관점에서 단계별로 정리했습니다. 주(State) 선택부터 EIN 신청, 운영 계약서 작성, 연간 유지 의무까지 알아야 할 모든 것을 담았습니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/llc-setup-guide",
  },
  openGraph: {
    title: "미국 LLC 설립 방법 — 한국인 투자자를 위한 7단계 완전 가이드",
    description:
      "미국 부동산 투자를 위한 LLC 설립 절차를 한국인 투자자 관점에서 단계별로 정리했습니다. 주(State) 선택부터 EIN 신청, 운영 계약서 작성, 연간 유지 의무까지 알아야 할 모든 것을 담았습니다.",
    url: "https://www.kiminvestment.com/blog/llc-setup-guide",
    type: "article",
    publishedTime: "2026-09-04",
  },
};

const AMBER = "#d97706";
const TITLE = "미국 LLC 설립 방법 — 한국인 투자자를 위한 7단계 완전 가이드";
const DESCRIPTION =
  "미국 부동산 투자를 위한 LLC 설립 절차를 한국인 투자자 관점에서 단계별로 정리했습니다. 주(State) 선택부터 EIN 신청, 운영 계약서 작성, 연간 유지 의무까지 알아야 할 모든 것을 담았습니다.";
const URL = "https://www.kiminvestment.com/blog/llc-setup-guide";

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

function StepCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex gap-5 mb-5"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <span
        className="text-2xl font-bold flex-shrink-0 w-10 text-center"
        style={{ color: AMBER }}
      >
        {number}
      </span>
      <div className="w-full">
        <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
          {title}
        </p>
        <div className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function LlcSetupGuidePage() {
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
          style={{ background: "rgba(217,119,6,0.05)" }}
        />
        <div
          className="relative z-10 p-8 md:p-12 w-full flex flex-col justify-end"
          style={{ minHeight: 360 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 self-start"
            style={{ background: "rgba(217,119,6,0.18)", color: AMBER }}
          >
            세금/법률
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            미국 LLC 설립 방법
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-3" style={{ color: AMBER }}>
            한국인 투자자를 위한 7단계 완전 가이드
          </p>
          <p className="text-base mb-6" style={{ color: "#94a3b8", maxWidth: 560 }}>
            주(State) 선택부터 EIN 신청, 운영 계약서 작성, 연간 유지 의무까지.
            <br />
            미국 부동산 투자를 위한 LLC 설립 절차를 단계별로 정리했습니다.
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
        <span className="text-xs" style={{ color: "#666" }}>2026년 9월 4일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 9분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["LLC", "법인 설립", "부동산 투자", "세금", "Delaware", "Wyoming", "EIN", "외국인 투자자"].map(
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

      <ShareButtons title={TITLE} description={DESCRIPTION} url={URL} />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          미국 부동산에 투자하기로 마음먹은 순간부터 함께 따라오는 질문이
          있습니다. &quot;개인 명의로 살까, LLC를 만들어서 살까?&quot; 결론부터
          말씀드리면, LLC의 가장 큰 목적은{" "}
          <strong style={{ color: "var(--foreground)" }}>
            책임 제한(Liability Protection)
          </strong>
          입니다. 세입자가 다쳐 소송을 당하거나 부동산에서 발생한 문제로 법적
          책임을 지게 될 경우, LLC 명의로 소유하고 있다면 그 책임이 LLC의
          자산 범위 내로 제한되고 개인 자산(거주 주택, 예금, 다른 투자 자산
          등)은 원칙적으로 보호받습니다. 개인 명의로 투자하면 이 방어막이
          없어, 소송 결과에 따라 부동산 외의 개인 자산까지 위험에 노출될 수
          있습니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          여기서 꼭 짚고 넘어가야 할 오해가 하나 있습니다. LLC를 만든다고
          해서 세금이 저절로 줄어드는 것은 아니라는 점입니다. 대부분의 LLC는{" "}
          <strong style={{ color: "var(--foreground)" }}>
            Pass-Through Taxation(통과 과세)
          </strong>{" "}
          방식으로 과세됩니다. LLC 자체는 법인세를 내지 않고, 수익과 손실이
          그대로 구성원(Member) 개인에게 &quot;통과&quot;되어 개인 세율로
          과세됩니다. 즉 LLC는 세금을 줄여주는 도구가 아니라, 자산과 책임을
          분리해 투자자를 보호하는 법적 장치에 가깝습니다. 세금 혜택은 LLC
          여부와 무관하게 감가상각, 경비 처리 등 부동산 투자 자체에서 나오는
          경우가 대부분입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글에서는 한국인 투자자 관점에서, 미국 LLC를 설립하는 전 과정을
          7단계로 나누어 정리해 드리겠습니다.
        </p>
      </section>

      {/* ── 어떤 주에 설립할까 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: AMBER, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            어떤 주(State)에 설립할까
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          Delaware와 Wyoming은 LLC 설립지로 자주 언급되지만, 부동산 투자에서는
          실제 물건이 위치한 주에 설립하는 것이 대부분의 경우 더 현실적입니다.
        </p>

        <WarningBox>
          <strong style={{ color: "#f87171" }}>
            부동산이 위치한 주와 다른 주에서 LLC를 설립하면,
          </strong>{" "}
          해당 부동산이 있는 주에 별도로{" "}
          <strong style={{ color: "var(--foreground)" }}>
            Foreign LLC 등록(Foreign Qualification)
          </strong>
          을 해야 합니다. 예를 들어 Wyoming에서 LLC를 설립하고 텍사스에 있는
          부동산을 매입한다면, 텍사스 주에도 별도의 등록비와 연간 유지비를
          내고 Foreign LLC로 등록해야 합니다. 결과적으로 두 주 모두에 비용과
          서류 의무가 생기는 셈이라, &quot;프라이버시가 좋다더라&quot;는 이유
          만으로 타주 설립을 선택하면 오히려 비용과 관리 부담이 늘어날 수
          있습니다.
        </WarningBox>

        <div className="overflow-x-auto my-6">
          <table
            className="w-full text-sm border-collapse rounded-lg overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                {["주(State)", "설립비", "연간 유지비", "프라이버시", "실익"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2 text-left font-semibold"
                    style={{ border: "1px solid var(--border)", color: AMBER }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Delaware",
                  "약 $90~",
                  "연 $300 (Franchise Tax)",
                  "중간 (구성원 비공개)",
                  "대규모 포트폴리오, 향후 투자 유치·법인화 계획이 있는 경우",
                ],
                [
                  "Wyoming",
                  "약 $100~",
                  "연 $60~ (License Tax)",
                  "높음 (구성원·매니저 비공개)",
                  "프라이버시와 저비용을 중시하는 소규모 개인 투자자",
                ],
                [
                  "부동산 소재지 주",
                  "주별 상이 ($50~$500)",
                  "주별 상이",
                  "낮음~중간 (주별 상이)",
                  "단일 주에 투자하는 대부분의 초보 투자자 — Foreign 등록이 불필요",
                ],
              ].map((row, rIdx) => (
                <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? "transparent" : "var(--surface)" }}>
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-2"
                      style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <TipBox>
          투자 부동산이 한 개 주에 집중되어 있다면, 그 주에서 바로 LLC를
          설립하는 것이 가장 단순하고 비용 효율적입니다. 여러 주에 걸쳐
          포트폴리오를 확장할 계획이 있거나 자산 규모가 커서 지주회사
          (Holding Company) 구조가 필요한 경우에만 Delaware·Wyoming 설립을
          검토하는 것이 일반적입니다.
        </TipBox>
      </section>

      {/* ── 설립 절차 7단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: AMBER, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            설립 절차 7단계
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          아래 순서대로 진행하면 LLC 설립부터 운영 준비까지 빠짐없이 마칠 수
          있습니다.
        </p>

        <StepCard number="01" title="주(State) 선택">
          <p className="mb-3">
            앞서 비교한 기준을 바탕으로 설립 주를 결정합니다. 대부분의
            초보 투자자에게는 부동산이 위치한 주에 설립하는 것이 가장
            무난한 선택입니다.
          </p>
        </StepCard>

        <StepCard number="02" title="Registered Agent(등록 대리인) 지정">
          <p className="mb-3">
            모든 주는 LLC가 해당 주 내에 물리적 주소를 둔 등록 대리인을
            두도록 요구합니다. 등록 대리인은 소송 서류나 주 정부의 공식
            통지를 대신 수령하는 역할을 합니다. 한국에 거주하는 투자자는
            미국 내 주소가 없기 때문에, Northwest Registered Agent나
            LegalZoom 같은 상업용 등록 대리인 서비스를 이용하는 것이
            일반적입니다.
          </p>
        </StepCard>

        <StepCard number="03" title="Articles of Organization 제출">
          <p className="mb-3">
            LLC의 설립을 공식적으로 등록하는 서류입니다. LLC명, 사업
            목적, 등록 대리인 정보, 구성원 또는 매니저 정보 등을 기재해
            주 정부(Secretary of State)에 제출하고 설립 수수료를
            납부합니다. 이 서류가 승인되면 LLC가 법적으로 존재하게
            됩니다.
          </p>
        </StepCard>

        <StepCard number="04" title="EIN(고용주 식별번호) 신청">
          <p className="mb-3">
            EIN(Employer Identification Number)은 LLC의 세금 신고, 은행
            계좌 개설, 임대 소득 관리에 반드시 필요한 번호입니다. IRS{" "}
            <strong style={{ color: "var(--foreground)" }}>
              Form SS-4
            </strong>
            를 작성해 신청합니다.
          </p>
          <TipBox>
            외국인 투자자도{" "}
            <strong style={{ color: "var(--foreground)" }}>
              ITIN 없이 EIN을 먼저 신청할 수 있습니다.
            </strong>{" "}
            Form SS-4에서 &quot;Responsible Party&quot;의 SSN·ITIN 항목을
            비워두고 신청 사유를 명시하면, IRS 국제 신청 라인(전화) 또는
            팩스·우편으로 EIN을 발급받을 수 있습니다. 온라인 신청은 SSN이
            있어야 가능하므로, 한국에서 신청할 때는 팩스나 국제 전화 접수
            방식을 이용하게 됩니다.
          </TipBox>
        </StepCard>

        <StepCard number="05" title="Operating Agreement(운영 계약서) 작성">
          <p className="mb-3">
            LLC의 소유 구조, 구성원별 지분율, 이익 배분 방식, 의사결정
            절차, 구성원 탈퇴·추가 시 처리 방법 등을 규정하는 내부
            문서입니다. 대부분의 주는 법적으로 제출을 요구하지 않지만,
            은행 계좌 개설 시 요구되는 경우가 많고, 구성원이 여러 명일
            때 분쟁을 예방하는 데 필수적인 문서입니다. 1인 LLC라도
            작성해 두는 것이 안전합니다.
          </p>
        </StepCard>

        <StepCard number="06" title="미국 은행 계좌 개설">
          <p className="mb-3">
            LLC 명의의 임대 수입을 관리하려면 별도의 사업용 은행 계좌가
            필요합니다. 비거주 외국인은 대부분의 미국 대형 은행에서 계좌
            개설 시 본인이 직접 미국 지점을 방문해야 하는 경우가
            많습니다. 최근에는 Mercury, Relay 같은 온라인 전문 비즈니스
            은행이 원격으로 EIN, Articles of Organization만으로 계좌
            개설을 지원하기도 하지만, 정책이 수시로 바뀌므로 신청 전
            최신 요건을 반드시 확인해야 합니다.
          </p>
        </StepCard>

        <StepCard number="07" title="연간 유지 의무">
          <p className="mb-3">
            LLC는 설립으로 끝나지 않고 매년 유지 절차가 필요합니다. 대부분의
            주는{" "}
            <strong style={{ color: "var(--foreground)" }}>
              Annual Report(연례 보고서)
            </strong>{" "}
            제출과{" "}
            <strong style={{ color: "var(--foreground)" }}>
              Franchise Tax(프랜차이즈세) 또는 연간 유지 수수료
            </strong>{" "}
            납부를 요구하며, 등록 대리인 계약도 매년 갱신해야 합니다. 이
            의무를 놓치면 LLC가 자동으로 해산(Administrative Dissolution)
            처리될 수 있어, 매년 일정을 캘린더에 표시해 두는 것을
            권장합니다.
          </p>
        </StepCard>
      </section>

      {/* ── 비용 정리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: AMBER, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            비용 정리
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          설립 비용은 주별로 차이가 크고, 대행업체를 이용하면 서비스료가
          추가됩니다.
        </p>

        <div className="overflow-x-auto my-6">
          <table
            className="w-full text-sm border-collapse rounded-lg overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                {["항목", "비용(대략)", "비고"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2 text-left font-semibold"
                    style={{ border: "1px solid var(--border)", color: AMBER }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["설립 등록비 (1회)", "$50 ~ $500", "주별로 차이가 큽니다"],
                ["Registered Agent (연간)", "$100 ~ $300", "직접 상주하지 않는 한 필수"],
                ["Foreign Qualification (1회 + 연간)", "$100 ~ $400 + 연 유지비", "설립 주와 부동산 소재지가 다를 때"],
                ["Annual Report (연간)", "$0 ~ $300", "주별로 상이"],
                ["Franchise Tax / 연간 유지 수수료", "$60 ~ $800+", "예: Delaware $300, Wyoming $60~, 일부 주는 $800+"],
                ["대행업체 이용 (LegalZoom, Northwest 등)", "$0 서비스료 + 주 수수료 ~ $300+", "서류 대행, EIN 신청 지원 포함하는 경우 많음"],
              ].map((row, rIdx) => (
                <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? "transparent" : "var(--surface)" }}>
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-2"
                      style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
            대행업체를 이용하면 좋은 경우
          </p>
          <CheckList
            items={[
              "미국에 방문하지 않고 원격으로 설립 서류를 처리하고 싶은 경우",
              "Registered Agent와 서류 대행을 한 번에 해결하고 싶은 경우",
              "EIN 신청, Operating Agreement 템플릿까지 한 번에 지원받고 싶은 경우",
              "여러 주에 걸쳐 Foreign Qualification까지 함께 진행해야 하는 경우",
            ]}
          />
        </div>
      </section>

      {/* ── 외국인 투자자가 특히 주의할 점 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: AMBER, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            외국인 투자자가 특히 주의할 점
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          ITIN·EIN 구분과 신고 의무를 미리 이해해 두면 설립 이후 절차가
          훨씬 수월해집니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
            ITIN과 EIN은 다른 번호입니다
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            EIN은 LLC(법인)에 부여되는 번호이고, ITIN은 개인에게 부여되는
            세금 신고용 번호입니다. LLC 설립과 EIN 신청 자체에는 ITIN이
            필요하지 않지만, LLC의 수익이 구성원 개인에게 통과 과세되기
            때문에 결국 개인 세금 신고 시점에는 ITIN이 필요해집니다. ITIN
            발급 절차가 궁금하다면{" "}
            <Link href="/blog/itin-guide" style={{ color: AMBER, textDecoration: "underline" }}>
              ITIN 발급 방법 — 한국인이 미국 세금 번호 받는 법
            </Link>{" "}
            글을 참고하시기 바랍니다.
          </p>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
            LLC 설립이 FBAR·FATCA 신고에 미치는 영향
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            단일 구성원 LLC(Single-Member LLC)는 세법상 별도 실체로 보지
            않는 &quot;Disregarded Entity&quot;로 취급되는 경우가
            일반적이라, LLC가 보유한 해외 금융 계좌도 결국 구성원 개인의
            신고 의무로 이어질 수 있습니다. 본인이 미국 세법상 신고 의무자에
            해당하는지, LLC 구조가 신고 대상 여부에 어떤 영향을 주는지는
            상황마다 달라지므로{" "}
            <Link href="/blog/fbar-fatca-guide" style={{ color: AMBER, textDecoration: "underline" }}>
              FBAR / FATCA 완벽 가이드
            </Link>{" "}
            글에서 신고 대상 기준을 먼저 확인해 보시기 바랍니다.
          </p>
        </div>
      </section>

      {/* ── 흔한 실수 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "#dc2626", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            흔한 실수
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          LLC 설립 자체보다, 대출·소유권 이전 과정에서 놓치기 쉬운 함정들이
          더 큰 문제를 일으킵니다.
        </p>

        <WarningBox>
          <strong style={{ color: "#f87171" }}>
            모기지 대출 시 LLC 명의는 개인 명의보다 불리한 조건인 경우가
            많습니다.
          </strong>{" "}
          LLC 명의 대출은 일반 주거용(Conventional) 대출이 아니라 상업용
          또는 DSCR(Debt Service Coverage Ratio) 대출로 분류되는 경우가
          많아, 금리가 0.5~1.5%포인트 높고 요구 계약금(LTV) 비율도
          불리해질 수 있습니다. 또한 대출 기관이 구성원 개인의 보증
          (Personal Guarantee)을 요구하는 경우도 흔해, LLC로 보호받는
          책임 범위가 대출 부분에서는 사실상 제한될 수 있습니다.
        </WarningBox>

        <WarningBox>
          <strong style={{ color: "#f87171" }}>
            개인 명의로 매입 후 나중에 Quit Claim Deed로 LLC에 소유권을
            이전할 때도 주의가 필요합니다.
          </strong>{" "}
          기존 모기지에{" "}
          <strong style={{ color: "var(--foreground)" }}>
            Due-on-Sale Clause(소유권 이전 시 즉시 상환 조항)
          </strong>
          가 있다면, 소유권을 LLC로 이전하는 순간 대출 기관이 대출 전액
          즉시 상환을 요구할 권리가 생길 수 있습니다. 또한 소유주 명의가
          바뀌면 기존 주택 보험(Homeowner&apos;s Insurance)의 보장이
          자동으로 이어지지 않아 재계약이 필요할 수 있고, 타이틀 보험
          (Title Insurance) 역시 새로운 소유주 명의를 보장하지 않는
          경우가 있어 별도 확인이 필요합니다.
        </WarningBox>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ background: AMBER, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          LLC 설립은 미국 부동산 투자를 진지하게 시작하는 한국인 투자자에게
          중요한 선택지입니다. 핵심은 세금을 줄이는 도구가 아니라{" "}
          <strong style={{ color: "var(--foreground)" }}>
            개인 자산과 투자 위험을 분리하는 법적 장치
          </strong>
          라는 점을 기억하는 것입니다. 주 선택부터 등록 대리인 지정, EIN
          신청, 운영 계약서 작성, 은행 계좌 개설, 연간 유지 의무까지 단계별로
          하나씩 준비하면 크게 어렵지 않습니다. 다만 대출 조건이나 소유권
          이전처럼 세부적으로 불리해질 수 있는 지점은 사전에 반드시
          점검해야 합니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          본 내용은 일반적인 정보 제공 목적이며, 실제 설립 전에는 반드시
          현지 변호사 또는 회계사와 상담하시기 바랍니다. 궁금한 점이
          있으시면{" "}
          <Link href="/contact" style={{ color: AMBER, textDecoration: "underline" }}>
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons title={TITLE} description={DESCRIPTION} url={URL} />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: AMBER, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          LLC 설립과 세금 구조가 궁금하시다면 아래 글들도 함께 읽어보시기
          바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/us-llc-formation-guide",
              category: "세금/법률",
              title: "미국 LLC 법인 설립 기초 가이드 — 한국인 부동산 투자자가 알아야 할 모든 것",
              excerpt:
                "LLC를 만들고 투자해야 할까요, 개인 명의로 해도 될까요? LLC란 무엇인지, 왜 필요한지, 어떻게 설립하는지 기초부터 정리했습니다.",
            },
            {
              href: "/blog/personal-vs-llc-real-estate",
              category: "세금/법률",
              title: "미국 부동산, 개인 명의로 살까? LLC로 살까? — 상황별 완벽 비교",
              excerpt:
                "미국 부동산 투자 시 개인 명의와 LLC 명의 중 어떤 선택이 유리할까요? 자산 보호, 세금 혜택, 모기지 조건, 관리 복잡성까지 상황별로 비교합니다.",
            },
            {
              href: "/blog/itin-guide",
              category: "세금/법률",
              title: "ITIN 발급 방법 — 한국인이 미국 세금 번호 받는 법",
              excerpt:
                "미국 부동산이나 주식 투자를 하는 한국인이라면 ITIN이 필요합니다. ITIN이 무엇인지, SSN과 무엇이 다른지, 신청 절차까지 정리했습니다.",
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
      <section
        className="rounded-2xl p-10 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(217,119,6,0.05) 100%)",
          border: "1px solid rgba(217,119,6,0.3)",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          내 상황에 맞는 LLC 구조가 궁금하신가요?
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 480 }}>
          투자 규모, 부동산 소재지, 대출 계획에 따라 최적의 설립 구조가
          달라집니다.
          <br />
          <br />
          궁금한 점이 있으시면{" "}
          <Link href="/contact" style={{ color: AMBER }} className="underline underline-offset-2">
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: AMBER, color: "#1a1a1a" }}
          >
            문의하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${AMBER}`, color: AMBER }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>

    </div>
  );
}
