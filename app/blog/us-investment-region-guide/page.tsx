import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "미국 부동산 투자, 어느 지역이 좋을까? — 한국인을 위한 지역별 완전 가이드 | 김통찰의 미국 부동산",
  description:
    "텍사스·플로리다·미시간·조지아·캘리포니아 5개 지역을 현금흐름·인구증가·세금·관리 난이도 기준으로 비교합니다. 한국인 초보 투자자를 위한 추천 전략 포함.",
  alternates: {
    canonical:
      "https://www.kiminvestment.com/blog/us-investment-region-guide",
  },
  openGraph: {
    title:
      "미국 부동산 투자, 어느 지역이 좋을까? — 한국인을 위한 지역별 완전 가이드",
    description:
      "텍사스·플로리다·미시간·조지아·캘리포니아 5개 지역을 현금흐름·인구증가·세금·관리 난이도 기준으로 비교합니다. 한국인 초보 투자자를 위한 추천 전략 포함.",
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
    ],
    type: "article",
    publishedTime: "2026-05-20",
  },
};

const BLUE = "#2563eb";
const BLUE_LIGHT = "#60a5fa";
const AMBER = "#f59e0b";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(59,130,246,0.08)",
        border: "1px solid rgba(59,130,246,0.25)",
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
        background: "rgba(245,158,11,0.08)",
        border: "1px solid rgba(245,158,11,0.3)",
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

