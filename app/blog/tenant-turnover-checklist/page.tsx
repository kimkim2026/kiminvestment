import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "세입자가 나간 후 새 세입자 받기 전에 반드시 해야 할 일 | 김통찰의 미국 부동산",
  description:
    "미국 임대 부동산 운영 8년 경험을 바탕으로 정리한 공실 관리 체크리스트. 사진 촬영부터 보증금 정산, 잠금장치 교체, 청소, 설비 점검, 임대 광고까지 단계별로 안내합니다.",
  alternates: {
    canonical:
      "https://www.kiminvestment.com/blog/tenant-turnover-checklist",
  },
  openGraph: {
    title: "세입자가 나간 후 새 세입자 받기 전에 반드시 해야 할 일",
    description:
      "미국 임대 부동산 운영 8년 경험을 바탕으로 정리한 공실 관리 체크리스트. 사진 촬영부터 보증금 정산, 잠금장치 교체, 청소, 설비 점검, 임대 광고까지 단계별로 안내합니다.",
    images: [
      "https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_13_59_AM_jlmvdp",
    ],
    type: "article",
    publishedTime: "2026-06-11",
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

function StepHeader({
  num,
  title,
  subtitle,
}: {
  num: string;
  title: string;
  subtitle: string;
}) {
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
        {subtitle}
      </p>
    </>
  );
}

