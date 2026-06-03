import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "지붕 교체 완료 후기 — $20,000 체크 한 장으로 끝낸 공사 전 과정 | 김통찰의 미국 부동산",
  description:
    "지붕 수리 결정 후 실제 교체 공사가 어떻게 진행됐는지 공유합니다. 철거부터 마감까지 단계별 과정, 계약서 검토, $20,000 최종 체크 결제까지 실전 경험담입니다.",
  alternates: {
    canonical:
      "https://www.kiminvestment.com/blog/roof-replacement-completed",
  },
  openGraph: {
    title: "지붕 교체 완료 후기 — $20,000 체크 한 장으로 끝낸 공사 전 과정",
    description:
      "지붕 수리 결정 후 실제 교체 공사가 어떻게 진행됐는지 공유합니다. 철거부터 마감까지 단계별 과정, 계약서 검토, $20,000 최종 체크 결제까지 실전 경험담입니다.",
    images: [
      "https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Dec_19_2025_8_18_27_PM_1_xfamu4",
    ],
    type: "article",
    publishedTime: "2026-06-03",
  },
};

const GREEN = "#16a34a";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        style={{ background: GREEN, width: 4 }}
        className="h-6 rounded-full flex-shrink-0"
      />
      <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
        {children}
      </h2>
    </div>
  );
}

