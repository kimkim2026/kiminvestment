import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title:
    "2026년 외국인 미국 부동산 매수 19% 감소, 그 이유는? | 김통찰의 미국 부동산",
  description:
    "전미부동산협회(NAR) 최신 보고서 기준 외국인의 미국 주택 매수가 1년 새 19% 감소했습니다. 그 배경과 한국인 투자자에게 주는 의미를 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/foreign-buyer-decline-2026",
  },
  openGraph: {
    title: "2026년 외국인 미국 부동산 매수 19% 감소, 그 이유는?",
    description:
      "전미부동산협회(NAR) 최신 보고서 기준 외국인의 미국 주택 매수가 1년 새 19% 감소했습니다. 그 배경과 한국인 투자자에게 주는 의미를 정리합니다.",
    images: ["https://images.unsplash.com/photo-1575923640658-37d9c2ad9f92?w=900&q=80"],
    type: "article",
    publishedTime: "2026-08-10",
    url: "https://kiminvestment.com/blog/foreign-buyer-decline-2026",
  },
};

const GREEN = "#16a34a";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(22,163,74,0.08)",
        border: "1px solid rgba(22,163,74,0.25)",
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
  );
}

export default function ForeignBuyerDecline2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1575923640658-37d9c2ad9f92?w=1600&q=80"
          alt="항공에서 내려다본 미국 교외 주택가 — 외국인 매수 감소를 겪고 있는 시장"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.62)" }}
        />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(22,163,74,0.18)", color: GREEN }}
          >
            투자 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            외국인 미국 부동산 매수, 1년 새 19% 감소
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "#4ade80" }}
          >
            그 이유는 무엇일까요
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            전미부동산협회(NAR) 최신 보고서로 확인한 외국인 매수
            <br />
            감소 배경과 한국인 투자자가 주목해야 할 변화입니다.
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
      <div className="flex flex-wrap items-center gap-4 mb-14 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(22,163,74,0.15)", color: GREEN }}
        >
          투자 가이드
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 8월 10일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 5분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["외국인 매수자", "NAR 보고서", "미국 부동산 시장", "2026 부동산 뉴스", "해외 투자자"].map((tag) => (
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
        title="2026년 외국인 미국 부동산 매수 19% 감소, 그 이유는?"
        description="전미부동산협회(NAR) 최신 보고서 기준 외국인의 미국 주택 매수가 1년 새 19% 감소했습니다. 그 배경과 한국인 투자자에게 주는 의미를 정리합니다."
        url="https://www.kiminvestment.com/blog/foreign-buyer-decline-2026"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          매년 여름 전미부동산협회(NAR)가 발표하는 외국인 매수 동향
          보고서는 미국 부동산 시장에서 해외 자금이 어떻게 움직이고
          있는지를 보여주는 대표적인 지표입니다. 올해 발표된 수치는 그
          어느 해보다 뚜렷한 하락세를 보였습니다. 외국인 매수 건수와
          금액이 모두 큰 폭으로 줄어든 것입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          한국인 투자자 입장에서는 단순히 시장이 위축됐다는 소식으로만
          받아들이기보다, 왜 줄었는지와 그 안에서 어떤 기회가 생기고
          있는지를 함께 살펴볼 필요가 있습니다. 이 글에서는 감소폭의
          구체적인 수치, 감소 배경, 매수국 순위 변화, 그리고 한국인
          투자자에게 주는 시사점을 순서대로 정리해 드리겠습니다.
        </p>
      </section>

      {/* ── 1단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            1. 얼마나 줄었나 — 숫자로 보는 감소폭
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          NAR이 집계한 2025년 4월부터 2026년 3월까지의 1년간 데이터입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            01
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              매수 건수 14% 감소, 매수 금액 19% 감소, 총액 453억 달러
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              NAR 보고서에 따르면 해당 기간 외국인의 미국 주택 매수
              건수는 전년 대비{" "}
              <strong style={{ color: "var(--foreground)" }}>
                14% 감소
              </strong>
              했고, 매수 금액 기준으로는{" "}
              <strong style={{ color: "var(--foreground)" }}>
                19% 감소
              </strong>
              한{" "}
              <strong style={{ color: "var(--foreground)" }}>
                453억 달러
              </strong>
              에 그쳤습니다. 건수보다 금액이 더 큰 폭으로 줄었다는 것은
              고가 매물을 매입하던 외국인 자금이 특히 더 크게 위축됐다는
              의미로 해석할 수 있습니다.
            </p>
          </div>
        </div>

        <TipBox>
          매수 금액 감소폭이 매수 건수 감소폭보다 큰 흐름은, 그동안 미국
          부동산 시장에서 소극적이지 않았던 고액 자산가들의 매수 심리가
          더 크게 얼어붙었다는 신호로 볼 수 있습니다.
        </TipBox>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2. 왜 줄었나 — 방문객 감소와 비자, 심리 위축
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          단일 원인이 아니라 여러 요인이 겹치며 만들어진 하락세입니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-5">
            {[
              {
                title: "미국 방문객 자체가 줄었습니다",
                desc: "부동산은 대부분 직접 눈으로 보고 결정하는 자산입니다. 관광과 출장을 포함한 미국 방문객 수가 줄면, 자연스럽게 현지를 둘러보고 매수를 결정하는 외국인 수요도 함께 줄어듭니다.",
              },
              {
                title: "H-1B 비자 관련 근로자 유입이 둔화됐습니다",
                desc: "취업 비자로 미국에 정착하는 해외 인력의 유입 속도가 느려지면, 정착을 위한 실거주 목적의 주택 매수 수요도 함께 줄어드는 구조입니다.",
              },
              {
                title: "달러 약세에도 매수 심리는 오히려 위축됐습니다",
                desc: "환율만 놓고 보면 달러 약세는 외국인에게 유리한 조건이지만, 정책 불확실성과 경기 우려가 겹치면서 유리한 환율 조건조차 매수 결정으로 이어지지 못했습니다.",
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: GREEN }}
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

        <WarningBox>
          환율이 유리하다는 이유만으로 매수를 서두르는 것은 위험할 수
          있습니다. 방문객 감소와 비자 둔화가 보여주듯, 지금은 가격뿐
          아니라 현지 접근성과 정책 환경까지 함께 살펴야 하는 시기입니다.
        </WarningBox>
      </section>

      {/* ── 3단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            3. 순위가 바뀌었다 — 중국 대신 멕시코가 1위로
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          오랫동안 1위 자리를 지켜온 중국인 매수자가 밀려난 것이 이번
          보고서의 상징적인 변화입니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            02
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              멕시코인 매수자가 매수 건수 기준 1위로 올라섰습니다
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              그동안 외국인 매수 국적 통계에서 최상위권을 지켜온 중국이
              이번 조사에서는 순위가 밀려났고, 대신 지리적으로 가깝고
              국경을 오가며 부동산을 매입하는{" "}
              <strong style={{ color: "var(--foreground)" }}>
                멕시코인 매수자
              </strong>
              가 매수 건수 기준 1위로 올라섰습니다. 지정학적 긴장과 자본
              유출 규제가 강한 국적일수록 미국 부동산 매수 활동이 더
              빠르게 위축되는 경향을 보여주는 사례입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 시사점 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            한국인 투자자에게 주는 시사점
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          경쟁이 줄어든 시장은 매수자 입장에서 협상 여지가 넓어지는 시장이기도 합니다.
        </p>

        <div
          className="rounded-2xl p-6 flex gap-5 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-2xl font-bold flex-shrink-0 w-10 text-center"
            style={{ color: GREEN }}
          >
            03
          </span>
          <div className="w-full">
            <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              외국인 매수 경쟁이 줄어든 지금이 오히려 기회일 수 있습니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              외국인 매수 자체가 위축됐다는 것은, 같은 매물을 두고 해외
              자본과 경쟁하던 상황이 줄었다는 뜻이기도 합니다. 매도자
              우위였던 시장에서 매수자가 협상력을 가질 수 있는 시장으로
              무게중심이 옮겨가고 있는 지금은, 꾸준히 미국 부동산 투자를
              준비해 온 한국인 투자자에게 오히려 유리한 조건이 될 수
              있습니다.
            </p>
            <CheckList
              items={[
                "국적별 매수 통계보다 내가 관심 있는 지역의 실제 매물 재고와 가격 흐름을 우선 확인합니다",
                "경쟁이 줄어든 시장에서는 희망 매도가보다 낮은 가격에 협상을 시도해 볼 여지가 있습니다",
                "달러 약세 국면에서는 환전 시점 분산 등 환율 리스크 관리도 함께 고려합니다",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          외국인 매수 감소는 시장이 위축됐다는 신호이기도 하지만,
          동시에 경쟁이 줄어든 매수자 우위 국면이 열리고 있다는 신호이기도
          합니다. 통계에 나타난 흐름만 좇기보다, 내가 투자하려는 지역의
          실제 매물 상황과 가격 협상 여지를 직접 확인하는 것이
          중요합니다. 궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons
        title="2026년 외국인 미국 부동산 매수 19% 감소, 그 이유는?"
        description="전미부동산협회(NAR) 최신 보고서 기준 외국인의 미국 주택 매수가 1년 새 19% 감소했습니다. 그 배경과 한국인 투자자에게 주는 의미를 정리합니다."
        url="https://www.kiminvestment.com/blog/foreign-buyer-decline-2026"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          미국 부동산 시장의 최근 흐름을 함께 이해하는 데 도움이 되는 글들입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/mortgage-rate-2026-august",
              category: "투자 가이드",
              color: GREEN,
              bg: "rgba(22,163,74,0.15)",
              title: "2026년 8월 모기지 금리 6.76%, 올해 최고치 — 지금 사도 될까?",
              excerpt:
                "2026년 8월 기준 30년 고정 모기지 금리가 올해 최고 수준을 기록했습니다. 금리 상승 배경과 매물 재고 증가가 투자자에게 주는 의미를 짚어봅니다.",
            },
            {
              href: "/blog/foreign-ownership-state-laws-2026",
              category: "세금/법률",
              color: "#3498db",
              bg: "rgba(52,152,219,0.15)",
              title: "미국 36개 주 외국인 부동산 소유 제한법 확산 — 한국인도 해당될까?",
              excerpt:
                "미국 여러 주에서 외국인의 부동산 소유를 제한하는 법이 확산되고 있습니다. 어떤 국적이 대상이며 한국인 투자자는 해당되는지 정리합니다.",
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
          경쟁이 줄어든 지금, 미국 부동산 투자를 검토해 보세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          지역별 매물 재고와 협상 여지까지
          <br />
          투자 상담을 통해 확인해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: GREEN, color: "#fff" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${GREEN}`, color: GREEN }}
          >
            블로그 전체보기 →
          </Link>
        </div>
      </section>

    </div>
  );
}
