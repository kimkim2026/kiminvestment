import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title:
    "미국 36개 주 외국인 부동산 소유 제한법 확산 — 한국인도 해당될까? | 김통찰의 미국 부동산",
  description:
    "미국 여러 주에서 외국인의 부동산 소유를 제한하는 법이 확산되고 있습니다. 어떤 국적이 대상이며 한국인 투자자는 해당되는지 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/foreign-ownership-state-laws-2026",
  },
  openGraph: {
    title: "미국 36개 주 외국인 부동산 소유 제한법 확산 — 한국인도 해당될까?",
    description:
      "미국 여러 주에서 외국인의 부동산 소유를 제한하는 법이 확산되고 있습니다. 어떤 국적이 대상이며 한국인 투자자는 해당되는지 정리합니다.",
    images: ["https://images.unsplash.com/photo-1594581979864-36977b15d0dc?w=900&q=80"],
    type: "article",
    publishedTime: "2026-08-10",
    url: "https://kiminvestment.com/blog/foreign-ownership-state-laws-2026",
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

export default function ForeignOwnershipStateLaws2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1594581979864-36977b15d0dc?w=1600&q=80"
          alt="워싱턴 D.C. 국회의사당 — 확산되는 주별 외국인 부동산 소유 제한법"
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
            style={{ background: "rgba(217,119,6,0.18)", color: AMBER }}
          >
            세금/법률
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            36개 주로 확산된 외국인 소유 제한법
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: AMBER }}
          >
            한국인 투자자도 해당될까요
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            어떤 국적이 규제 대상인지, 한국인 투자자는 실제로
            <br />
            영향을 받는지 정리했습니다.
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
        <span className="text-xs" style={{ color: "#666" }}>2026년 8월 10일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 6분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["외국인 소유 제한", "주법", "부동산 규제", "우려국가", "한국인 투자자"].map((tag) => (
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
        title="미국 36개 주 외국인 부동산 소유 제한법 확산 — 한국인도 해당될까?"
        description="미국 여러 주에서 외국인의 부동산 소유를 제한하는 법이 확산되고 있습니다. 어떤 국적이 대상이며 한국인 투자자는 해당되는지 정리합니다."
        url="https://www.kiminvestment.com/blog/foreign-ownership-state-laws-2026"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          최근 몇 년 사이 미국 여러 주에서 외국인의 부동산 소유를
          제한하는 법이 잇따라 통과되고 있습니다. 뉴스 제목만 보면
          외국인 신분으로 미국 부동산을 매입하려는 한국인 투자자
          입장에서 불안하게 느껴질 수 있습니다. 나도 매입이 제한되는
          것은 아닌지, 이미 보유한 부동산에 영향이 있는 것은 아닌지
          걱정이 되실 수 있습니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          결론부터 말씀드리면, 지금까지 통과된 대부분의 법은 특정
          국적을 콕 집어 규제하는 방식이며, 한국은 그 대상에 포함되지
          않습니다. 이 글에서는 확산 현황, 규제 대상 국적, 한국인
          투자자에게 해당되는지 여부, 그리고 앞으로 유의해야 할 점을
          순서대로 정리해 드리겠습니다.
        </p>
      </section>

      {/* ── 1단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1. 확산 현황 — 이미 36개 주가 시행 중입니다
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          2025년 말 기준 집계이며, 2026년에도 추가 입법이 계속 논의되고 있습니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: AMBER }}
          >
            36
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              약 36개 주가 외국인 부동산 소유 제한법을 시행 중입니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              2025년 말 기준 미국의 약{" "}
              <strong style={{ color: "var(--foreground)" }}>
                36개 주
              </strong>
              가 외국인의 부동산 소유를 제한하는 법을 시행 중이며, 특히{" "}
              <strong style={{ color: "var(--foreground)" }}>
                농지와 군사시설 인근 토지
              </strong>
              에 대한 규제가 중심입니다. 2026년에도 추가로 법안을
              발의하거나 기존 법을 확대하려는 움직임이 여러 주에서
              계속되고 있어, 규제 범위는 앞으로도 계속 변화할 가능성이
              있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2. 누가 대상인가 — 연방법이 아닌 주별 &ldquo;우려 국가&rdquo; 리스트
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          모든 외국인을 일괄 규제하는 연방 차원의 법은 존재하지 않습니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-5">
            {[
              {
                title: "규제 대상은 중국, 러시아, 이란, 북한 등 우려 국가 국적자",
                desc: "대부분의 주법은 국가 안보상 우려가 있다고 지정된 특정 국가의 정부, 기업 또는 그 국적을 가진 개인을 규제 대상으로 명시하고 있습니다. 모든 외국인을 대상으로 하는 법이 아닙니다.",
              },
              {
                title: "연방 차원의 일반적인 외국인 매수 제한법은 없습니다",
                desc: "미국 전역에 적용되는 통일된 외국인 부동산 매수 금지법은 존재하지 않으며, 각 주가 개별적으로 대상 국가와 규제 범위, 대상 토지 종류를 정하는 방식으로 운영됩니다.",
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
      </section>

      {/* ── 3단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3. 한국은 해당되지 않습니다
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          가장 궁금해하실 부분을 명확히 정리해 드립니다.
        </p>

        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-3" style={{ background: "rgba(217,119,6,0.12)" }}>
            <div className="p-4 text-sm font-bold" style={{ color: AMBER }}>구분</div>
            <div className="p-4 text-sm font-bold" style={{ color: AMBER }}>규제 대상 여부</div>
            <div className="p-4 text-sm font-bold" style={{ color: AMBER }}>설명</div>
          </div>
          {[
            {
              type: "우려 국가 국적자 (중국, 러시아, 이란, 북한 등)",
              impact: "대상",
              impactColor: "#f87171",
              desc: "다수의 주에서 농지, 군사시설 인근 토지 매입을 제한하거나 신고 의무를 부과합니다.",
            },
            {
              type: "한국 국적 개인 투자자",
              impact: "대상 아님",
              impactColor: "#16a34a",
              desc: "우려 국가 리스트에 포함되지 않아 일반 주택 매수에는 해당 규제가 적용되지 않습니다.",
            },
            {
              type: "농지·군사시설 인근이 아닌 일반 주거용 부동산",
              impact: "대상 아님",
              impactColor: "#16a34a",
              desc: "대부분의 주법이 농지와 안보 민감 시설 인근 토지에 초점을 맞추고 있어 일반 렌탈 주택은 규제 범위 밖입니다.",
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
          한국은 미국의 우호국이자 동맹국으로, 지금까지 통과된 어떤
          주법의 우려 국가 리스트에도 포함되어 있지 않습니다. 일반
          주거용 렌탈 부동산을 개인 명의로 매입하는 한국인 투자자는
          이번 규제 확산과 무관하게 기존과 동일한 방식으로 투자하실 수
          있습니다.
        </TipBox>
      </section>

      {/* ── 시사점 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: AMBER, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            한국인 투자자에게 주는 시사점
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          지금은 해당되지 않더라도 주별 규정은 계속 바뀌고 있다는 점을 기억해야 합니다.
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
              매입 전 해당 주의 최신 법률을 반드시 확인해야 합니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              지금은 한국이 규제 대상이 아니더라도, 각 주 의회는 매
              회기마다 관련 법안을 새로 발의하거나 기존 법의 적용
              범위를 넓히는 방향으로 개정을 계속 논의하고 있습니다.
              특히 농지가 포함된 필지나 군사시설 인근 지역에 관심이
              있으시다면, 계약 전 해당 주의 최신 규정을 반드시 확인하는
              것이 안전합니다.
            </p>
            <CheckList
              items={[
                "매입 예정 주(State)의 외국인 부동산 소유 관련 최신 법률을 계약 전 확인합니다",
                "농지나 군사시설 인근 토지가 포함된 매물은 별도로 더 꼼꼼히 검토합니다",
                "클로징 과정에서 타이틀 컴퍼니나 부동산 변호사에게 외국인 소유 규정 해당 여부를 재확인합니다",
              ]}
            />
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
          외국인 부동산 소유 제한법이 여러 주로 확산되고 있다는 뉴스는
          걱정스럽게 들릴 수 있지만, 지금까지의 규제는 한국인 투자자와는
          직접적인 관련이 없는 특정 우려 국가를 대상으로 하고 있습니다.
          다만 법 자체가 계속 변화하는 영역인 만큼, 매입을 진행하기
          전에는 항상 해당 주의 최신 규정을 확인하는 습관을 들이시는
          것이 좋습니다. 궁금한 점이 있으시면{" "}
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
        title="미국 36개 주 외국인 부동산 소유 제한법 확산 — 한국인도 해당될까?"
        description="미국 여러 주에서 외국인의 부동산 소유를 제한하는 법이 확산되고 있습니다. 어떤 국적이 대상이며 한국인 투자자는 해당되는지 정리합니다."
        url="https://www.kiminvestment.com/blog/foreign-ownership-state-laws-2026"
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
          법률과 시장 변화를 함께 이해하는 데 도움이 되는 글들입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/road-to-housing-act-2026",
              category: "세금/법률",
              color: AMBER,
              bg: "rgba(217,119,6,0.15)",
              title: "21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것",
              excerpt:
                "2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다.",
            },
            {
              href: "/blog/foreign-buyer-decline-2026",
              category: "투자 가이드",
              color: "#2ecc71",
              bg: "rgba(46,204,113,0.15)",
              title: "2026년 외국인 미국 부동산 매수 19% 감소, 그 이유는?",
              excerpt:
                "전미부동산협회(NAR) 최신 보고서 기준 외국인의 미국 주택 매수가 1년 새 19% 감소했습니다. 그 배경과 한국인 투자자에게 주는 의미를 정리합니다.",
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
      <section className="rounded-2xl p-10 text-center bg-amber-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          법률 변화 속에서도 투자 기준은 명확하게
        </h2>
        <p className="text-sm mb-8 mx-auto text-amber-100" style={{ maxWidth: 420 }}>
          내 투자에 실제로 해당되는 규제가 있는지
          <br />
          궁금하신 점을 상담을 통해 확인해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80 bg-white"
            style={{ color: AMBER }}
          >
            투자 상담 신청하기
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
