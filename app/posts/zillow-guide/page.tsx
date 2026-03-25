import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zillow로 미국 첫 집 사기 — 단계별 완전 가이드 | 김통찰의 미국 부동산",
  description:
    "미국 최대 부동산 플랫폼 Zillow 사용법을 한국인 눈높이에서 쉽게 설명합니다. 계정 생성부터 매물 검색, Zestimate, 모기지 계산, 투어 신청까지 7단계로 정리했습니다.",
  openGraph: {
    title: "Zillow로 미국 첫 집 사기 — 단계별 완전 가이드",
    description:
      "미국 최대 부동산 플랫폼 Zillow 사용법을 한국인 눈높이에서 쉽게 설명합니다. 계정 생성부터 매물 검색, Zestimate, 모기지 계산, 투어 신청까지 7단계로 정리했습니다.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
    ],
    type: "article",
  },
};

export default function ZillowGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{
          minHeight: 360,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600')",
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
            style={{ background: "rgba(201,168,76,0.18)", color: "var(--gold)" }}
          >
            구매 프로세스 A to Z
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Zillow로 미국 첫 집 사기
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "var(--gold-light)" }}
          >
            단계별 완전 가이드
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            미국 최대 부동산 플랫폼 Zillow를 처음 쓰시는 분들을 위해
            <br />
            계정 생성부터 투어 신청까지 7단계로 쉽게 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: "var(--gold)", color: "#0d0d0d" }}
            >
              에이전트 연결하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
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
        <span className="text-xs" style={{ color: "#666" }}>2026년 3월 25일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 7분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["Zillow", "첫 집 구매", "매물 검색", "모기지", "바이어 에이전트"].map((tag) => (
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

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          미국에서 처음 집을 구매할 때 가장 먼저 열게 되는 사이트가 바로{" "}
          <span style={{ color: "var(--gold)" }} className="font-semibold">
            Zillow
          </span>
          입니다. 월 방문자 수만 1억 명이 넘는 미국 최대 부동산 플랫폼인데요, 처음
          보시면 정보가 너무 많아서 어디서부터 시작해야 할지 막막하게 느껴질 수
          있습니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글에서는 한국인 독자분들이 처음 미국 부동산을 접하는 상황을 기준으로,
          Zillow를 활용하는 방법을 <strong style={{ color: "var(--foreground)" }}>7단계</strong>로
          쉽게 설명해 드리겠습니다.
        </p>
      </section>

      {/* ── 1단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1단계 — 계정 만들기와 앱 설치
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          시작은 언제나 가입부터입니다. 무료로 5분 안에 완료됩니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            01
          </span>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              zillow.com 또는 앱스토어에서 시작하기
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              zillow.com에 접속하거나 앱스토어(iOS · Android)에서 Zillow 앱을
              무료로 설치합니다. 이메일 또는 구글 계정으로 가입하면 관심 매물 저장,
              가격 변동 알림, 맞춤 추천 기능을 모두 사용할 수 있습니다.
            </p>
          </div>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#bbb",
          }}
        >
          💡 계정 없이도 매물 검색은 가능하지만,{" "}
          <span style={{ color: "var(--gold)" }} className="font-semibold">
            Saved Homes(관심 매물 저장)
          </span>{" "}
          기능은 계정이 있어야 사용할 수 있습니다. 가입해 두시면 나중에 훨씬
          편리합니다.
        </div>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2단계 — 원하는 지역과 조건으로 매물 검색
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          지도를 보면서 동네를 탐색하는 재미가 있습니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            02
          </span>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              검색창에 도시명, ZIP Code, 학군 이름으로 탐색
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              검색창에 도시명, 우편번호(ZIP Code), 학군 이름, 주소를 직접 입력할
              수 있습니다. 지도 보기(Map View)를 활용하면 원하는 동네를 시각적으로
              탐색할 수 있어 미국 지리가 낯선 분들께 특히 유용합니다.
            </p>
            <div className="space-y-2">
              {[
                "가격 범위 — For Sale / For Rent 선택 후 Min·Max 입력",
                "방 수(Beds) · 욕실 수(Baths) 필터로 조건 좁히기",
                "주택 유형 — House / Townhouse / Condo 구분",
                "학군 등급(GreatSchools) — 자녀 교육 고려 시 필수",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="text-sm font-bold mt-0.5 flex-shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: "#bbb" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <Image
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200"
            alt="노트북으로 미국 부동산 매물을 검색하는 모습"
            width={1200}
            height={675}
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 3단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3단계 — Zestimate로 가격이 적정한지 파악하기
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          Zillow의 대표 기능, AI 가격 추정입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            03
          </span>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Zestimate(AI 가격 추정) 확인하기
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              Zillow의 대표 기능인 Zestimate(AI 가격 추정)는 AI 알고리즘이 주변
              실거래 데이터, 세금 기록, 주택 특성 등을 종합 분석해 산출한 예상
              시장 가치입니다. 판매 호가와 나란히 표시되므로 가격이 적정한지
              가늠하는 데 좋은 출발점이 됩니다.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{
            background: "rgba(220,38,38,0.07)",
            border: "1px solid rgba(220,38,38,0.3)",
          }}
        >
          <p className="font-bold text-sm mb-3" style={{ color: "#f87171" }}>
            ⚠ Zestimate 사용 시 꼭 알아두세요
          </p>
          <div className="space-y-2">
            {[
              "Zestimate는 참고용 수치이며, 공식 감정(Appraisal) 결과가 아닙니다.",
              "실제 거래 가격과 10~15% 이상 차이가 나는 경우도 흔합니다.",
              "최종 가격 판단은 반드시 공인 에이전트(Licensed Agent)와 함께 하시길 권장합니다.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="text-sm font-bold mt-0.5 flex-shrink-0"
                  style={{ color: "#f87171" }}
                >
                  !
                </span>
                <span className="text-sm" style={{ color: "#bbb" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#bbb",
          }}
        >
          💡 Zestimate 외에 매물 상세 페이지에는{" "}
          <span style={{ color: "var(--gold)" }} className="font-semibold">
            Price History(과거 거래 이력)
          </span>
          와{" "}
          <span style={{ color: "var(--gold)" }} className="font-semibold">
            Tax History(세금 이력)
          </span>
          도 함께 제공됩니다. 두 가지를 함께 보면 해당 매물의 이력을 더 입체적으로
          파악할 수 있습니다.
        </div>
      </section>

      {/* ── 4단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            4단계 — 모기지 계산기로 월 납부액 미리 확인
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          실제로 매달 얼마를 내야 하는지 미리 파악하는 것이 중요합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            04
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Mortgage Calculator(모기지 계산기) 활용하기
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#bbb" }}>
              매물 상세 페이지에 내장된 모기지 계산기에 계약금(Down Payment),
              이자율, 대출 기간을 입력하면 예상 월 납부액을 즉시 확인할 수
              있습니다. 재산세(Property Tax)와 주택보험(Insurance)까지 포함한
              총비용도 함께 계산됩니다.
            </p>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--surface-2)" }}>
                    <th
                      className="text-left px-4 py-3 font-semibold"
                      style={{ color: "var(--gold)", width: "40%" }}
                    >
                      항목
                    </th>
                    <th
                      className="text-left px-4 py-3 font-semibold"
                      style={{ color: "#ccc" }}
                    >
                      일반 기준
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: "#bbb" }}>
                  {[
                    ["계약금(Down Payment)", "집값의 3.5 ~ 20%"],
                    ["대출 기간(Loan Term)", "15년 또는 30년 선택"],
                    ["이자율(Interest Rate)", "시장 금리에 따라 변동"],
                    ["재산세(Property Tax)", "주 · 카운티마다 상이"],
                    ["주택보험(Homeowners Insurance)", "연간 $800 ~ $2,000+"],
                  ].map(([label, value], i) => (
                    <tr
                      key={i}
                      style={{
                        borderTop: "1px solid var(--border)",
                        background:
                          i % 2 === 0 ? "var(--surface)" : "transparent",
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: "#aaa" }}>
                        {label}
                      </td>
                      <td className="px-4 py-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <Image
            src="https://images.unsplash.com/photo-1554920951-462522873ead?w=1200"
            alt="모기지 계약서에 서명하는 모습"
            width={1200}
            height={675}
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 5단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            5단계 — 투어 예약과 에이전트 연결
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          마음에 드는 집을 찾으셨다면 이제 직접 눈으로 확인할 차례입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            05
          </span>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Request a Tour 버튼으로 방문 일정 잡기
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              매물 상세 페이지의 Request a Tour 버튼을 누르면 방문 투어를 신청할
              수 있습니다. 대면(In-Person) 또는 영상 투어(Video Tour) 중 원하는
              방식을 선택하시면 됩니다.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              처음 집을 구매하신다면 Buyer&apos;s Agent(바이어 에이전트)를
              연결하시는 것을 강력히 권장합니다.{" "}
              <span style={{ color: "var(--foreground)" }} className="font-semibold">
                바이어 에이전트 수수료는 대부분 셀러가 부담
              </span>
              하므로, 바이어 입장에서는 사실상 무료로 전문가의 도움을 받을 수
              있습니다.
            </p>
          </div>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm mb-6"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#bbb",
          }}
        >
          💡 Zillow의{" "}
          <span style={{ color: "var(--gold)" }} className="font-semibold">
            Find an Agent
          </span>{" "}
          기능에서 &ldquo;Korean-speaking agent&rdquo;로 검색하면 한국어로
          소통 가능한 에이전트를 찾을 수 있습니다. 처음 미국 부동산 거래를
          하시는 분들께는 한국어 에이전트와 함께하시는 것을 권장합니다.
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200"
            alt="에이전트와 함께 미국 주택을 둘러보는 모습"
            width={1200}
            height={675}
            className="w-full"
            style={{ objectFit: "cover", maxHeight: 400 }}
          />
        </div>
      </section>

      {/* ── 6단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            6단계 — 관심 매물 저장과 알림 설정
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          경쟁이 치열한 미국 부동산 시장에서는 속도가 중요합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            06
          </span>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              하트 버튼으로 저장하고, 알림으로 빠르게 대응하기
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              관심 매물은 하트 버튼으로 저장(Saved Homes)하고, 조건에 맞는
              신규 매물이나 가격 변동 시 즉시 알림을 받을 수 있습니다. 미국은
              좋은 매물이 나오면 며칠 안에 오퍼가 몰리는 경우가 많아, 알림
              설정을 해두는 것이 큰 도움이 됩니다.
            </p>
            <div className="space-y-2">
              {[
                "Price Drop Alerts(가격 인하 알림) — 관심 매물 가격이 낮아지면 즉시 통보",
                "New Listing Alerts(신규 매물 알림) — 저장한 검색 조건에 맞는 새 매물 등록 시 알림",
                "Saved Searches(검색 조건 저장) — 여러 지역, 여러 조건을 동시에 모니터링 가능",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="text-sm font-bold mt-0.5 flex-shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: "#bbb" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            7단계 — 동네 정보로 생활 편의성 파악
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          집 자체만큼 중요한 것이 주변 환경입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: "var(--gold)" }}
          >
            07
          </span>
          <div>
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              What&apos;s Nearby 섹션에서 생활 인프라 한눈에 확인
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              매물 상세 페이지 하단의 What&apos;s Nearby 섹션에서 인근
              마트, 식당, 병원, 학교, 대중교통을 한눈에 확인할 수 있습니다.
              처음 미국 생활을 시작하시는 분들이 생활 편의성을 파악하는 데
              매우 유용한 기능입니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: "🏫", label: "학교 · 학군" },
                { icon: "🏥", label: "병원 · 약국" },
                { icon: "🛒", label: "마트 · 쇼핑" },
                { icon: "🚌", label: "대중교통" },
                { icon: "🍽️", label: "식당 · 카페" },
                { icon: "🌳", label: "공원 · 레크리에이션" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl px-4 py-3 text-sm flex items-center gap-2"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                >
                  <span>{icon}</span>
                  <span style={{ color: "#bbb" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#bbb",
          }}
        >
          💡 Walk Score, Transit Score, Bike Score도 함께 표시됩니다. 점수가
          높을수록 차 없이도 생활하기 편한 동네를 의미합니다. 특히 처음
          미국에 오셔서 차량이 없는 기간이 있다면 이 점수를 꼭 확인해 보세요.
        </div>
      </section>

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          Zillow로 매물을 찾으셨다면, 다음 단계도 미리 준비해 두세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/buying-process-a-to-z",
              category: "투자 가이드",
              title: "미국 부동산 구매 프로세스 A to Z",
              excerpt:
                "오퍼 제출부터 클로징까지, 미국 부동산 구매의 전 과정을 단계별로 정리했습니다.",
            },
            {
              href: "/blog/mortgage-guide-for-koreans",
              category: "투자 가이드",
              title: "한국인을 위한 미국 모기지 완전 정복",
              excerpt:
                "고정금리 vs 변동금리, DTI 계산법, 외국인 모기지 조건까지 실제 대출 경험으로 정리했습니다.",
            },
            {
              href: "/blog/building-us-credit-score",
              category: "투자 가이드",
              title: "미국 신용점수, 아무것도 없는 상태에서 어떻게 만들까?",
              excerpt:
                "ITIN 발급부터 시큐어드 카드, 1년 안에 700점 달성하는 방법까지 정리했습니다.",
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
                style={{ background: "rgba(46,204,113,0.15)", color: "#2ecc71" }}
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
        <h2
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "var(--foreground)" }}
        >
          한국어로 미국 집 구매를 도와드립니다
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "#888", maxWidth: 420 }}
        >
          Zillow로 매물을 찾으셨나요? 다음 단계가 막막하다면
          <br />
          지금 바로 무료 상담으로 시작해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--gold)", color: "#0d0d0d" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/blog/buying-process-a-to-z"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            구매 프로세스 전체 보기 →
          </Link>
        </div>
      </section>

    </div>
  );
}