export default function RoofReplacementCompletedPage() {
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Dec_19_2025_8_18_27_PM_1_xfamu4"
          alt="지붕 교체 완료 후기 — 공사 전 지붕 상태"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
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
            style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
          >
            나의 투자 경험담
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            지붕 교체 완료 후기
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: GREEN }}
          >
            $20,000 체크 한 장으로 끝낸 공사 전 과정
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 560 }}
          >
            철거부터 마감까지 — 미국 임대주택 지붕 교체 실전 경험담입니다.
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
          나의 투자 경험담
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 6월 3일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 6분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["지붕 교체", "루핑 공사", "미국 집 수리", "임대 관리", "유지보수 비용"].map((tag) => (
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

      <ShareButtons
        title="지붕 교체 완료 후기 — $20,000 체크 한 장으로 끝낸 공사 전 과정"
        url="https://www.kiminvestment.com/blog/roof-replacement-completed"
      />

      {/* ── 도입부 & 이전 글 안내 박스 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-6" style={{ color: "#bbb" }}>
          이전 글에서 세입자 연락으로 시작된 지붕 누수 문제, 보험 처리 시도 실패,
          그리고 결국 $20,000 전액 자비로 공사를 진행하기로 결정한 과정을 공유했습니다.
          이번 글은 그 후속편으로, 실제 공사가 어떻게 진행됐는지 단계별로 담았습니다.
        </p>

        {/* 이전 글 안내 박스 */}
        <div
          className="rounded-2xl p-5 mb-2"
          style={{
            background: "rgba(59,130,246,0.07)",
            border: "1px solid rgba(59,130,246,0.3)",
          }}
        >
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "#60a5fa" }}
          >
            이전 글 — 지붕 교체 결정 과정
          </p>
          <Link
            href="/blog/roof-repair-experience"
            className="inline-block text-sm font-semibold underline mb-4 transition-opacity hover:opacity-70"
            style={{ color: "#93c5fd" }}
          >
            미국 집 지붕 수리 — 세입자 연락부터 2만 달러 공사까지 →
          </Link>
          <div className="space-y-2">
            {[
              "세입자 연락 — 지하실·현관 누수 발생",
              "지붕 전체 교체 필요 판정",
              "예상 비용 $20,000",
              "보험 처리 시도 → 실패 (노후화는 보험 대상 아님)",
              "전액 자비 부담 결정",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span
                  className="text-xs mt-0.5 flex-shrink-0"
                  style={{ color: "#60a5fa" }}
                >
                  ›
                </span>
                <span className="text-sm" style={{ color: "#94a3b8" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 섹션 1: 시공업체 선정 ── */}
      <section className="mb-14">
        <SectionTitle>시공업체 선정</SectionTitle>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          공사를 결정한 후 가장 먼저 한 일은 여러 업체에서 견적을 받는 것이었습니다.
          최소 3곳 이상의 업체에 연락해 현장 방문 견적을 요청했고, 가격뿐만 아니라
          사용하는 자재, 공사 방식, 보증 조건 등을 꼼꼼히 비교했습니다.
        </p>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#bbb" }}>
          최종적으로 한 업체를 선정했습니다. 가격이 가장 저렴하지는 않았지만,
          소통이 명확하고 계약서 내용이 가장 상세했습니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            계약서 확인 시 특히 주의한 항목
          </p>
          <div className="space-y-4">
            {[
              {
                title: "보증(Warranty) 조건",
                desc: "자재 보증과 시공 보증을 구분해서 확인했습니다. 자재는 제조사 보증이 적용되고, 시공 하자에 대해서는 업체 자체 보증 기간과 범위를 명확히 확인했습니다.",
              },
              {
                title: "공사 범위(Scope of Work)",
                desc: "어떤 자재를 사용하는지, 철거 후 루프 덱 상태에 따라 추가 비용이 발생하는 경우 어떻게 처리하는지 미리 협의했습니다. 추가 비용 발생 조건을 계약서에 명시해 달라고 요청했습니다.",
              },
              {
                title: "결제 조건",
                desc: "착공 전 선금, 공사 완료 후 잔금 구조로 합의했습니다. 전액 선불 요구는 피하는 것이 좋습니다.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: GREEN }}
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

      {/* ── 섹션 2: 공사 당일 ── */}
      <section className="mb-14">
        <SectionTitle>공사 당일</SectionTitle>

        <p className="text-base leading-relaxed mb-6" style={{ color: "#bbb" }}>
          공사는 이른 아침 7시부터 시작됐습니다. 인부들이 자재와 장비를 가지고
          현장에 도착했고, 생각보다 훨씬 체계적으로 진행됐습니다. 당일 완료를 목표로
          했고, 실제로 하루 만에 모든 공정이 마무리됐습니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            공사 진행 순서
          </p>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "기존 슁글(Shingle) 철거",
                desc: "기존 슁글을 모두 벗겨냅니다. 이 과정에서 발생하는 폐자재는 업체가 직접 수거·처리합니다.",
              },
              {
                step: "2",
                title: "루프 덱(Roof Deck) 상태 확인",
                desc: "슁글을 걷어낸 후 아래 합판 상태를 점검합니다. 수분으로 손상된 부분이 있으면 해당 부분을 교체합니다.",
              },
              {
                step: "3",
                title: "방수층(Underlayment) 시공",
                desc: "루프 덱 위에 방수 시트를 깔아 빗물 침투를 차단합니다. 새 슁글 시공 전 핵심 단계입니다.",
              },
              {
                step: "4",
                title: "새 슁글(Shingle) 시공",
                desc: "아스팔트 슁글을 처마(Eave)부터 시작해 위쪽 방향으로 순서대로 시공합니다.",
              },
              {
                step: "5",
                title: "플래싱(Flashing) 마감",
                desc: "지붕 경계, 굴뚝 주변, 환풍구 주변 등 물이 모이기 쉬운 부위에 금속 플래싱을 설치해 마무리합니다.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span
                  className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
                >
                  {step}
                </span>
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

      {/* ── 섹션 3: 실제 공사 사진 ── */}
      <section className="mb-14">
        <SectionTitle>실제 공사 사진</SectionTitle>

        <p className="text-base leading-relaxed mb-8" style={{ color: "#bbb" }}>
          아래는 공사 진행 순서에 맞게 정리한 실제 현장 사진입니다.
        </p>

        <div className="space-y-8">
          {/* 사진 1 */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Dec_19_2025_8_18_27_PM_1_xfamu4"
              alt="공사 전 지붕 상태"
              className="w-full rounded-xl my-4 object-cover"
            />
            <p
              className="text-sm text-center mt-2"
              style={{ color: "#888" }}
            >
              점검 당시 사진 — 누수가 발생하여 물이 지붕에서 떨어짐
            </p>
          </div>

          {/* 사진 2 */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Dec_19_2025_8_18_27_PM_4_lqf2jx"
              alt="지붕 점검 — 누수 부위 확인"
              className="w-full rounded-xl my-4 object-cover"
            />
            <p
              className="text-sm text-center mt-2"
              style={{ color: "#888" }}
            >
              점검 당시 사진 — 누수가 발생한 부위를 확인 중
            </p>
          </div>

          {/* 사진 3 */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Dec_19_2025_8_18_27_PM_5_vfm42x"
              alt="기존 슁글 상태 — 전체 교체 필요"
              className="w-full rounded-xl my-4 object-cover"
            />
            <p
              className="text-sm text-center mt-2"
              style={{ color: "#888" }}
            >
              점검 당시 사진 — 누수가 발생한 부위를 확인 중
            </p>
          </div>

          {/* 사진 4 */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/diglpn5kv/image/upload/IMG_20260507_232931_5.heic_yp5qog"
              alt="기존 슁글 철거 진행 중"
              className="w-full rounded-xl my-4 object-cover"
            />
            <p
              className="text-sm text-center mt-2"
              style={{ color: "#888" }}
            >
              공사 당일 — 기존 슁글 철거 작업이 진행되고 있습니다
            </p>
          </div>

          {/* 사진 5 */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/diglpn5kv/image/upload/IMG_20260507_232934_3.heic_kgc9dq"
              alt="방수층 시공 및 새 슁글 설치 중"
              className="w-full rounded-xl my-4 object-cover"
            />
            <p
              className="text-sm text-center mt-2"
              style={{ color: "#888" }}
            >
              방수층(Underlayment) 위로 새 슁글 시공이 시작됐습니다
            </p>
          </div>

          {/* 사진 6 */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/diglpn5kv/image/upload/IMG_20260507_232935_4.heic_o5rj2p"
              alt="공사 마감 — 플래싱 작업 완료"
              className="w-full rounded-xl my-4 object-cover"
            />
            <p
              className="text-sm text-center mt-2"
              style={{ color: "#888" }}
            >
              공사 마무리 단계 — 플래싱(Flashing) 작업까지 완료된 모습
            </p>
          </div>
        </div>
      </section>

      {/* ── 섹션 4: 최종 결제 ── */}
      <section className="mb-14">
        <SectionTitle>최종 결제 — $20,000 체크</SectionTitle>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          공사가 완료된 것을 직접 확인한 후 최종 결제를 진행했습니다.
          금액은 계약 당시 합의한 그대로 $20,000였고, 미국에서 일반적으로 큰 금액
          공사비를 지불할 때 사용하는 방식인{" "}
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            개인 수표(Personal Check)
          </span>
          로 결제했습니다.
        </p>

        <div
          className="rounded-2xl p-5 mb-6"
          style={{
            background: "rgba(22,163,74,0.07)",
            border: "1px solid rgba(22,163,74,0.25)",
          }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: GREEN }}>
            미국에서 체크(Check)로 공사비를 지불하는 이유
          </p>
          <div className="space-y-2">
            {[
              "거래 기록이 명확하게 남아 회계 처리와 세금 신고에 유리합니다.",
              "현금과 달리 은행 기록을 통해 지불 사실을 증명할 수 있습니다.",
              "신용카드 수수료를 피할 수 있고, 업체도 체크 결제를 선호합니다.",
              "공사 하자 발생 시 체크 번호를 근거로 분쟁 처리가 가능합니다.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span
                  className="text-xs mt-0.5 flex-shrink-0"
                  style={{ color: GREEN }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: "#94a3b8" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          $20,000짜리 체크를 건네는 순간은 솔직히 마음이 무거웠습니다. 하지만
          제때 고치지 않았다면 누수 → 구조재 손상 → 곰팡이로 이어져 훨씬 더 큰
          비용이 들었을 것입니다. 필요한 지출이었다고 스스로를 다독였습니다.
        </p>
      </section>

      {/* ── 섹션 5: 공사 후 느낀 점 & 교훈 ── */}
      <section className="mb-14">
        <SectionTitle>공사 후 느낀 점 & 교훈</SectionTitle>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="space-y-5">
            {[
              {
                title: "지붕은 눈에 안 띄어도 방치하면 안 됩니다",
                desc: "지붕은 외부에서 잘 보이지 않아 관리가 소홀해지기 쉽습니다. 하지만 방치하면 누수 → 구조재 손상 → 곰팡이 발생으로 이어져, 복구 비용이 처음 수리비의 수배로 불어날 수 있습니다.",
              },
              {
                title: "미국 집 구입 시 지붕 나이를 반드시 확인하세요",
                desc: "아스팔트 슁글의 평균 수명은 20~25년입니다. 매물 검토 단계에서 지붕 나이를 확인하고, 교체 시기가 임박했다면 협상 카드로 활용하거나 구입 후 예비비로 반드시 반영해야 합니다.",
              },
              {
                title: "예비비는 선택이 아닌 필수입니다",
                desc: "이번처럼 예상치 못한 $20,000 지출이 갑자기 발생할 수 있습니다. 부동산 투자에서 예비비(Reserve Fund)를 따로 마련해 두지 않으면 큰 수리 한 번에 현금흐름 전체가 흔들릴 수 있습니다.",
              },
              {
                title: "세입자에게 미리 안내하는 것이 중요합니다",
                desc: "공사 일정이 확정되자마자 세입자에게 미리 안내했습니다. 소음과 불편함에 대해 충분히 이해를 구했고, 공사 기간 동안 협조해 주신 것에 감사 표시도 했습니다. 좋은 관계를 유지하는 것이 장기 임대 운영의 핵심입니다.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: GREEN }}
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

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          궁금한 점이 있으시면{" "}
          <a href="/contact" style={{ color: GREEN, textDecoration: "underline" }}>
            문의하기
          </a>
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="지붕 교체 완료 후기 — $20,000 체크 한 장으로 끝낸 공사 전 과정"
        url="https://www.kiminvestment.com/blog/roof-replacement-completed"
      />

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
          이 글과 함께 읽으시면 더 도움이 됩니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/roof-repair-experience",
              category: "나의 투자 경험담",
              title: "미국 집 지붕 수리 — 세입자 연락부터 2만 달러 공사까지",
              excerpt:
                "세입자 연락으로 시작된 지붕 누수 문제. 견적 $20,000, 보험 처리 실패, 전액 자비 부담까지 — 미국 집주인이라면 꼭 알아야 할 지붕 수리 실전 경험을 공유합니다.",
            },
            {
              href: "/blog/duplex-east-coast-purchase-review",
              category: "나의 투자 경험담",
              title: "미국 동부 Duplex 구매 후기 — 실수, 비용, 그리고 배운 것들",
              excerpt:
                "처음 미국 Duplex를 구매하면서 겪은 과정과 실수들을 솔직하게 공유합니다. 에이전트 선택, 인스펙션, 클로징까지 실제 경험담입니다.",
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
          미국 부동산 투자, 함께 준비해 보세요
        </h2>
        <p
          className="text-sm mb-8 mx-auto text-green-100"
          style={{ maxWidth: 420 }}
        >
          지붕 교체부터 세입자 관리, 현금흐름 분석까지
          <br />
          실전 경험을 바탕으로 투자 상담을 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: "#16a34a" }}
          >
            투자 상담 신청하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff" }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>
    </div>
  );
}