function AmberDots({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 mt-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div
            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
            style={{ background: AMBER }}
          />
          <span className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({
  num,
  title,
  sub,
}: {
  num: string;
  title: string;
  sub: string;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <div
          style={{ background: BLUE, width: 4 }}
          className="h-6 rounded-full flex-shrink-0"
        />
        <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
          {num} — {title}
        </h2>
      </div>
      <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
        {sub}
      </p>
    </>
  );
}

export default function UsInvestmentRegionGuidePage() {
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
          style={{ background: "rgba(37,99,235,0.04)" }}
        />
        <div
          className="relative z-10 p-8 md:p-12 w-full flex flex-col justify-end"
          style={{ minHeight: 360 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 self-start"
            style={{ background: "rgba(37,99,235,0.15)", color: BLUE_LIGHT }}
          >
            부동산 투자 기초
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            미국 부동산 투자,
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: BLUE_LIGHT }}
          >
            어느 지역이 좋을까?
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 580 }}
          >
            텍사스 · 플로리다 · 미시간 · 조지아 · 캘리포니아
            <br />
            5개 지역을 현금흐름·인구증가·세금·관리 난이도 기준으로 비교합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: BLUE, color: "#fff" }}
            >
              투자 상담 신청하기 →
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
          부동산 투자 기초
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 5월 20일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 12분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["미국 투자 지역", "텍사스", "플로리다", "미시간", "애틀란타", "캘리포니아"].map(
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

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          미국 부동산 투자를 처음 결심하셨을 때 가장 먼저 드는 생각이 아마도 "어느
          도시에 투자해야 할까?"일 것입니다. 미국은 서울 중심의 단일 시장이 아닙니다.
          주(State)마다 세금 구조가 다르고, 임대 문화가 다르며, 집값의 움직임 패턴도
          전혀 다릅니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          그래서 사실{" "}
          <strong style={{ color: "var(--foreground)" }}>
            "미국 부동산 투자"가 아니라 "어느 도시에 투자할 것인가"
          </strong>
          의 싸움이라고 봐도 과언이 아닙니다. 뉴욕은 누구나 알지만 임대 수익률은
          낮습니다. 반면 중서부나 남부의 작은 도시들은 생소하지만 생각보다 훨씬
          안정적인 현금흐름(Cash Flow)을 만들어 줍니다.{" "}
          <strong style={{ color: "var(--foreground)" }}>
            유명한 도시와 좋은 투자 도시는 다릅니다.
          </strong>
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글에서는 한국인 투자자분들이 자주 검토하는 5개 주요 지역을 현금흐름,
          인구 증가, 세금 부담, 관리 난이도 기준으로 비교하고, 초보 투자자에게 적합한
          진입 전략을 단계별로 안내해 드리겠습니다.
        </p>
      </section>

      {/* ── 히어로 아래 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80"
          alt="미국 도시 야경 — 지역별 투자 비교 가이드"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by Pedro Lastra on Unsplash
      </p>

      {/* ── 지역 선택 9가지 기준 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: BLUE, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            좋은 투자 지역을 고르는 9가지 기준
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          지역을 선택하기 전에 아래 9가지 기준을 먼저 확인하세요. 투자 목적에 따라
          우선순위가 달라집니다.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "💰",
              title: "집값 대비 렌트비",
              desc: "Cash Flow — 매달 실제로 남는 돈이 있는가",
            },
            {
              icon: "👥",
              title: "인구 증가 여부",
              desc: "임대 수요와 집값 상승의 근본 동력",
            },
            {
              icon: "🏢",
              title: "일자리 증가",
              desc: "안정적 세입자 확보의 핵심 조건",
            },
            {
              icon: "🧾",
              title: "세금 부담",
              desc: "재산세·주 소득세가 수익률에 직접 영향",
            },
            {
              icon: "📈",
              title: "집값 상승 가능성",
              desc: "장기 자산 가치 증가 여부",
            },
            {
              icon: "🔧",
              title: "관리 난이도",
              desc: "원격 관리 가능한 시장인가",
            },
            {
              icon: "✈️",
              title: "한국에서 접근성",
              desc: "직항 또는 단거리 환승 가능 여부",
            },
            {
              icon: "🌪️",
              title: "자연재해 위험",
              desc: "허리케인·토네이도·홍수 위험과 보험료",
            },
            {
              icon: "⚖️",
              title: "Landlord 친화성",
              desc: "세입자 보호법 강도 — 퇴거 절차·기간",
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
              <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 01 텍사스 ── */}
      <section className="mb-14">
        <SectionHeader
          num="01"
          title="텍사스 (Dallas / Houston)"
          sub="미국 내 인구 증가 1~2위를 다투는 성장의 중심지입니다."
        />

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: BLUE_LIGHT }}
          >
            01
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              강력한 인구 성장과 기업 유입으로 임대 수요 탄탄
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#bbb" }}>
              텍사스는 IT, 금융, 물류, 제조업 기업들이 지속적으로 이전해 오고 있습니다.
              주 소득세(State Income Tax)가 없어 세금 부담도 상대적으로 낮은 편입니다.
            </p>

            <p className="text-xs font-semibold mb-1" style={{ color: BLUE_LIGHT }}>
              장점
            </p>
            <CheckList
              items={[
                "인구 증가 속도 매우 빠름 — 전국 1~2위 수준",
                "Apple, Tesla, Oracle 등 대기업 이전 지속",
                "주 소득세(State Income Tax) 없음",
                "임대 수요 꾸준하고 강함",
                "신축 공급 활발로 다양한 매물 선택 가능",
              ]}
            />

            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              단점
            </p>
            <AmberDots
              items={[
                "최근 집값이 많이 상승해 예전만큼의 초기 수익률은 낮아짐",
                "재산세(Property Tax)가 높음 — 일반적으로 집값의 2~2.5%",
                "Houston 등 걸프 연안 지역은 허리케인 위험 존재",
                "보험료 상승 추세 — 수익률 계산 시 반드시 포함",
              ]}
            />

            <TipBox>
              <strong style={{ color: "var(--foreground)" }}>추천 투자 스타일:</strong>{" "}
              신축 단독주택, 장기 보유, 학군 중심 투자. IT·금융·물류 기업 유입이 지속되며
              성장 스토리는 여전히 유효합니다. 최근 가격 상승으로 초기 수익률은 예전보다
              줄었지만, 장기 자산 가치 상승 측면에서는 여전히 매력적인 시장입니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 02 플로리다 ── */}
      <section className="mb-14">
        <SectionHeader
          num="02"
          title="플로리다 (Orlando / Tampa)"
          sub="은퇴 인구와 관광 산업이 만드는 독특한 임대 수요가 있습니다."
        />

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: BLUE_LIGHT }}
          >
            02
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              관광·은퇴 수요 기반의 다양한 임대 전략 가능
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#bbb" }}>
              플로리다는 따뜻한 기후 덕분에 은퇴 인구 유입이 지속됩니다. Orlando는
              디즈니와 테마파크 산업을 기반으로 단기 렌트(Vacation Rental) 수요도
              상당합니다.
            </p>

            <p className="text-xs font-semibold mb-1" style={{ color: BLUE_LIGHT }}>
              장점
            </p>
            <CheckList
              items={[
                "인구 유입 지속 — 특히 북부 주에서 이주하는 인구 증가",
                "은퇴 인구 지속 증가로 안정적 장기 임대 수요",
                "관광 산업 강력 — 단기 렌트 수요 존재",
                "주 소득세 없음",
                "단기 렌트(Vacation Rental) 수요 활용 가능",
              ]}
            />

            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              단점
            </p>
            <AmberDots
              items={[
                "보험료 급등 — 허리케인 위험으로 일부 보험사 시장 철수",
                "허리케인 리스크 — 연간 시즌 대비 필수",
                "HOA(주택소유자협회) 규정 복잡한 단지 많음",
                "일부 지역 과열 — 진입 타이밍 신중히 검토 필요",
              ]}
            />

            <TipBox>
              <strong style={{ color: "var(--foreground)" }}>추천 투자 스타일:</strong>{" "}
              단독주택, Vacation Rental, 장기 렌트. Orlando는 디즈니와 관광 산업 기반으로
              임대 수요가 꾸준합니다. 단, 보험료 상승은 반드시 수익률 계산에 포함해야
              합니다. 이 부분이 한국 투자자들이 가장 많이 놓치는 포인트입니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 03 미시간 ── */}
      <section className="mb-14">
        <SectionHeader
          num="03"
          title="미시간 (Grand Rapids / Kentwood)"
          sub="초보 투자자의 첫 시장으로 가장 추천하는 지역입니다."
        />

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: BLUE_LIGHT }}
          >
            03
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              낮은 집값 + 안정적 렌트 수익 — 현금흐름 중심 투자의 정석
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#bbb" }}>
              Grand Rapids는 의료, 제조업, 물류, 교육 산업이 안정적으로 뒷받침되는
              도시입니다. 집값이 상대적으로 저렴하면서도 렌트 수요가 꾸준해
              현금흐름(Cash Flow) 중심 투자에 최적화된 지역입니다.
            </p>

            <p className="text-xs font-semibold mb-1" style={{ color: BLUE_LIGHT }}>
              장점
            </p>
            <CheckList
              items={[
                "상대적으로 저렴한 집값 — 40만 달러 이하 듀플렉스 존재",
                "높은 렌트 수익률 — 현금흐름 플러스 달성 용이",
                "의료·제조·교육 기반의 안정적 임대 수요",
                "관리 가능한 가격대로 다수 매물 포트폴리오 구성 가능",
                "시장 과열이 덜해 좋은 매물 발굴 여전히 가능",
              ]}
            />

            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              단점
            </p>
            <AmberDots
              items={[
                "폭발적인 집값 상승은 제한적 — 자산 가치 상승보다 현금흐름 중심",
                "겨울 날씨 — 유지보수 비용(파이프 동파 등) 고려 필요",
                "일부 지역의 성장 속도가 느림",
              ]}
            />

            <TipBox>
              <strong style={{ color: "var(--foreground)" }}>추천 투자 스타일:</strong>{" "}
              듀플렉스(Duplex), 장기 렌트, 현금흐름 중심. 40만 달러 이하 듀플렉스에서도
              안정적 렌트 수익을 기대할 수 있습니다. 렌탈 운영 경험을 쌓기에 최적의
              환경이며, 초보 한국인 투자자의 첫 시장으로 가장 적극 추천합니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 04 조지아 ── */}
      <section className="mb-14">
        <SectionHeader
          num="04"
          title="조지아 (Atlanta)"
          sub="물류·기업 허브로 성장 중이지만, 지역 선정이 핵심입니다."
        />

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: BLUE_LIGHT }}
          >
            04
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              세계 최대 공항 중심의 물류·기업 허브
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#bbb" }}>
              Atlanta는 Hartsfield-Jackson 국제공항을 중심으로 물류와 기업 허브로 꾸준히
              성장하고 있습니다. 집값이 텍사스나 플로리다보다 비교적 낮은 수준에서
              진입 가능하고, 임대 수요도 탄탄합니다.
            </p>

            <p className="text-xs font-semibold mb-1" style={{ color: BLUE_LIGHT }}>
              장점
            </p>
            <CheckList
              items={[
                "꾸준한 인구 증가 — 남부 최대 도시 중 하나",
                "물류·기업 허브 — Delta항공, CNN, UPS 본사 위치",
                "세계 최대 공항 기반의 경제 다변화",
                "텍사스·플로리다 대비 비교적 낮은 진입 가격",
                "학군 및 교외 지역 임대 수요 강함",
              ]}
            />

            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              단점
            </p>
            <AmberDots
              items={[
                "지역별 치안 차이가 큼 — 세부 지역 선정이 매우 중요",
                "투자 지역 선정 실패 시 공실·관리 이슈 발생 위험",
                "HOA·커뮤니티 규정 편차 큼",
              ]}
            />

            <WarningBox>
              <strong style={{ color: "#fbbf24" }}>Atlanta는 지역 선정 능력이 핵심입니다.</strong>{" "}
              좋은 지역은 안정적이지만, 잘못 들어가면 공실과 관리 이슈가 커질 수 있습니다.
              Atlanta 투자에서는 현지 에이전트 선정이 다른 도시보다 훨씬 중요합니다.
              첫 Atlanta 투자는 반드시 현지 전문가와 함께 진행하시기 바랍니다.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* ── 05 캘리포니아 ── */}
      <section className="mb-14">
        <SectionHeader
          num="05"
          title="캘리포니아 (Los Angeles / Irvine)"
          sub="자산 가치 상승 중심 — 초보 투자자에게는 부담이 큰 시장입니다."
        />

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: BLUE_LIGHT }}
          >
            05
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              장기 자산 가치 상승은 강력 — 하지만 진입 장벽이 높습니다
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#bbb" }}>
              캘리포니아는 글로벌 도시로서 장기 집값 상승력이 강합니다. 특히 한국 커뮤니티가
              잘 형성되어 있어 한국인 투자자에게 친숙한 환경이기도 합니다. 단, 높은 집값과
              낮은 렌트 수익률, 세입자 보호법이라는 3중 부담이 있습니다.
            </p>

            <p className="text-xs font-semibold mb-1" style={{ color: BLUE_LIGHT }}>
              장점
            </p>
            <CheckList
              items={[
                "장기 집값 상승력 강력 — 수십 년 데이터 검증",
                "한국 커뮤니티 풍부 — 관리·정착 지원 용이",
                "임대 수요 매우 높음 — 공실 위험 낮음",
                "글로벌 도시로서 국제 자본 유입 지속",
              ]}
            />

            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              단점
            </p>
            <AmberDots
              items={[
                "매우 높은 집값 — 단독주택 1백만 달러 이상 일반적",
                "낮은 렌트 수익률 — 현금흐름 플러스 달성 어려움",
                "주 소득세 최고 13.3% — 세금 부담 큼",
                "Tenant 보호법(세입자 보호법) 강함 — 퇴거 절차 복잡",
                "진입 장벽 높아 초보 투자자에게 위험 부담 큼",
              ]}
            />

            <TipBox>
              캘리포니아는 현금흐름 투자보다{" "}
              <strong style={{ color: "var(--foreground)" }}>
                자산 가치 상승 중심
              </strong>
              의 시장입니다. 초보 투자자보다는 다른 지역에서 투자 경험을 충분히 쌓은 후
              접근하시기를 권장합니다. 렌탈 운영 경험 없이 세입자 보호법이 강한
              캘리포니아에 첫 투자로 진입하면 예상치 못한 어려움을 만날 수 있습니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 항공뷰 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
          alt="도시 항공뷰 — 미국 투자 지역 비교"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by Kimon Maritz on Unsplash
      </p>

      {/* ── 지역별 한눈에 비교 표 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: BLUE, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            지역별 한눈에 비교
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          5개 지역을 주요 투자 기준으로 요약했습니다.
        </p>

        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1e293b" }}>
                  <th
                    className="text-left px-4 py-3 font-semibold text-white"
                    style={{ minWidth: 130 }}
                  >
                    기준
                  </th>
                  {["텍사스", "플로리다", "미시간", "조지아", "캘리포니아"].map(
                    (city) => (
                      <th
                        key={city}
                        className="text-center px-3 py-3 font-semibold text-white"
                        style={{ minWidth: 100 }}
                      >
                        {city}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "집값 수준",
                    values: ["높음", "높음", "낮음", "보통", "매우 높음"],
                    colors: ["#f59e0b", "#f59e0b", "#22c55e", "#94a3b8", "#ef4444"],
                  },
                  {
                    label: "현금흐름",
                    values: ["보통", "보통", "높음", "보통", "낮음"],
                    colors: ["#94a3b8", "#94a3b8", "#22c55e", "#94a3b8", "#ef4444"],
                  },
                  {
                    label: "집값 상승 기대",
                    values: ["높음", "높음", "보통", "높음", "매우 높음"],
                    colors: ["#22c55e", "#22c55e", "#94a3b8", "#22c55e", "#60a5fa"],
                  },
                  {
                    label: "초보자 추천도",
                    values: ["보통", "보통", "높음", "보통", "낮음"],
                    colors: ["#94a3b8", "#94a3b8", "#22c55e", "#94a3b8", "#ef4444"],
                  },
                  {
                    label: "주 소득세",
                    values: ["없음", "없음", "있음", "있음", "높음"],
                    colors: ["#22c55e", "#22c55e", "#94a3b8", "#94a3b8", "#ef4444"],
                  },
                ].map(({ label, values, colors }, rowIdx) => (
                  <tr
                    key={label}
                    style={{
                      background:
                        rowIdx % 2 === 0 ? "var(--surface)" : "var(--surface-2)",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-medium text-xs"
                      style={{ color: "#aaa" }}
                    >
                      {label}
                    </td>
                    {values.map((val, i) => (
                      <td key={i} className="px-3 py-3 text-center">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            color: colors[i],
                            background: `${colors[i]}18`,
                          }}
                        >
                          {val}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 초보 한국인 투자자 추천 전략 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: BLUE, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            초보 한국인 투자자 추천 전략
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          처음부터 모든 지역을 고민할 필요가 없습니다. 단계별로 시작하세요.
        </p>

        <div className="space-y-5">
          {[
            {
              num: "01",
              title: "1단계 — 중서부 듀플렉스로 시작",
              desc: "Grand Rapids, Kentwood 등 미시간 지역의 40만 달러 이하 듀플렉스를 첫 투자로 검토하세요. 관리 가능한 가격대에서 현금흐름을 직접 경험하고, 세입자 심사·유지보수·세금 신고 등 렌탈 운영의 전반적인 프로세스를 익힙니다.",
            },
            {
              num: "02",
              title: "2단계 — 남부 성장 지역 진입",
              desc: "첫 투자에서 렌탈 운영 경험을 쌓은 후, 텍사스·플로리다·조지아 등 성장 시장으로 넓혀 나갑니다. 집값 상승과 안정적 임대 수요를 동시에 노리는 전략입니다. 이 단계에서는 현지 에이전트 네트워크와 프로퍼티 매니지먼트 연계가 핵심입니다.",
            },
            {
              num: "03",
              title: "3단계 — 장기 자산 가치 중심",
              desc: "캘리포니아, 뉴욕 등 고가 시장은 투자 경험을 충분히 쌓은 후 접근합니다. 현금흐름보다 자산 가치 상승 중심의 포트폴리오 구성을 목표로 합니다. 세입자 보호법, 세금 구조, 관리 비용 등을 면밀히 파악한 후 진입해야 합니다.",
            },
          ].map(({ num, title, desc }) => (
            <div
              key={num}
              className="rounded-2xl p-6 flex gap-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0 w-10 text-center"
                style={{ color: BLUE_LIGHT }}
              >
                {num}
              </span>
              <div className="w-full">
                <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                  {title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: BLUE, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          최고의 도시, 최적의 타이밍, 가장 많이 오를 지역을 찾는 것보다{" "}
          <strong style={{ color: "var(--foreground)" }}>
            내가 관리 가능한 투자 경험을 쌓을 수 있는 지역에서 시작하는 것
          </strong>
          이 훨씬 더 중요합니다. 세입자 관리, 유지보수, 세금 신고, 보험 갱신, 공실
          대응, 렌탈 법률 등 부동산 임대 운영에는 생각보다 많은 요소가 얽혀 있습니다.
          처음에는 관리 가능한 규모와 안정적인 현금흐름으로 시작해 운영 경험을 쌓은 후,
          성장 지역으로 넓혀 나가는 것이 한국인 투자자에게 가장 현실적이고 검증된
          접근 방식입니다. 궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: BLUE_LIGHT, textDecoration: "underline" }}
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
            style={{ background: BLUE, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          지역 선정 후 다음 단계도 미리 준비해 두세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/brrrr-strategy",
              category: "부동산 투자 기초",
              title: "BRRRR 전략으로 미국 부동산 투자금 회수하기",
              excerpt:
                "지역 선정 후 바로 적용할 수 있는 투자 전략입니다. Buy·Rehab·Rent·Refinance·Repeat 5단계를 실제 숫자 예시와 함께 설명합니다.",
            },
            {
              href: "/blog/zillow-guide",
              category: "투자 가이드",
              title: "Zillow로 미국 첫 집 사기 — 단계별 완전 가이드",
              excerpt:
                "관심 지역 매물을 직접 검색하는 방법입니다. 계정 생성부터 Zestimate 활용, 모기지 계산기, 투어 신청까지 7단계로 정리했습니다.",
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
                style={{
                  background: "rgba(37,99,235,0.15)",
                  color: BLUE_LIGHT,
                }}
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
      <section className="rounded-2xl p-10 text-center bg-blue-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          어느 지역에 투자할지 함께 고민해 드립니다
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "rgba(255,255,255,0.8)", maxWidth: 420 }}
        >
          지역 선택부터 매물 분석, 임대 전략까지
          <br />
          한국어로 투자 상담을 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.zillow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-7 py-3 rounded-full text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: "#2563eb" }}
          >
            Zillow에서 관심 지역 매물 검색하기 →
          </a>
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-full text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff" }}
          >
            투자 상담 신청하기
          </Link>
        </div>
      </section>

    </div>
  );
}
