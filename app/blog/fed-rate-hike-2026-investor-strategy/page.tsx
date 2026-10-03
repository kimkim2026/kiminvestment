import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "연준 3년 만의 금리 인상, 미국 부동산 투자자는 지금 뭘 해야 하나 | 김통찰의 미국 부동산",
  description:
    "2026년 9월 연준이 3년 만에 기준금리를 인상하고 모기지 금리가 7%대로 올라섰습니다. 미국 부동산 8년차 투자자가 지금 점검해야 할 숫자와 대응 전략 6가지를 정리했습니다.",
  alternates: {
    canonical:
      "https://www.kiminvestment.com/blog/fed-rate-hike-2026-investor-strategy",
  },
  openGraph: {
    title: "연준 3년 만의 금리 인상, 미국 부동산 투자자는 지금 뭘 해야 하나",
    description:
      "모기지 금리 7%대 복귀. 같은 집, 같은 렌트인데 현금흐름이 플러스에서 마이너스로 바뀌었습니다.",
    url: "https://www.kiminvestment.com/blog/fed-rate-hike-2026-investor-strategy",
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1600&q=80",
    ],
    type: "article",
    publishedTime: "2026-10-03",
  },
};

const BLUE = "#2563eb";
const BLUE_LIGHT = "#60a5fa";
const TITLE = "연준 3년 만의 금리 인상, 미국 부동산 투자자는 지금 뭘 해야 하나";
const DESCRIPTION =
  "2026년 9월 연준이 3년 만에 기준금리를 인상하고 모기지 금리가 7%대로 올라섰습니다. 지금 점검해야 할 숫자와 대응 전략 6가지를 정리했습니다.";
const URL =
  "https://www.kiminvestment.com/blog/fed-rate-hike-2026-investor-strategy";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(37,99,235,0.09)",
        border: "1px solid rgba(37,99,235,0.28)",
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
            style={{ color: BLUE_LIGHT }}
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

function NumberedSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-6 mb-6"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-center gap-4 mb-3">
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{ background: BLUE, color: "#fff" }}
        >
          {index}
        </span>
        <p className="font-semibold text-base" style={{ color: "var(--foreground)" }}>
          {title}
        </p>
      </div>
      <div className="text-sm leading-relaxed space-y-3" style={{ color: "#bbb" }}>
        {children}
      </div>
    </div>
  );
}

const keyNumbers = [
  { label: "연준 기준금리", value: "3.75~4.00%", note: "9월 16일, 0.25%p 인상" },
  { label: "30년 고정 모기지", value: "7.28%", note: "Freddie Mac, 10월 1일 기준" },
  { label: "1년 전 같은 시기", value: "6.34%", note: "약 0.9%p 상승" },
  { label: "다음 FOMC", value: "10월 27~28일", note: "추가 인상 여부 주목" },
];

const paymentTable: [string, string, string][] = [
  ["6.34% (1년 전 수준)", "$1,865", "기준"],
  ["6.50%", "$1,896", "+$31"],
  ["7.00%", "$1,996", "+$131"],
  ["7.28% (현재 수준)", "$2,053", "+$188"],
  ["7.50% (추가 상승 시)", "$2,098", "+$233"],
];

export default function FedRateHikeInvestorStrategyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1600&q=80"
          alt="미국 교외 단독주택 외관"
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
            style={{ background: "rgba(37,99,235,0.22)", color: BLUE_LIGHT }}
          >
            투자 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            연준 3년 만의 금리 인상
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: BLUE_LIGHT }}
          >
            미국 부동산 투자자는 지금 뭘 해야 하나
          </p>
          <p className="text-base mb-6" style={{ color: "#ccc", maxWidth: 580 }}>
            모기지 금리가 7%대로 돌아왔습니다. 같은 집, 같은 렌트인데
            현금흐름이 플러스에서 마이너스로 바뀌는 시기입니다.
            <br />
            지금 점검해야 할 숫자와 대응 전략을 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: BLUE, color: "#fff" }}
            >
              문의하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${BLUE_LIGHT}`, color: BLUE_LIGHT }}
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
          style={{ background: "rgba(37,99,235,0.15)", color: BLUE_LIGHT }}
        >
          투자 가이드
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 10월 3일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 8분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["연준", "금리 인상", "모기지 금리", "리파이낸스", "HELOC", "투자 전략"].map(
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
          2026년 9월 16일, 미국 연방준비제도(Fed, 이하 연준)가 기준금리를
          0.25%p 인상했습니다. 2023년 7월 이후 처음 있는 인상이며, 연준 위원
          12명 전원이 찬성했습니다. 올해 내내 &ldquo;언제 금리가
          내려가느냐&rdquo;를 이야기하던 시장 분위기가 한순간에 바뀐
          것입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          사실 모기지 금리는 연준 발표를 기다리지 않았습니다. 9월 한 달
          동안에만 약 0.7%p 가까이 올랐고, Freddie Mac 기준 30년 고정 모기지
          금리는 <strong style={{ color: "var(--foreground)" }}>7.28%</strong>로
          2023년 11월 이후 최고치를 기록했습니다. 저도 미국에서 8년 동안 10채
          넘는 임대 주택을 운영하면서 금리 사이클을 여러 번 겪었지만, 이번처럼
          방향이 급하게 바뀌는 시기에는 감정보다 숫자로 대응해야 한다는 것을
          배웠습니다.
        </p>
      </section>

      {/* ── 핵심 숫자 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: BLUE, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            지금 알아야 할 핵심 숫자
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          9월 FOMC 발표와 이후 모기지 금리 흐름을 네 가지 숫자로 정리했습니다.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {keyNumbers.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="text-xs mb-2" style={{ color: "#888" }}>{item.label}</div>
              <div className="text-xl font-extrabold mb-1" style={{ color: BLUE_LIGHT }}>
                {item.value}
              </div>
              <div className="text-xs" style={{ color: "#666" }}>{item.note}</div>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
          연준이 9월에 공개한 점도표(Dot Plot, 위원들의 금리 전망을 점으로
          표시한 도표)에서도 대부분의 위원이 연말 전에 한 차례 더 인상할
          가능성을 열어 두었습니다. Zillow 역시 연말 모기지 금리 전망치를
          7.1%로 상향했습니다. 단기간에 6% 초반으로 돌아가기는 어렵다고 보고
          계획을 세우는 것이 현실적입니다.
        </p>
      </section>

      {/* ── 금리 1%p의 체감 영향 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: BLUE, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            금리 1%p가 내 지갑에 미치는 영향
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          30만 달러를 30년 고정으로 빌린다고 가정하고, 원금과 이자만 계산한
          월 납부액입니다. 재산세와 보험료는 포함하지 않았습니다.
        </p>

        <div className="overflow-x-auto my-6">
          <table
            className="w-full text-sm border-collapse rounded-lg overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                {["금리", "월 납부액", "1년 전 대비"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2 text-left font-semibold"
                    style={{ border: "1px solid var(--border)", color: BLUE_LIGHT }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paymentTable.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  style={{
                    background:
                      rIdx === 3
                        ? "rgba(37,99,235,0.12)"
                        : rIdx % 2 === 0
                        ? "transparent"
                        : "var(--surface)",
                  }}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-2"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                        fontWeight: rIdx === 3 ? 600 : 400,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "#bbb" }}>
          1년 전과 비교하면 매달 약 188달러, 1년이면 약 2,250달러를 더 내야
          합니다. 30년 동안으로 계산하면 이자만 6만 7천 달러 이상 차이가
          납니다.
        </p>

        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
            임대 투자로 보면 더 극적입니다
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
            37만 5천 달러짜리 단독주택을 20% 다운페이로 사서 월 2,600달러에
            임대하고, 재산세·보험·수리 적립금으로 월 650달러가 나간다고
            가정해 보겠습니다.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.3)" }}
            >
              <div className="text-xs mb-1" style={{ color: "#4ade80" }}>금리 6.34% (1년 전)</div>
              <div className="text-lg font-extrabold" style={{ color: "#4ade80" }}>+$85 / 월</div>
            </div>
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)" }}
            >
              <div className="text-xs mb-1" style={{ color: "#f87171" }}>금리 7.28% (현재)</div>
              <div className="text-lg font-extrabold" style={{ color: "#f87171" }}>-$103 / 월</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mt-4" style={{ color: "#bbb" }}>
            집도 렌트도 그대로인데, 금리만으로 현금흐름이 플러스에서
            마이너스로 뒤집혔습니다. 이것이 지금 시장에서 가장 먼저 확인해야
            할 현실입니다.
          </p>
        </div>
      </section>

      {/* ── 투자자가 지금 해야 할 6가지 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: BLUE, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            투자자가 지금 해야 할 6가지
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          숫자를 확인했다면, 실제로 무엇을 바꿔야 하는지 순서대로 짚어보겠습니다.
        </p>

        <NumberedSection index="01" title="매입 기준 숫자부터 다시 계산하십시오">
          <p>
            작년에 세워둔 매입 기준은 이제 맞지 않을 가능성이 높습니다.
            관심 매물이 있다면 현재 금리 7%대 기준으로 현금흐름과
            DSCR(Debt Service Coverage Ratio, 임대 순수익이 대출 상환액을
            얼마나 감당하는지 보여주는 비율)을 다시 계산해야 합니다.
          </p>
          <p>
            특히 캡레이트(Cap Rate, 대출 없이 샀을 때의 연 수익률)가 대출
            금리보다 낮다면, 대출을 쓸수록 수익률이 오히려 떨어지는
            역레버리지 상태가 됩니다. 지금은 캡레이트 5%짜리 매물에 7%
            금리 대출을 얹는 것이 불리한 구간입니다.
          </p>
          <CheckList
            items={[
              "현재 금리 기준으로 월 현금흐름이 플러스인가",
              "DSCR 1.2 이상을 확보할 수 있는가",
              "캡레이트가 대출 금리보다 높은가",
              "공실 1~2개월을 버틸 현금 여유가 있는가",
            ]}
          />
        </NumberedSection>

        <NumberedSection index="02" title="기존 저금리 대출은 절대 손대지 마십시오">
          <p>
            2020~2021년에 3%대로 고정한 대출이 있다면, 그것은 지금
            포트폴리오에서 가장 귀한 자산입니다. 현금이 필요하다고 해서
            캐시아웃 리파이낸스(Cash-out Refinance, 대출을 새로 받아 집의
            지분을 현금화하는 것)를 하면 낮은 금리를 영영 잃게 됩니다.
          </p>
          <p>
            리파이낸스 금리는 현재 신규 구매 금리보다도 높은 수준입니다.
            리파이낸스 계획이 있었다면 일단 보류하고, 금리 흐름을 지켜보는
            것이 맞습니다.
          </p>
        </NumberedSection>

        <NumberedSection index="03" title="HELOC 같은 변동금리 대출을 점검하십시오">
          <p>
            고정금리 모기지는 이번 인상의 영향을 받지 않지만, HELOC(Home
            Equity Line of Credit, 주택 지분을 담보로 한 신용한도 대출)은
            다릅니다. HELOC 금리는 대부분 프라임 레이트(Prime Rate, 은행
            기준 대출금리)에 연동되고, 프라임 레이트는 연준 기준금리를
            그대로 따라 움직입니다.
          </p>
          <p>
            리노베이션이나 다운페이 용도로 HELOC을 쓰고 있다면, 이미 이자가
            올랐을 가능성이 높습니다. 추가 인상까지 감안해 상환 순서를
            정리해 두시기 바랍니다.
          </p>
          <TipBox>
            변동금리 대출이 여러 개라면 금리가 가장 높은 것부터 먼저 갚는
            것이 기본입니다. 저는 공실이나 큰 수리가 없는 달에는 남는
            현금흐름을 HELOC 원금 상환에 먼저 넣습니다.
          </TipBox>
        </NumberedSection>

        <NumberedSection index="04" title="ARM(변동금리 모기지)은 신중하게 판단하십시오">
          <p>
            금리가 높을 때 처음 몇 년간 금리가 낮은 ARM(Adjustable-Rate
            Mortgage, 일정 기간 후 금리가 바뀌는 모기지)에 눈이 가는 것은
            자연스럽습니다. 하지만 지금은 5년 고정 후 변동하는 5/1 ARM과
            30년 고정의 금리 차이가 0.5%p 안팎에 불과합니다.
          </p>
          <p>
            작은 차이를 얻는 대신 5년 뒤 금리 위험을 떠안는 구조이므로,
            5년 안에 매도할 계획이 확실한 경우가 아니라면 고정금리가 더
            안전한 선택입니다.
          </p>
        </NumberedSection>

        <NumberedSection index="05" title="현금 여력이 있다면 협상력은 오히려 커졌습니다">
          <p>
            금리가 오르면 구매자가 줄어들고, 매물이 시장에 머무는 기간이
            길어집니다. 이미 9월 빌더 심리지수는 1년 내 최저를 기록했고,
            가격을 내리는 빌더도 늘고 있습니다.
          </p>
          <p>
            다운페이를 크게 넣을 수 있거나 현금 매입이 가능한 투자자에게는
            가격 인하, 셀러 컨세션(Seller Concession, 판매자가 클로징 비용
            일부를 대신 부담하는 것), 금리 바이다운(Rate Buydown, 판매자나
            빌더가 비용을 내서 구매자의 대출 금리를 낮춰주는 것)을 요구할
            수 있는 시기입니다.
          </p>
          <CheckList
            items={[
              "호가가 아닌 최근 실거래가 기준으로 오퍼 금액 산정",
              "클로징 비용 지원(Seller Concession) 요청",
              "신축이라면 빌더의 금리 바이다운 프로그램 확인",
              "시장에 30일 이상 머문 매물부터 우선 검토",
            ]}
          />
        </NumberedSection>

        <NumberedSection index="06" title="보유 중이라면 공실 관리가 곧 수익입니다">
          <p>
            고금리는 집을 사려던 사람들을 임대 시장에 머물게 하는 효과가
            있습니다. 다만 지역에 따라 신규 공급이 많아 렌트가 정체된 곳도
            있으므로, 무리한 렌트 인상보다 좋은 테넌트를 붙잡는 것이 더 큰
            수익이 됩니다.
          </p>
          <p>
            제 경험상 한 달 공실과 턴오버 수리 비용을 합치면, 렌트를 몇십
            달러 더 올려서 얻는 1년치 이익보다 큰 경우가 많았습니다.
            재계약 시점이 다가오는 테넌트가 있다면 적정 인상 폭을 미리
            정해 두시기 바랍니다.
          </p>
        </NumberedSection>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <WarningBox>
          이 글은 2026년 10월 초 기준 공개 자료를 바탕으로 정리한 일반
          정보이며, 개인별 투자 조언이 아닙니다. 금리는 매주 변하므로 실제
          대출 조건은 반드시 렌더나 모기지 브로커에게 직접 확인하시기
          바랍니다.
        </WarningBox>

        <div className="my-10" style={{ borderTop: "1px solid var(--border)" }} />

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          금리가 오르는 시기는 불안하지만, 돌아보면 좋은 매물을 좋은 조건에
          살 수 있었던 때도 대부분 이런 시기였습니다. 경쟁자가 줄어들고,
          판매자가 협상에 응하기 때문입니다. 중요한 것은 금리가 언제
          내려갈지 맞히는 것이 아니라, 지금 금리에서도 버틸 수 있는 숫자인지
          확인하는 것입니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          다음 FOMC 회의는 10월 27~28일입니다. 추가 인상 여부가 나오는 대로
          이 블로그에서 다시 정리해 드리겠습니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: BLUE_LIGHT, textDecoration: "underline" }}
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons title={TITLE} description={DESCRIPTION} url={URL} />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: BLUE, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          금리 변화에 대응하는 다른 전략들도 함께 확인해 보세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/interest-rate-real-estate-correlation",
              category: "융자/모기지",
              title: "금리가 오르면 미국 집값은 정말 떨어질까요",
              excerpt:
                "2026년 9월 현재 연준 금리와 모기지 금리 동향을 바탕으로, 금리 변화가 미국 부동산 투자에 실제로 어떤 영향을 주는지 한국인 투자자 관점에서 정리합니다.",
            },
            {
              href: "/blog/brrrr-strategy",
              category: "부동산 투자 기초",
              title: "BRRRR 전략으로 미국 부동산 투자금 회수하기",
              excerpt:
                "BRRRR(Buy·Rehab·Rent·Refinance·Repeat) 전략을 한국인 투자자 관점에서 쉽게 설명합니다. 실제 숫자 예시로 투자금 회수 과정을 단계별로 안내합니다.",
            },
          ].map(({ href, category, title, excerpt }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all hover:border-[var(--gold)]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full self-start"
                style={{ background: "rgba(37,99,235,0.15)", color: BLUE_LIGHT }}
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
      <section
        className="rounded-2xl p-10 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0.05) 100%)",
          border: "1px solid rgba(37,99,235,0.3)",
        }}
      >
        <h2
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "var(--foreground)" }}
        >
          지금 금리 기준으로 내 투자가 가능한지 확인해 보세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 480 }}>
          매입 기준 재계산부터 HELOC 상환 순서, ARM 전환 여부까지
          <br />
          <br />
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: BLUE_LIGHT }}
            className="underline underline-offset-2"
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: BLUE, color: "#fff" }}
          >
            문의하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${BLUE_LIGHT}`, color: BLUE_LIGHT }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>
    </div>
  );
}
