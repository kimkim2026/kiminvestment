import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: "미국 부동산 매도 가이드 — 초보 셀러를 위한 전 과정 정리 | 김통찰의 미국 부동산",
  description:
    "미국에서 집을 팔 때 거쳐야 하는 준비, 가격 책정, 리스팅, 오퍼 검토, 인스펙션, 클로징, 세금까지 전 과정을 초보 셀러 눈높이에서 8단계로 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/home-selling-guide",
  },
  openGraph: {
    title: "미국 부동산 매도 가이드 — 초보 셀러를 위한 전 과정 정리",
    description:
      "미국에서 집을 팔 때 거쳐야 하는 준비, 가격 책정, 리스팅, 오퍼 검토, 인스펙션, 클로징, 세금까지 전 과정을 초보 셀러 눈높이에서 8단계로 정리합니다.",
    images: ["https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=900&q=80"],
    type: "article",
    publishedTime: "2026-07-05",
  },
};

const GOLD = "var(--gold)";

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
            style={{ color: GOLD }}
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

export default function HomeSellingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{
          minHeight: 360,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.62)" }}
        />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(201,168,76,0.18)", color: GOLD }}
          >
            투자 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            미국 부동산 매도 가이드
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "var(--gold-light)" }}
          >
            초보 셀러를 위한 전 과정 정리
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            준비부터 가격 책정, 리스팅, 오퍼 검토, 클로징, 세금까지
            <br />
            처음 집을 파는 셀러를 위해 8단계로 쉽게 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: GOLD, color: "#0d0d0d" }}
            >
              매도 상담 신청하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${GOLD}`, color: GOLD }}
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
          style={{ background: "rgba(46,204,113,0.15)", color: "#2ecc71" }}
        >
          투자 가이드
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 7월 5일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 9분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["부동산 매도", "셀러", "리스팅", "클로징", "부동산 세금"].map((tag) => (
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
        title="미국 부동산 매도 가이드 — 초보 셀러를 위한 전 과정 정리"
        description="미국에서 집을 팔 때 거쳐야 하는 준비부터 클로징, 세금까지 전 과정을 8단계로 정리합니다."
        url="https://www.kiminvestment.com/blog/home-selling-guide"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          미국에서 집을 판다는 것은 단순히 가격을 정하고 바이어를 기다리는
          일이 아니라, 준비부터 클로징까지 여러 단계를 거치는 과정입니다.
          순서를 미리 알아두면 훨씬 수월하게 진행할 수 있습니다.
        </p>
      </section>

      {/* ── 1단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1단계 — 매도 목적 정리하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          목적이 분명해야 가격 전략과 협상 태도가 정해집니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            01
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              이사, 투자금 회수, 임대 부동산 정리 — 목적에 따라 전략이 달라집니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              이사, 투자금 회수, 임대 부동산 정리 등 매도 목적에 따라 전략이
              달라집니다. 빨리 팔아야 한다면 가격을 현실적으로 책정하고, 시간이
              충분하다면 시장 반응을 보며 천천히 진행할 수 있습니다.
            </p>
          </div>
        </div>

        <TipBox>
          매도 목적이 명확할수록 가격 전략과 협상 태도가 분명해집니다. 급매인지
          여유 있는 매도인지 먼저 정해두세요.
        </TipBox>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2단계 — 집 상태 점검 &amp; 적정 가격 정하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          숨겨진 결함을 미리 파악하고, 시장 데이터로 가격을 검증합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            02
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              지붕·냉난방·배관부터 CMA 기반 가격 책정까지
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              지붕, 냉난방, 워터히터, 전기, 배관, 창문, 지하실 누수 등을 미리
              점검합니다. 작은 문제는 미리 고치고, 큰 수리가 필요하면 직접
              고칠지 As-Is로 팔지 결정합니다. 가격은 최근 판매된 비슷한
              매물과 현재 경쟁 매물을 참고해 정하며, 에이전트는 보통
              CMA(Comparative Market Analysis, 비교 시장 분석)를 통해 적정가를
              제안합니다.
            </p>
          </div>
        </div>

        <WarningBox>
          가격이 너무 높으면 매물이 시장에 오래 남고, 너무 낮으면 손해를 볼 수
          있습니다.
        </WarningBox>
      </section>

      {/* ── 3단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3단계 — 에이전트 선택 또는 직접 판매(FSBO)
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          수수료를 아낄지, 전문가의 도움을 받을지 정해야 합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            03
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              에이전트 위임 vs FSBO(For Sale By Owner, 소유주 직접 판매)
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              많은 셀러가 부동산 에이전트를 통해 가격 책정, 사진 촬영, 리스팅,
              쇼잉, 협상, 계약 진행을 맡깁니다. FSBO는 수수료를 아낄 수
              있지만 서류·협상·법적 절차를 직접 챙겨야 해 초보자에게는 부담이
              될 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            4단계 — 판매 전 집 준비하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          첫인상이 쇼잉 횟수와 오퍼 수를 좌우합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            04
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              작은 정리가 큰 리모델링보다 효과적입니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              불필요한 물건 정리, 청소, 냄새 제거, 조명 밝게 하기, 잔디 정리
              등이 첫인상에 큰 영향을 줍니다. 큰 리모델링보다 페인트 터치업,
              손잡이 교체, 전구 교체 같은 작은 정리가 더 효과적일 때가
              많습니다.
            </p>
            <CheckList
              items={[
                "불필요한 물건 및 개인 소지품 정리",
                "전체 청소 및 냄새 제거",
                "조명 밝게 조정",
                "잔디 및 외관 정리",
                "작은 수리(페인트, 손잡이, 전구) 마무리",
              ]}
            />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200"
            alt="밝게 정리된 거실 — 홈 스테이징"
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 5단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            5단계 — 리스팅 &amp; 쇼잉 진행
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          좋은 사진과 설명이 쇼잉 횟수를 늘립니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            05
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              MLS, Zillow, Realtor.com에 매물 등록하기
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              MLS, Zillow, Realtor.com 등에 매물을 올립니다. 좋은 사진과
              설명이 쇼잉 횟수를 늘립니다. 쇼잉 기간에는 집을 항상 깨끗하고
              밝게 유지하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            6단계 — 오퍼 검토 &amp; 인스펙션 재협상
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          가장 높은 가격의 오퍼가 항상 최선은 아닙니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            06
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              가격만이 아니라 조건 전체를 함께 확인해야 합니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              오퍼는 가격만이 아니라 다운페이먼트, 융자 조건, 인스펙션·감정가
              조건, 클로징 날짜, 셀러 크레딧 요청 여부, Earnest money(계약금),
              Cash offer 여부까지 함께 확인해야 합니다. 가장 높은 가격의
              오퍼가 항상 최선은 아닙니다. 오퍼 수락 후 진행되는 홈 인스펙션
              결과에 따라 바이어가 수리나 가격 인하, 셀러 크레딧을 요청할 수
              있고, 셀러는 이를 전부, 일부만, 또는 거절로 대응할 수 있습니다.
            </p>
            <CheckList
              items={[
                "구매 가격과 다운페이먼트",
                "융자 조건 및 Cash offer 여부",
                "인스펙션·감정가 조건",
                "클로징 날짜",
                "셀러 크레딧 요청 여부",
                "Earnest money 금액",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 7단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            7단계 — 감정가, 융자 승인, 클로징 준비
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          감정가는 융자 승인의 핵심 변수입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            07
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              감정가가 낮으면 계약이 깨질 수도 있습니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              바이어가 모기지를 이용하면 은행이 감정가를 확인합니다. 감정가가
              계약 가격보다 낮으면 바이어가 차액을 현금으로 부담하거나
              셀러가 가격을 낮춰야 할 수 있고, 경우에 따라 계약이 깨질 수도
              있습니다. 모든 조건이 해결되면 클로징 단계로 넘어가며, 이때
              기존 모기지 상환, 재산세 정산, 중개 수수료, 타이틀 비용 등이
              함께 정산됩니다.
            </p>
          </div>
        </div>

        <WarningBox>
          감정가는 융자 승인의 핵심 변수입니다. 계약 전 비슷한 매물 시세를 미리
          확인해두면 감정가 리스크를 줄일 수 있습니다.
        </WarningBox>

        <div className="rounded-xl overflow-hidden mt-6" style={{ border: "1px solid var(--border)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=1200"
            alt="클로징 서류에 서명하는 모습"
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 8단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            8단계 — 세금 정리 &amp; 매도 후 처리
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          임대 부동산은 매도 전 CPA 상담을 권장합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GOLD }}
          >
            08
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              거주 주택은 면제, 임대 부동산은 더 복잡한 세금 이슈가 있습니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              본인 거주 주택은 일정 조건을 충족하면 양도차익 일부를 면제받을
              수 있지만, 임대 부동산은 감가상각(Depreciation), 양도소득세
              (Capital Gains Tax), Depreciation Recapture, 1031 Exchange 등
              더 복잡한 세금 이슈가 있어 매도 전 CPA와 상담하는 것이
              좋습니다. 클로징 후에는 유틸리티 계정 종료·이전, 주택보험 취소,
              자동이체 중단을 진행하고, 클로징 서류와 수리 영수증, 세금
              자료는 잘 보관해야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          집을 잘 파는 것은 높은 가격을 받는 것만이 아니라, 문제없이 안전하게
          클로징까지 가는 것입니다. 초보 셀러라면 부동산 에이전트, 타이틀
          회사, CPA 등 전문가의 도움을 받는 것을 권합니다. 궁금한 점이
          있으시면{" "}
          <Link href="/contact" style={{ color: GOLD, textDecoration: "underline" }}>
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="미국 부동산 매도 가이드 — 초보 셀러를 위한 전 과정 정리"
        description="미국에서 집을 팔 때 거쳐야 하는 준비부터 클로징, 세금까지 전 과정을 8단계로 정리합니다."
        url="https://www.kiminvestment.com/blog/home-selling-guide"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GOLD, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          매도를 준비하신다면 아래 글들도 함께 읽어보시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/us-real-estate-closing-date",
              category: "나의 투자 경험담",
              color: "#e74c3c",
              bg: "rgba(231,76,60,0.15)",
              title: "미국 부동산 잔금일(Closing Date) — 서류가 이렇게 많을 줄 몰랐다",
              excerpt:
                "미국에서 처음 집을 살 때 클로징 당일 책상 위에 쌓인 서류 더미를 보고 당황했습니다. 클로징 서류, 비용 항목, 타이틀 에이전시까지 직접 경험한 내용을 정리했습니다.",
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
              href: "/blog/home-inspection-checklist",
              category: "투자 가이드",
              color: "#2ecc71",
              bg: "rgba(46,204,113,0.15)",
              title: "미국 홈 인스펙션 체크리스트 10가지",
              excerpt:
                "미국 부동산 거래 전 반드시 확인해야 할 홈 인스펙션 핵심 10가지를 투자자 관점에서 정리했습니다. 지붕·HVAC·기초·배관 등 실제 비용 정보 포함.",
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
          매도 준비, 처음부터 함께 도와드립니다
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          가격 책정부터 클로징까지, 전 단계에 걸친
          <br />
          매도 상담을 무료로 받아보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: GOLD, color: "#0d0d0d" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${GOLD}`, color: GOLD }}
          >
            블로그 전체보기 →
          </Link>
        </div>
      </section>

    </div>
  );
}
