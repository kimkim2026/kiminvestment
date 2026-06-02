import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "Eviction 업데이트 — 드디어 마무리됩니다 (6개월의 기록) | 김통찰의 미국 부동산",
  description:
    "미국 세입자 강제 퇴거(Eviction) 실전 경험 최종 업데이트. 판사 서명, 황당한 반전, 자물쇠 교체까지 — 6개월간의 기록을 마무리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/eviction-update-2026",
  },
  openGraph: {
    title: "Eviction 업데이트 — 드디어 마무리됩니다 (6개월의 기록)",
    description:
      "미국 세입자 강제 퇴거(Eviction) 실전 경험 최종 업데이트. 판사 서명, 황당한 반전, 자물쇠 교체까지 — 6개월간의 기록을 마무리합니다.",
    images: [
      "https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Jun_02_2026_12_03_11_PM_hx8gff.jpg",
    ],
    type: "article",
    publishedTime: "2026-06-02",
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

export default function EvictionUpdatePage() {
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
          src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Jun_02_2026_12_03_11_PM_hx8gff.jpg"
          alt="Eviction 최종 업데이트 — 자물쇠 교체 후 현관"
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
            Eviction 업데이트
          </h1>
          <p
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: GREEN }}
          >
            드디어 마무리됩니다 (6개월의 기록)
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#94a3b8", maxWidth: 560 }}
          >
            판사 서명, 황당한 반전, 자물쇠 교체까지 — 6개월간의 기록을 마무리합니다.
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
          2026년 6월 2일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 6분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["Eviction", "세입자관리", "실수교훈", "임대관리"].map((tag) => (
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
        title="Eviction 업데이트 — 드디어 마무리됩니다 (6개월의 기록)"
        url="https://www.kiminvestment.com/blog/eviction-update-2026"
      />

      {/* ── 서두 & 이전 글 안내 박스 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-6" style={{ color: "#bbb" }}>
          이 글은 이전 글 &ldquo;미국 세입자 강제 퇴거(Eviction) — 직접 겪고 있는 실전
          이야기&rdquo;의 최종 업데이트입니다. 12월부터 시작된 6개월간의 과정이 드디어
          마무리됩니다.
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
            📄 이전 글 — 이야기의 시작
          </p>
          <Link
            href="/blog/eviction-real-experience"
            className="inline-block text-sm font-semibold underline mb-4 transition-opacity hover:opacity-70"
            style={{ color: "#93c5fd" }}
          >
            미국 세입자 강제 퇴거(Eviction) — 직접 겪고 있는 실전 이야기 →
          </Link>
          <div className="space-y-2">
            {[
              "2025년 12월 — 새 세입자 A씨 입주",
              "2026년 1월 — 월세 미납 시작",
              "Cash for Keys 제안 → A씨 무시",
              "7-Day Notice 발송 → 법원 소송 제기",
              "3월 법정 — A씨가 Eviction 유예(Stay) 신청",
              "이후 계속 기다리는 상황…",
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

      {/* ── 섹션 1: 5월 20일 — 판사 서명 완료 ── */}
      <section className="mb-14">
        <SectionTitle>5월 20일 — 판사 서명 완료</SectionTitle>

        {/* 섹션 이미지 3 */}
        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_18_18_AM_1_uob2or.jpg"
            alt="Eviction Order 판사 서명 완료 관련 서류"
            className="w-full object-cover"
            style={{ maxHeight: 440 }}
          />
        </div>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          드디어 판사가{" "}
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            Eviction Order(강제 퇴거 명령)
          </span>
          에 서명을 완료했습니다. 3월 법정에서 A씨가 Stay(유예)를 신청한 이후,
          약 두 달을 기다린 끝에 나온 결과입니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          판사 서명이 완료되면 다음 단계로{" "}
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            Court Officer(법원 집행관)
          </span>
          에게 사건이 배정됩니다. 집행관이 실제로 현장에 나와 세입자에게
          퇴거를 통보하고, 퇴거를 거부할 경우 강제 집행이 이루어지는
          절차입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          서명 통보를 받은 날, 솔직히 안도보다는 긴장이 먼저 왔습니다. 실제
          집행은 또 별개의 이야기이기 때문입니다.
        </p>
      </section>

      {/* ── 섹션 2: 5월 28일 — 황당한 반전 ── */}
      <section className="mb-14">
        <SectionTitle>5월 28일 — 황당한 반전</SectionTitle>

        <p className="text-base leading-relaxed mb-6" style={{ color: "#bbb" }}>
          집행 절차를 기다리던 중, 옆집 이웃에게서 예상치 못한 메시지가
          왔습니다.
        </p>

        {/* 섹션 이미지 1 */}
        <div
          className="rounded-2xl overflow-hidden mb-3"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_20_58_AM_1_mpwmpq.jpg"
            alt="5월 28일 현장 — 세입자 무단 전대 상황"
            className="w-full object-cover"
            style={{ maxHeight: 440 }}
          />
        </div>

        {/* 섹션 이미지 2 */}
        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_May_28_2026_10_20_28_AM_1_elndnx.jpg"
            alt="5월 28일 현장 — 내부 상황"
            className="w-full object-cover"
            style={{ maxHeight: 440 }}
          />
        </div>

        <div
          className="rounded-2xl p-5 mb-6"
          style={{
            background: "rgba(239,68,68,0.07)",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: "#f87171" }}>
            ⚠ 이웃의 연락 내용
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            A씨는 이미 한 달 전에 이사를 나갔고, 그녀의{" "}
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>
              남동생이 여자친구와 함께 무단으로 들어와 살고 있다
            </span>
            는 것이었습니다.
          </p>
        </div>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          집주인에게 아무 연락도, 허락도 없이 제3자가 거주하고 있던
          상황이었습니다. 임대 계약서에는 A씨 외 거주자를 추가할 경우 반드시
          집주인 동의를 받도록 명시되어 있었습니다. 명백한 계약 위반이었고,
          Eviction 절차가 진행 중인 상황에서 또 다른 무단 점유가 발생한
          것이었습니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          처음에는 황당했습니다. 퇴거 명령이 났는데도 다른 사람이 들어와
          살고 있다니. 하지만 이런 상황이 미국 임대 시장에서는 드물지 않다는
          것을 이번에 다시 실감했습니다.
        </p>
      </section>

      {/* ── 섹션 3: 5월 28일 — 자물쇠 교체 & 청소 시작 ── */}
      <section className="mb-14">
        <SectionTitle>5월 28일 — 자물쇠 교체 & 청소 시작</SectionTitle>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          이웃의 연락을 받은 당일, 즉시 업체를 불러{" "}
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            현관문 자물쇠를 교체
          </span>
          했습니다. 더 이상 무단 점유자가 출입할 수 없도록 조치를 취한
          것입니다.
        </p>
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          같은 날 청소 업체와도 계약했습니다. 6개월 가까이 관리되지 않은
          내부 상태를 정리하고, 새로운 세입자를 맞이할 준비를 시작하는
          단계입니다.
        </p>

        <div
          className="rounded-2xl p-5"
          style={{
            background: "rgba(22,163,74,0.07)",
            border: "1px solid rgba(22,163,74,0.25)",
          }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: GREEN }}>
            앞으로의 계획
          </p>
          <div className="space-y-2">
            {[
              "자물쇠 교체 완료 (5월 28일)",
              "청소 업체 계약 완료 — 2주 내 청소 완료 예정",
              "청소 완료 후 새 세입자 모집 시작",
              "목표: 7월 초 새 세입자 입주",
            ].map((item, i) => (
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
        </div>
      </section>

      {/* ── 대표 이미지 ── */}
      <div
        className="rounded-2xl overflow-hidden mb-14"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/diglpn5kv/image/upload/Photo_Jun_02_2026_12_03_11_PM_hx8gff.jpg"
          alt="Eviction 최종 업데이트 — 자물쇠 교체 후 현관"
          className="w-full object-cover"
          style={{ maxHeight: 480 }}
        />
      </div>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <SectionTitle>이번 경험에서 새롭게 느낀 것</SectionTitle>

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
                title: "6개월이 걸렸습니다",
                desc: "12월부터 계산하면 꼬박 6개월입니다. 생각보다 훨씬 오래 걸렸지만, 미국 부동산 투자자라면 반드시 겪어봐야 할 경험이라고 생각합니다. 돈으로 살 수 없는 공부였습니다.",
              },
              {
                title: "좋은 세입자를 고르는 것이 투자 수익률보다 더 중요할 수 있습니다",
                desc: "아무리 좋은 지역, 좋은 가격에 매물을 샀더라도 세입자를 잘못 선택하면 수익이 모두 날아갑니다. 이 한 가지 교훈이 6개월 내내 머릿속에 맴돌았습니다.",
              },
              {
                title: "스크리닝은 아무리 철저해도 지나치지 않습니다",
                desc: "신용점수, 소득 증빙, 전 집주인 레퍼런스, 퇴거 이력 — 모든 항목을 빠짐없이 확인해야 합니다. 한 가지라도 넘어가는 순간 리스크가 시작됩니다.",
              },
              {
                title: "미국 법적 절차는 세입자 보호가 강합니다",
                desc: "집주인 입장에서 Eviction 절차는 시간과 비용이 많이 듭니다. 법적으로 옳더라도 실제 집행까지는 수개월이 걸립니다. 이 현실을 미리 알고 투자하는 것이 중요합니다.",
              },
              {
                title: "현금 예비비는 필수입니다",
                desc: "월세 수입이 끊긴 6개월 동안 모기지, 보험, 세금, 자물쇠 교체, 청소 비용까지 모두 현금으로 충당해야 했습니다. 예비비 없이는 버틸 수 없는 구조입니다.",
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
          긴 시간 함께 읽어주셔서 감사합니다. 궁금한 점이 있으시면{" "}
          <a href="/contact" style={{ color: GREEN, textDecoration: "underline" }}>
            문의하기
          </a>
          를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="Eviction 업데이트 — 드디어 마무리됩니다 (6개월의 기록)"
        url="https://www.kiminvestment.com/blog/eviction-update-2026"
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
              href: "/blog/eviction-real-experience",
              category: "나의 투자 경험담",
              title: "미국 세입자 강제 퇴거(Eviction) — 직접 겪고 있는 실전 이야기",
              excerpt:
                "월세를 4개월째 내지 않는 세입자, 법원 심리까지 넘어간 Eviction 절차를 현재 진행 중입니다. 7-Day Notice부터 법원 Filing, Stay 신청까지 있는 그대로 공유합니다.",
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
          세입자 관리부터 법적 절차, 현금흐름 분석까지
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