export default function TenantTurnoverChecklistPage() {
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
        <Image
          src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_13_59_AM_jlmvdp"
          alt="세입자 퇴거 후 공실 — 현관문 상태 점검"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,23,42,0.95) 40%, rgba(15,23,42,0.5) 100%)",
          }}
        />
        <div
          className="relative z-10 p-8 md:p-12 w-full flex flex-col justify-end"
          style={{ minHeight: 360 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 self-start"
            style={{ background: "rgba(245,158,11,0.15)", color: AMBER }}
          >
            나의 투자 경험담
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            세입자가 나간 후
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-3" style={{ color: AMBER }}>
            새 세입자 받기 전에 반드시 해야 할 일
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 560 }}
          >
            8년 임대 운영 경험으로 정리한 공실 관리 9단계 체크리스트
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
          style={{ background: "rgba(245,158,11,0.15)", color: AMBER }}
        >
          나의 투자 경험담
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 6월 11일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 8분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["공실 관리", "세입자 교체", "임대 관리", "보증금 정산", "턴오버"].map(
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

      <ShareButtons
        title="세입자가 나간 후 새 세입자 받기 전에 반드시 해야 할 일"
        url="https://www.kiminvestment.com/blog/tenant-turnover-checklist"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          부동산 투자를 하다 보면 세입자가 이사 나가는 것은 자연스러운 일입니다.
          하지만 세입자가 나간 직후부터 새로운 세입자가 입주하기 전까지의 준비
          과정은 매우 중요합니다. 이 기간에 제대로 점검하고 정비해야 향후
          유지보수 비용을 줄이고 좋은 세입자를 유치할 수 있습니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          저 역시 여러 채의 임대 부동산을 운영하면서 세입자가 나간 후 반드시
          확인하는{" "}
          <strong style={{ color: "var(--foreground)" }}>
            9단계 체크리스트
          </strong>
          를 만들었습니다. 이 리스트대로만 진행해도 공실 기간을 최소화하고 다음
          세입자와의 관계를 좋은 출발점에서 시작할 수 있습니다.
        </p>
      </section>

      {/* ── 01 사진 촬영 ── */}
      <section className="mb-14">
        <StepHeader
          num="01"
          title="집 상태 사진 촬영하기"
          subtitle="퇴거 직후 기록이 없으면 보증금 분쟁에서 불리해집니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            01
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              사진·동영상으로 모든 공간 기록
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              세입자가 짐을 다 빼고 나간 직후, 집 전체를 빠짐없이 촬영합니다.
              각 방, 주방, 욕실, 창문, 바닥, 가전제품, 차고, 마당 모두 포함입니다.
              퇴거 직후 상태를 기록해 두면 보증금 정산이나 향후 분쟁 발생 시
              중요한 증거가 됩니다.
            </p>
            <CheckList
              items={[
                "각 방 — 바닥, 벽, 창문, 문, 천장 상태",
                "주방 — 조리대, 캐비닛, 가전제품 안팎",
                "욕실 — 타일, 변기, 세면대, 욕조",
                "차고 및 마당 — 펜스, 잔디, 게이트 상태",
                "타임스탬프가 기록되는 카메라 앱 사용 권장",
              ]}
            />
          </div>
        </div>

        {/* 현관문 이미지 */}
        <div
          className="relative rounded-2xl overflow-hidden mb-2"
          style={{ height: 400, border: "1px solid var(--border)" }}
        >
          <Image
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_13_59_AM_jlmvdp"
            alt="세입자 퇴거 후 현관문 상태 기록"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs mb-8 text-center" style={{ color: "#555" }}>
          퇴거 직후 현관문 상태 — 사진 기록은 분쟁 예방의 첫 번째 단계입니다
        </p>
      </section>

      {/* ── 02 보증금 정산 ── */}
      <section className="mb-14">
        <StepHeader
          num="02"
          title="보증금 정산 준비하기"
          subtitle="주(州) 법에 따라 정산 기한이 정해져 있습니다. 미리 준비하세요."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            02
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              미시간주 기준 — 퇴거 후 30일 이내 정산
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              미시간주의 경우 세입자가 퇴거한 후 일정 기간 내에 보증금 정산 내역서를
              세입자에게 제공해야 합니다. 기한을 지키지 않으면 보증금 전액을
              돌려줘야 하는 경우도 있으니 반드시 확인하세요.
            </p>
            <CheckList
              items={[
                "미납 임대료 및 연체료",
                "청소 비용 (비정상적으로 더러운 경우)",
                "파손 수리 비용 (세입자 과실)",
                "기타 임대차 계약 위반 사항",
              ]}
            />
            <WarningBox>
              <strong style={{ color: "#f87171" }}>
                Normal Wear and Tear(정상적인 마모)는 청구 불가
              </strong>
              입니다. 오래 살다 보면 생기는 페인트 바램, 카펫 자연 닳음, 작은 못
              구멍 등은 세입자에게 청구할 수 없습니다. 보증금 공제 항목으로 이를
              포함하면 법적 분쟁의 빌미가 됩니다.
            </WarningBox>
          </div>
        </div>
      </section>

      {/* ── 03 잠금장치 교체 ── */}
      <section className="mb-14">
        <StepHeader
          num="03"
          title="모든 잠금장치 교체 또는 Rekey"
          subtitle="이전 세입자가 열쇠를 복사했을 가능성을 배제할 수 없습니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            03
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              새 세입자 입주 전 반드시 완료해야 하는 작업
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              안전을 위해 세입자 교체마다 반드시 진행해야 합니다. 전체 잠금장치를
              새것으로 교체하거나, 열쇠 내부 핀만 바꾸는{" "}
              <strong style={{ color: "var(--foreground)" }}>
                Rekey(재키)
              </strong>{" "}
              작업으로도 충분합니다. Rekey는 잠금장치 교체보다 비용이 저렴합니다.
            </p>
            <CheckList
              items={[
                "현관 앞문(Front Door) 잠금장치",
                "현관 뒷문(Back Door) 잠금장치",
                "차고 문(Garage) — 코드 리셋",
                "지하실 또는 별채 출입문",
              ]}
            />
            <TipBox>
              잠금장치 교체와 재키 중 선택할 때는 기존 잠금장치의 상태를 보세요.
              잠금장치 자체가 오래되거나 헐렁하다면 이 기회에{" "}
              <strong style={{ color: "var(--foreground)" }}>
                스마트 락(Smart Lock)
              </strong>
              으로 업그레이드하는 것도 좋은 선택입니다. 코드 변경이 쉽고 입주
              후에도 편리합니다.
            </TipBox>
          </div>
        </div>

        {/* 잠금장치 이미지 */}
        <div
          className="relative rounded-2xl overflow-hidden mb-2"
          style={{ height: 400, border: "1px solid var(--border)" }}
        >
          <Image
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_34_23_AM_mxqlbl"
            alt="세입자 교체 후 잠금장치 교체 작업"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs mb-8 text-center" style={{ color: "#555" }}>
          잠금장치 교체는 새 세입자 입주 전 반드시 완료해야 하는 필수 작업입니다
        </p>
      </section>

      {/* ── 04 전문 청소 ── */}
      <section className="mb-14">
        <StepHeader
          num="04"
          title="전문 청소 진행하기"
          subtitle="깨끗한 집은 좋은 세입자를 끌어들이는 가장 쉬운 방법입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            04
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              딥 클리닝(Deep Cleaning) 체크리스트
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              일반 청소가 아닌 전문 딥 클리닝을 권장합니다. 세입자가 직접
              청소했더라도 욕실 물때, 오븐 기름때, 냉장고 내부 등은 전문 업체가
              훨씬 깔끔하게 처리합니다.
            </p>
            <CheckList
              items={[
                "욕실 — 물때, 곰팡이 제거, 코킹(Caulking) 상태 확인",
                "주방 — 오븐, 레인지 후드 기름때 제거",
                "냉장고 — 내부 전체 청소",
                "창문 안팎 청소",
                "카펫 스팀 청소 또는 교체 여부 판단",
                "벽면 스크럽 및 페인트 상태 점검",
              ]}
            />
            <TipBox>
              새 페인트가 반드시 필요한 것은 아닙니다. 하지만 다음 세 가지 중
              하나라도 해당된다면 도색을 강력히 추천합니다: ①벽 색상이 심하게
              변색된 경우, ② 담배 냄새가 남아있는 경우, ③ 벽 손상(구멍, 긁힘)이
              많은 경우. 도색 비용은 세입자 과실 부분은 보증금에서 공제 가능합니다.
            </TipBox>
          </div>
        </div>

        {/* 방 내부 이미지 */}
        <div
          className="relative rounded-2xl overflow-hidden mb-2"
          style={{ height: 400, border: "1px solid var(--border)" }}
        >
          <Image
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_17_18_AM_qnkvpy"
            alt="청소 및 정비를 마친 방 내부 상태"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs mb-8 text-center" style={{ color: "#555" }}>
          청소를 마친 방 내부 — 깨끗한 집은 좋은 세입자를 빠르게 유치합니다
        </p>
      </section>

      {/* ── 05 주요 설비 점검 ── */}
      <section className="mb-14">
        <StepHeader
          num="05"
          title="주요 설비 점검"
          subtitle="입주 후 고장이 발생하면 비용과 스트레스가 훨씬 커집니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            05
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              주요 기기 및 시스템 작동 확인
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              공실 기간에 발견하면 조용히 수리할 수 있지만, 세입자 입주 후 고장이
              나면 긴급 수리 비용과 세입자 민원을 동시에 감당해야 합니다.
              지금이 가장 좋은 점검 타이밍입니다.
            </p>
            <CheckList
              items={[
                "에어컨(HVAC) — 냉방·난방 작동 및 필터 교체",
                "온수기(Water Heater) — 온도 설정 및 누수 여부",
                "냉장고·식기세척기 — 전체 사이클 작동 확인",
                "세탁기·건조기 — 세탁 및 건조 사이클 점검",
                "차고 도어(Garage Door) — 개폐 및 안전 센서",
                "배수관(Plumbing) — 느린 배수, 누수 여부",
              ]}
            />
            <TipBox>
              간단한 예방 정비만으로도 큰 수리비를 절약할 수 있습니다. 에어컨
              필터 교체($10~20), 온수기 플러시, 배관 점검은 공실 때 직접 할 수
              있는 저비용 고효율 작업입니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 06 안전 장치 확인 ── */}
      <section className="mb-14">
        <StepHeader
          num="06"
          title="안전 장치 확인"
          subtitle="법적 의무 사항이자 세입자 안전을 위한 필수 점검입니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            06
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              안전 장치 점검 리스트
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              많은 주에서 화재 감지기와 일산화탄소 감지기는 법적으로 설치가
              의무화되어 있습니다. 작동하지 않는 상태로 세입자를 입주시키면
              법적 책임이 생길 수 있습니다.
            </p>
            <CheckList
              items={[
                "Smoke Detector(화재 감지기) — 층마다 작동 확인",
                "Carbon Monoxide Detector(일산화탄소 감지기) — 침실 인근",
                "GFCI 콘센트 — 욕실, 주방, 차고 근처",
                "계단 난간 — 흔들림 여부 확인",
                "출입문 잠금장치 — 정상 작동 확인",
              ]}
            />
            <TipBox>
              건전지 교체도 이 시점에 함께 진행하는 것을 추천합니다. 새 세입자가
              입주 후 얼마 지나지 않아 배터리 경보음이 울리면 불필요한 민원이
              생깁니다. 입주 전에 모두 새 건전지로 교체해 두면 1~2년은 신경을 쓰지
              않아도 됩니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 07 외부 상태 점검 ── */}
      <section className="mb-14">
        <StepHeader
          num="07"
          title="외부 상태 점검"
          subtitle="첫인상은 임대 문의 수에 직결됩니다. 외관도 꼼꼼히 확인하세요."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            07
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              외관(Curb Appeal) 체크리스트
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              잠재 세입자가 집을 보러 올 때 가장 먼저 보는 것은 외관입니다.
              내부가 아무리 잘 정비되어 있어도 외부가 지저분하면 첫인상이
              나빠집니다. 간단한 외부 정리만으로도 임대 속도가 빨라집니다.
            </p>
            <CheckList
              items={[
                "잔디 정리 및 잡초 제거",
                "나무 가지 정리 (집 벽면 접촉 여부 확인)",
                "우편함 상태 및 번호 표시 확인",
                "외부 조명 — 전구 교체 및 작동 확인",
                "진입로(Driveway) — 균열이나 이끼 제거",
                "쓰레기 및 남겨진 물건 처리",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 08 임대 시세 조사 ── */}
      <section className="mb-14">
        <StepHeader
          num="08"
          title="임대 시세 조사하기"
          subtitle="시장은 계속 변합니다. 이전 세입자와 같은 금액으로 올리지 마세요."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            08
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              주변 유사 매물 임대료 조사
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              많은 집주인들이 이전 세입자와 동일한 금액으로 다시 임대를 놓습니다.
              하지만 2~3년 사이에도 임대 시장은 크게 변할 수 있습니다. 세입자
              교체 시점은 임대료를 시장 가격에 맞게 재조정할 수 있는 절호의 기회입니다.
            </p>
            <CheckList
              items={[
                "Zillow — 같은 지역, 같은 방 수, 유사 면적 매물 임대료 조회",
                "Apartments.com — 아파트 및 단독 주택 시세 비교",
                "Facebook Marketplace — 현지 실거래 임대료 파악",
                "최근 3개월 내 신규 리스팅 기준으로 시세 산정",
              ]}
            />
            <TipBox>
              시세보다 너무 높게 설정하면 공실 기간이 길어집니다. 시세보다
              약간 낮게 설정하면 신청자가 몰려 좋은 세입자를 선택할 여지가
              생깁니다. 좋은 세입자 한 명이 높은 임대료보다 장기적으로 훨씬
              가치 있습니다.
            </TipBox>
          </div>
        </div>
      </section>

      {/* ── 09 임대 광고 ── */}
      <section className="mb-14">
        <StepHeader
          num="09"
          title="임대 광고 준비하기"
          subtitle="좋은 세입자는 좋은 광고에서 시작됩니다."
        />
        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            09
          </span>
          <div className="w-full">
            <p
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              효과적인 임대 광고 체크리스트
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#bbb" }}
            >
              위의 1~8단계를 모두 마쳤다면 이제 광고를 올릴 준비가 된 것입니다.
              좋은 광고는 좋은 사진과 명확한 조건에서 시작합니다.
            </p>
            <CheckList
              items={[
                "밝은 낮 시간에 정리된 집 사진 촬영 (최소 10장 이상)",
                "장점 위주의 설명 작성 — 위치, 학군, 교통, 최근 업그레이드 항목",
                "입주 가능일(Available Date) 명시",
                "반려동물 정책(Pet Policy) 명시",
                "최소 신용점수 및 소득 기준 명시",
                "Zillow, Apartments.com, Facebook Marketplace에 동시 게재",
              ]}
            />
            <WarningBox>
              임대 광고에는{" "}
              <strong style={{ color: "#f87171" }}>
                Fair Housing Law(공정 주거법)
              </strong>
              을 반드시 준수해야 합니다. 인종, 종교, 국적, 성별, 가족 구성, 장애
              여부에 따른 차별적 언어를 사용하면 법적 제재를 받을 수 있습니다.
              조건은 소득과 신용 기준 등 중립적인 항목만 명시하세요.
            </WarningBox>
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
          세입자가 나간 후 공실 기간은 비용이 발생하는 시기입니다. 하지만 이
          시기에 집 상태를 꼼꼼히 점검하고 정비하면 더 좋은 세입자를 유치하고
          향후 유지보수 비용을 줄일 수 있습니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          제 경험상 가장 중요한 것은{" "}
          <strong style={{ color: "var(--foreground)" }}>
            "다음 세입자가 입주한 첫날부터 문제 없이 생활할 수 있는 상태를
            만드는 것"
          </strong>
          입니다. 입주 초반의 좋은 경험은 세입자가 장기 거주하고 집을 아껴 쓰는
          태도로 이어집니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          위 9단계 체크리스트를 출력해서 공실이 생길 때마다 하나씩 체크해 나가
          보세요. 궁금한 점이 있으시면{" "}
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
        title="세입자가 나간 후 새 세입자 받기 전에 반드시 해야 할 일"
        url="https://www.kiminvestment.com/blog/tenant-turnover-checklist"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14 mt-14">
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
          임대 관리와 세입자 관련 실전 경험담도 참고해 보세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/eviction-update-2026",
              category: "나의 투자 경험담",
              title: "Eviction 업데이트 — 드디어 마무리됩니다 (6개월의 기록)",
              excerpt:
                "미국 세입자 강제 퇴거(Eviction) 실전 경험 최종 업데이트. 판사 서명, 황당한 반전, 자물쇠 교체까지 — 6개월간의 기록을 마무리합니다.",
            },
            {
              href: "/blog/roof-replacement-completed",
              category: "나의 투자 경험담",
              title: "지붕 교체 완료 후기 — $20,000 체크 한 장으로 끝낸 공사 전 과정",
              excerpt:
                "지붕 수리 결정 후 실제 교체 공사가 어떻게 진행됐는지 공유합니다. 철거부터 마감까지 단계별 과정, 계약서 검토, $20,000 최종 체크 결제까지 실전 경험담입니다.",
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
                style={{ background: "rgba(245,158,11,0.15)", color: AMBER }}
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
        style={{ background: "#d97706" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          임대 관리, 함께 이야기해요
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "rgba(255,255,255,0.85)", maxWidth: 420 }}
        >
          공실 관리부터 세입자 심사, Eviction까지
          <br />
          실전 경험을 바탕으로 상담해 드립니다.
        </p>
        <Link
          href="/contact"
          className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80 bg-white"
          style={{ color: "#d97706" }}
        >
          문의하기 →
        </Link>
      </section>

    </div>
  );
}
