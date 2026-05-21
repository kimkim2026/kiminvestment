import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "미국 홈 인스펙션 체크리스트 10가지 | 김통찰의 미국 부동산",
  description:
    "미국 부동산 구매 전 반드시 확인해야 할 홈 인스펙션(Home Inspection) 핵심 10가지를 투자자 관점에서 정리했습니다. 지붕·HVAC·기초·배관 등 실제 비용 정보 포함.",
  alternates: {
    canonical:
      "https://www.kiminvestment.com/blog/home-inspection-checklist",
  },
  openGraph: {
    title: "미국 홈 인스펙션 체크리스트 10가지",
    description:
      "미국 부동산 구매 전 반드시 확인해야 할 홈 인스펙션(Home Inspection) 핵심 10가지를 투자자 관점에서 정리했습니다. 지붕·HVAC·기초·배관 등 실제 비용 정보 포함.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    ],
    type: "article",
    publishedTime: "2026-05-21",
  },
};

const AMBER = "#d97706";
const AMBER_LIGHT = "#fbbf24";

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
            style={{ color: AMBER_LIGHT }}
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

function StepHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <div
          style={{ background: AMBER, width: 4 }}
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

export default function HomeInspectionChecklistPage() {
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
          style={{ background: "rgba(217,119,6,0.04)" }}
        />
        <div
          className="relative z-10 p-8 md:p-12 w-full flex flex-col justify-end"
          style={{ minHeight: 360 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 self-start"
            style={{ background: "rgba(217,119,6,0.15)", color: AMBER_LIGHT }}
          >
            구매 프로세스 A to Z
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            미국 홈 인스펙션
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: AMBER_LIGHT }}
          >
            체크리스트 10가지
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 560 }}
          >
            투자자 관점에서 꼭 확인해야 할 핵심 항목과
            <br />
            실제 수리·교체 비용 정보를 함께 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: AMBER, color: "#fff" }}
            >
              투자 상담 신청하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${AMBER_LIGHT}`, color: AMBER_LIGHT }}
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
          style={{ background: "rgba(217,119,6,0.15)", color: AMBER_LIGHT }}
        >
          구매 프로세스 A to Z
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 5월 21일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 10분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["홈 인스펙션", "체크리스트", "집 구매", "투자용 부동산", "수리 비용"].map(
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
          미국 부동산 구매에서 계약(Contract) 후 가장 중요한 단계가 바로{" "}
          <strong style={{ color: "var(--foreground)" }}>
            홈 인스펙션(Home Inspection)
          </strong>
          입니다. 겉으로는 멀쩡해 보이는 집이라도, 인스펙션 결과를 받아보면 수천에서
          수만 달러 수리가 필요한 경우가 적지 않습니다. 실제로 인스펙션 결과를 근거로
          계약 취소, 가격 협상, 셀러 수리 요청이 이루어지는 경우가 미국에서는 매우
          일반적입니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          이 글은 직접 여러 채의 투자용 부동산을 매입하면서 경험한 인스펙션 현장을
          바탕으로, 투자자 관점에서 반드시 확인해야 할 핵심 10가지를 실제 비용
          정보와 함께 정리한 것입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          실거주 목적과 달리, 투자용 부동산 인스펙션에서는{" "}
          <strong style={{ color: "var(--foreground)" }}>
            "세입자가 바로 컴플레인할 요소"
          </strong>
          를 중심으로 우선순위를 잡는 것이 중요합니다.
        </p>

        <TipBox>
          일반적인 홈 인스펙션(Home Inspection) 비용은{" "}
          <strong style={{ color: "var(--foreground)" }}>$300~$600</strong> 수준입니다.
          집 크기, 지역, 인스펙터(Inspector, 점검 전문가)에 따라 달라집니다. 전문
          인스펙터 고용은 선택이 아닌 필수입니다. 인스펙션 비용이 아까워서 생략하면,
          나중에 수만 달러 수리 비용을 고스란히 부담하게 될 수 있습니다.
        </TipBox>
      </section>

      {/* ── 히어로 아래 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
          alt="주택 점검 현장 — 홈 인스펙션 체크리스트"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by Bernard Hermant on Unsplash
      </p>

      {/* ── 01 지붕 ── */}
      <section className="mb-14">
        <StepHeader
          num="01"
          title="지붕 (Roof) — 수리 최대 비용 항목"
          sub="인스펙션에서 가장 먼저, 가장 꼼꼼히 봐야 할 항목입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            01
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "지붕 나이 — 슁글(Shingle) 설치 후 몇 년이 지났는지",
                "누수 흔적 — 다락방(Attic)이나 천장 물 얼룩 확인",
                "슁글(Shingle) 손상 여부 — 휘어짐, 깨짐, 탈락",
                "처짐 현상 — 지붕 라인이 고르지 않으면 구조 문제",
                "곰팡이 및 물 얼룩 — 장기 누수 이력 파악",
              ]}
            />
            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              비용 정보
            </p>
            <AmberDots
              items={[
                "Asphalt Shingle(아스팔트 슁글) 수명 약 20~30년",
                "교체 비용 $8,000~$20,000 이상 (집 크기·재질에 따라 상이)",
              ]}
            />
            <TipBox>
              지붕 교체 시기가 가까우면 가장 강력한 오퍼 협상 카드로 활용할 수 있습니다.{" "}
              <strong style={{ color: "var(--foreground)" }}>"Roof credit"</strong> 요청으로
              교체 비용만큼 가격 인하 협상을 시도하거나, 클로징 비용 보전을 요구할 수
              있습니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 02 HVAC ── */}
      <section className="mb-14">
        <StepHeader
          num="02"
          title="HVAC (냉난방 시스템) — 교체 비용 두 번째"
          sub="겨울과 여름, 세입자 컴플레인 1·2위를 차지하는 핵심 시스템입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            02
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "Furnace(난방로) 제조 연도 및 나이",
                "Air Conditioner(에어컨) 상태 및 냉각 성능",
                "정상 작동 여부 — 인스펙션 당일 직접 가동 테스트",
                "필터 상태 — 교체 시기 및 오염 정도",
                "이상 소음 — 가동 시 딸각거림, 삐걱거림 등",
              ]}
            />
            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              비용 정보
            </p>
            <AmberDots
              items={[
                "Furnace(난방로) 수명 약 15~20년",
                "AC(에어컨) 수명 약 10~15년",
                "Furnace + AC 동시 교체 시 $8,000~$15,000 이상",
              ]}
            />
            <WarningBox>
              오래된 HVAC는 구매 후 큰 지출로 이어질 가능성이 높습니다. 특히 겨울에 갑자기
              Furnace가 멈추면 세입자의 긴급 컴플레인으로 이어지고, 법적으로도 집주인의
              신속한 수리 의무가 있습니다. 구매 전 HVAC 나이 확인은 반드시 체크하세요.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* ── 03 Water Heater ── */}
      <section className="mb-14">
        <StepHeader
          num="03"
          title="Water Heater (온수기) — 세입자 긴급 컴플레인 1순위"
          sub="온수가 안 나오는 순간, 세입자 연락은 바로 옵니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            03
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "제조 연도 — 탱크 측면 스티커에서 확인 가능",
                "물 새는 흔적 — 탱크 하단, 연결부 확인",
                "녹 발생 여부 — 탱크 부식·변색",
                "이상 소음 — 가열 시 과도한 소음",
              ]}
            />
            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              비용 정보
            </p>
            <AmberDots
              items={[
                "Water Heater(온수기) 수명 약 8~12년",
                "설치 포함 교체 비용 약 $1,000~$2,500",
              ]}
            />
            <TipBox>
              실제 경험 — 투자 부동산 입주 후 얼마 지나지 않아 세입자로부터{" "}
              <strong style={{ color: "var(--foreground)" }}>
                "온수가 전혀 안 나온다"
              </strong>
              는 연락을 받은 적이 있습니다. 미국에서 온수기 문제는 긴급 이슈로 취급되며
              즉각적인 수리 의무가 발생합니다. 구매 시 온수기 나이가 7년 이상이라면
              협상 포인트 또는 교체 예산으로 반드시 반영하세요.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 04 Foundation ── */}
      <section className="mb-14">
        <StepHeader
          num="04"
          title="Foundation (기초 구조) — 가장 무서운 항목"
          sub="기초에 문제가 생기면 수리 비용과 난이도 모두 최상급입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            04
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "벽 크랙 — 수직·수평·사선 방향 모두 체크",
                "바닥 기울어짐 — 대리석을 굴려보는 방법으로 확인 가능",
                "문·창문이 잘 안 닫힘 — Foundation 이동의 대표적 징후",
                "물 침투 흔적 — 벽 하단 얼룩, 백화 현상(Efflorescence)",
              ]}
            />
            <WarningBox>
              <strong style={{ color: "#f87171" }}>
                Foundation(기초) 수리는 가장 비싼 수리 중 하나입니다.
              </strong>{" "}
              미시간 같은 북부 지역은 겨울 동결(Frost)·해빙·습기·배수 문제로 Foundation
              이슈가 발생하기 쉽습니다. 인스펙션에서 크랙이 발견되면 반드시 전문 구조
              엔지니어(Structural Engineer)에게 추가 감정을 의뢰하세요. 일반 인스펙터의
              판단만으로 결정을 내리지 않는 것이 안전합니다.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* ── 05 Basement ── */}
      <section className="mb-14">
        <StepHeader
          num="05"
          title="Basement (지하실) — 북부 지역 투자 시 필수"
          sub="미시간·오하이오·일리노이 등 북부 지역 투자 시 반드시 확인하세요."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            05
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "물 냄새·습한 냄새 — 진입 즉시 냄새로 상태 파악 가능",
                "곰팡이(Mold) 흔적 — 벽·기둥·바닥 전체",
                "습기 및 수분 흔적 — 벽 하단 얼룩, 바닥 물자국",
                "Sump Pump(배수 펌프) 상태 및 작동 여부",
                "배수 상태 — 바닥 드레인, 경사 방향",
              ]}
            />
            <TipBox>
              가능하면 집 주변 지면 경사(Grading)도 함께 확인하세요. 지면이 집 방향으로
              기울어져 있으면 빗물이 Foundation 쪽으로 흘러들 수 있습니다. 또한 Sump Pump에
              백업 배터리(Battery Backup)가 있는지도 확인이 필요합니다. 정전 시에도
              Sump Pump가 작동해야 Basement 침수를 막을 수 있습니다. Basement 침수
              이력이 있는 집은 보험 가입에도 영향을 줄 수 있습니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 06 Electrical ── */}
      <section className="mb-14">
        <StepHeader
          num="06"
          title="Electrical (전기) — 안전·보험 직결 항목"
          sub="보험 가입 거절로 이어질 수 있는 리스크 항목입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            06
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "오래된 전기 패널 여부 — 100A 이하 패널은 교체 권장",
                "브레이커(Circuit Breaker) 상태 — 트립 이력, 과부하 흔적",
                "불법 DIY 전기 작업 흔적 — 비전문가 수리 흔적",
                "GFCI(누전 차단기) 콘센트 설치 여부 — 욕실·주방·외부 필수",
                "콘센트·스위치 정상 작동 여부",
              ]}
            />
            <WarningBox>
              <strong style={{ color: "#f87171" }}>
                알루미늄 배선(Aluminum Wiring)이나 Knob-and-Tube 배선
              </strong>
              이 남아있는 오래된 집은 보험 가입이 거절되거나 보험료가 크게 올라갈 수
              있습니다. 불법 DIY 전기 작업 흔적은 화재 위험과 직결되는 큰 위험 신호입니다.
              반드시 전기 전문가(Licensed Electrician)의 추가 점검을 요청하세요.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* ── 07 Plumbing ── */}
      <section className="mb-14">
        <StepHeader
          num="07"
          title="Plumbing (배관) — 오래된 집일수록 위험"
          sub="배관 재질에 따라 전면 교체가 필요할 수 있습니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            07
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "수압(Water Pressure) — 샤워기·수전 등에서 직접 확인",
                "배수 속도 — 싱크대·욕조 배수 막힘 여부",
                "누수 흔적 — 싱크대 아래, 세탁실, 벽 내부",
                "오래된 Galvanized Pipe(아연 도금 파이프) 여부",
                "하수관(Sewer Line) 상태 — 필요 시 카메라 검사 요청",
              ]}
            />
            <TipBox>
              1960~70년대 이전에 지어진 집은{" "}
              <strong style={{ color: "var(--foreground)" }}>
                Galvanized Pipe(아연 도금 파이프)
              </strong>
              가 남아있을 가능성이 있습니다. 이 재질의 파이프는 내부 부식으로 수압 저하,
              녹물 발생, 누수를 일으킵니다. 전면 교체 시 수만 달러의 비용이 발생할 수
              있으므로, 구매 전 배관 재질 확인은 반드시 필요합니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 08 창문·문 ── */}
      <section className="mb-14">
        <StepHeader
          num="08"
          title="창문 (Window) &amp; 문 (Door) — 에너지 효율 직결"
          sub="세입자 광열비 불만의 주요 원인입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            08
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "단열 상태 — 단창(Single Pane) vs 복창(Double Pane) 여부",
                "유리 깨짐 또는 결로 — 복층 유리 내부 결로는 교체 필요",
                "열고 닫기 문제 — Foundation 이동이나 틀 변형",
                "틈새 바람 — 겨울 에너지 손실의 주요 원인",
              ]}
            />
            <TipBox>
              창문 교체는 생각보다 비용이 큽니다. 집 전체 창문 교체 시{" "}
              <strong style={{ color: "var(--foreground)" }}>$10,000 이상</strong>이
              소요되는 경우도 많습니다. 에너지 효율 등급이 낮은 창문은 세입자의 광열비
              불만으로 이어질 수 있습니다. 단창이 많은 집은 교체 비용을 수익률 계산에
              반영하거나 협상 카드로 활용하세요.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 09 Exterior ── */}
      <section className="mb-14">
        <StepHeader
          num="09"
          title="Exterior (외부 상태) — 첫인상이자 유지보수 시작점"
          sub="외부 상태는 임대 문의 수와 직결됩니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER_LIGHT }}
          >
            09
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              확인 항목
            </p>
            <CheckList
              items={[
                "Siding(외벽 마감재) 손상 — 깨짐, 변형, 곰팡이",
                "페인트 벗겨짐 — 방수 기능 저하 및 미관 문제",
                "데크(Deck) 상태 — 부식, 흔들림, 나사 상태",
                "진입로(Driveway) 크랙 — 겨울 동결 확대 가능성",
                "홈통(Gutter) 상태 — 막힘, 처짐, 분리",
              ]}
            />
            <p className="text-xs font-semibold mt-4 mb-1" style={{ color: AMBER }}>
              추가 주의사항
            </p>
            <AmberDots
              items={[
                "알루미늄·목재(Wood) Siding은 유지보수 빈도가 높아 장기 비용 고려 필요",
                "Gutter 막힘·분리는 빗물이 Foundation 방향으로 흘러 Basement 침수로 이어질 수 있음",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 인스펙션 리포트 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-2"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80"
          alt="인스펙션 리포트 — 세입자 관점 체크 포인트"
          className="w-full object-cover"
          style={{ maxHeight: 420 }}
        />
      </div>
      <p className="text-xs mb-14 text-center" style={{ color: "#555" }}>
        Photo by Tierra Mallorca on Unsplash
      </p>

      {/* ── 10 세입자 관점 ── */}
      <section className="mb-14">
        <StepHeader
          num="10"
          title="세입자 관점에서 생각하기 — 투자자만 아는 체크 포인트"
          sub="투자용 부동산이라면 세입자가 즉시 컴플레인할 요소를 우선으로 확인하세요."
        />
        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>
            세입자 즉시 컴플레인 6대 항목
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            {[
              {
                icon: "🚿",
                title: "온수 문제",
                desc: "온수 미공급은 즉시 긴급 수리 요청이 들어옵니다.",
              },
              {
                icon: "❄️",
                title: "에어컨 고장",
                desc: "여름 최다 컴플레인 — 법적 대응 의무 발생 가능",
              },
              {
                icon: "🔥",
                title: "난방 고장",
                desc: "겨울 최다 컴플레인 — 북부 지역은 특히 중요",
              },
              {
                icon: "💧",
                title: "누수",
                desc: "방치하면 곰팡이·구조 피해로 이어져 수리비 급증",
              },
              {
                icon: "🦠",
                title: "곰팡이",
                desc: "세입자 건강 이슈로 법적 분쟁 가능성 있음",
              },
              {
                icon: "💡",
                title: "전기 문제",
                desc: "안전 문제로 즉각 대응 의무 — 지체 시 법적 책임",
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
          <TipBox>
            위 6가지 중 하나라도 인스펙션에서 발견되면, 구매 전 반드시{" "}
            <strong style={{ color: "var(--foreground)" }}>
              수리 완료 또는 가격 협상
            </strong>
            을 진행하세요. 세입자 입주 후 발생하면 긴급 수리 비용 부담은 물론, 세입자와의
            관계 악화까지 이어질 수 있습니다.
          </TipBox>
        </div>
      </section>

      {/* ── 비용 총정리 섹션 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            수리·교체 비용 총정리
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          인스펙션 항목별 평균 비용과 협상 활용도를 한눈에 정리했습니다.
        </p>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1e293b" }}>
                  {["항목", "수명 기준", "교체 비용", "협상 활용도"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 font-semibold text-white"
                      style={{ minWidth: h === "항목" ? 140 : 120 }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["지붕 (Roof)", "20~30년", "$8,000~$20,000+", "🔴 높음"],
                  ["HVAC (냉난방)", "10~20년", "$8,000~$15,000+", "🔴 높음"],
                  ["Water Heater (온수기)", "8~12년", "$1,000~$2,500", "🟡 보통"],
                  ["Foundation (기초)", "케이스별 상이", "케이스별 상이", "🔴 높음"],
                  ["Basement 방수", "상태에 따라", "$3,000~$10,000+", "🔴 높음"],
                  ["전기 패널 (Electrical)", "30~40년", "$2,000~$5,000", "🟡 보통"],
                  ["배관 (Plumbing)", "재질에 따라", "$500~수만 달러", "🔴 높음"],
                  ["창문 (Windows)", "15~30년", "$5,000~$15,000+", "🟡 보통"],
                  ["외부 (Exterior)", "재질에 따라", "$1,000~$5,000", "🟢 낮음"],
                ].map(([item, life, cost, prio], i) => (
                  <tr
                    key={item}
                    style={{
                      background:
                        i % 2 === 0 ? "var(--surface)" : "var(--surface-2)",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-medium text-xs"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "#888" }}>
                      {life}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "#bbb" }}>
                      {cost}
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold">
                      {prio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          홈 인스펙션(Home Inspection)은 집 구매 과정에서{" "}
          <strong style={{ color: "var(--foreground)" }}>
            가장 강력한 협상 도구
          </strong>
          입니다. 인스펙션 결과를 근거로 가격을 낮추거나, 셀러에게 수리를 요청하거나,
          최악의 경우 계약을 취소할 수 있는 권리가 생깁니다. 절대 인스펙션을 생략하지
          마세요. $400~$600의 인스펙션 비용이 수만 달러의 수리비를 절감해 주는 투자
          보험이 됩니다. 특히 투자용 부동산이라면 세입자 입주 후 발생하는 긴급 수리는
          비용뿐 아니라 세입자와의 관계, 공실 위험, 임대 수익률까지 직접적으로
          영향을 줍니다. 궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: AMBER_LIGHT, textDecoration: "underline" }}
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
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          인스펙션 이후 다음 단계도 미리 준비해 두세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/us-investment-region-guide",
              category: "부동산 투자 기초",
              title: "미국 부동산 투자, 어느 지역이 좋을까?",
              excerpt:
                "지역별 집 상태와 특성을 미리 파악하세요. 텍사스·플로리다·미시간·조지아·캘리포니아 5개 지역을 기준별로 비교합니다.",
            },
            {
              href: "/blog/brrrr-strategy",
              category: "부동산 투자 기초",
              title: "BRRRR 전략으로 미국 부동산 투자금 회수하기",
              excerpt:
                "인스펙션 후 수리 비용을 투자 전략에 활용하는 법입니다. Buy·Rehab·Rent·Refinance·Repeat 5단계를 실제 숫자 예시와 함께 설명합니다.",
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
                  background: "rgba(217,119,6,0.15)",
                  color: AMBER_LIGHT,
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
      <section className="rounded-2xl p-10 text-center bg-amber-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          홈 인스펙션, 제대로 준비하세요
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "rgba(255,255,255,0.85)", maxWidth: 420 }}
        >
          공인 인스펙터 찾는 법부터 인스펙션 결과 협상까지
          <br />
          투자자 관점의 실전 가이드를 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.nachi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-7 py-3 rounded-full text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: "#d97706" }}
          >
            인스펙터 찾는 법 더 알아보기 →
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
