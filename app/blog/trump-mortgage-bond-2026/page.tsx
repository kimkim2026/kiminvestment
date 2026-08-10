import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title:
    "트럼프發 2000억 달러 모기지 채권 매입, 금리 인하 효과는? | 김통찰의 미국 부동산",
  description:
    "트럼프 행정부가 모기지 금리 인하를 위해 2000억 달러 규모의 모기지 채권 매입을 지시했습니다. 실제 효과와 전망을 정리합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/trump-mortgage-bond-2026",
  },
  openGraph: {
    title: "트럼프發 2000억 달러 모기지 채권 매입, 금리 인하 효과는?",
    description:
      "트럼프 행정부가 모기지 금리 인하를 위해 2000억 달러 규모의 모기지 채권 매입을 지시했습니다. 실제 효과와 전망을 정리합니다.",
    images: ["https://images.unsplash.com/photo-1633059050703-0f1b50828402?w=900&q=80"],
    type: "article",
    publishedTime: "2026-08-10",
    url: "https://kiminvestment.com/blog/trump-mortgage-bond-2026",
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

export default function TrumpMortgageBond2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1633059050703-0f1b50828402?w=1600&q=80"
          alt="시카고 연방준비은행 건물 — 정부발 모기지 채권 매입 정책"
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
            2000억 달러 모기지 채권 매입
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "#4ade80" }}
          >
            금리 인하 효과는 실제로 있었을까요
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            트럼프 행정부의 모기지 채권 매입 지시가 만든
            <br />
            단기 효과와 그 한계를 짚어봅니다.
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
          {["트럼프 정책", "모기지 채권", "패니메이", "프레디맥", "금리 전망"].map((tag) => (
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
        title="트럼프發 2000억 달러 모기지 채권 매입, 금리 인하 효과는?"
        description="트럼프 행정부가 모기지 금리 인하를 위해 2000억 달러 규모의 모기지 채권 매입을 지시했습니다. 실제 효과와 전망을 정리합니다."
        url="https://www.kiminvestment.com/blog/trump-mortgage-bond-2026"
      />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          모기지 금리가 올해 최고 수준까지 올라간 가운데, 트럼프
          행정부가 직접 금리를 낮추기 위한 카드를 꺼내 들었습니다.
          패니메이와 프레디맥을 통해 대규모 모기지 채권을 사들이는
          방식으로 시장 금리에 개입하겠다는 발표였습니다. 정부가
          직접 나섰다는 소식에 투자자들의 관심이 쏠렸지만, 실제 효과가
          어느 정도였는지는 별개의 문제입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글에서는 이번 조치의 구체적인 내용, 발표 직후 나타난 금리
          변화, 전문가들의 평가, 그리고 한국인 투자자가 이런 정책성
          뉴스를 어떻게 받아들여야 하는지 정리해 드리겠습니다.
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
            1. 무엇을 했나 — 패니메이·프레디맥 통한 채권 매입 지시
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          6% 아래로 금리를 낮추려는 목표를 내세운 조치였습니다.
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
              2000억 달러 규모의 모기지 담보부증권(MBS) 매입 지시
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              트럼프 대통령은 정부 후원 기관인{" "}
              <strong style={{ color: "var(--foreground)" }}>
                패니메이(Fannie Mae)와 프레디맥(Freddie Mac)
              </strong>
              을 통해{" "}
              <strong style={{ color: "var(--foreground)" }}>
                2000억 달러
              </strong>{" "}
              규모의 모기지 담보부증권을 매입하도록 지시했습니다.
              채권 시장에서 모기지 관련 채권을 대규모로 사들이면
              채권 가격이 오르고 수익률이 내려가면서, 이와 연동된
              모기지 금리도 함께 낮아지는 효과를 기대한 조치로,
              목표는 30년 고정금리를{" "}
              <strong style={{ color: "var(--foreground)" }}>
                6% 아래
              </strong>
              로 끌어내리는 것이었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2단계 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: GREEN, width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            2. 실제로 어떻게 됐나 — 일시적 하락 후 재상승
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          발표 직후와 이후 흐름이 서로 다른 방향을 보였습니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-5">
            {[
              {
                title: "발표 직후 금리가 일시적으로 0.2%포인트 하락",
                desc: "정책 발표 직후에는 시장이 즉각 반응하며 모기지 금리가 약 0.2%p 낮아졌습니다. 정부의 개입 의지 자체가 시장 심리에 단기적인 영향을 준 것으로 볼 수 있습니다.",
              },
              {
                title: "이후 다시 상승 흐름으로 돌아서 8월 기준 6.76%",
                desc: "하지만 하락 효과는 오래가지 못했습니다. 이후 금리는 다시 상승 흐름으로 돌아섰고, 8월 기준 평균 30년 고정금리는 6.76%까지 올라 오히려 연중 최고 수준을 기록했습니다.",
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
          정책 발표 시점의 일시적인 금리 하락만 보고 대출 실행 시점을
          서두르는 것은 신중해야 합니다. 발표 직후의 하락폭이 이후
          흐름까지 이어진다는 보장은 없습니다.
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
            3. 전문가 평가 — 실질 효과는 제한적입니다
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          모기지 금리를 움직이는 더 큰 변수가 따로 있기 때문입니다.
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
              모기지 금리는 국채 금리에 더 크게 좌우된다는 평가
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              전문가들은 모기지 금리가 정부의 채권 매입 규모보다{" "}
              <strong style={{ color: "var(--foreground)" }}>
                10년 만기 국채 수익률
              </strong>
              의 흐름에 훨씬 더 크게 좌우된다고 평가합니다. 인플레이션
              전망, 연방준비제도의 통화정책 방향, 재정적자 우려 등
              국채 금리를 움직이는 더 근본적인 변수들이 그대로 남아
              있는 한, 2000억 달러 규모의 매입만으로는 금리를
              구조적으로 끌어내리기 어렵다는 것이 중론입니다.
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
          정부 개입성 이슈는 단기 변동성 재료로 받아들이는 것이 안전합니다.
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
              금리 전망보다 펀더멘털에 집중하는 투자 전략이 필요합니다
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#bbb" }}>
              정부발 정책 뉴스는 발표 시점에 시장 심리를 단기적으로
              움직이지만, 이번 사례처럼 효과가 며칠 만에 되돌려지는
              경우도 적지 않습니다. 장기적인 렌탈 투자를 계획하고
              계신다면, 정책 발표에 따라 매수 타이밍을 조정하기보다
              매물 자체의 현금흐름과 임대 수요 같은 펀더멘털을 기준으로
              투자 판단을 내리는 것이 더 안정적입니다.
            </p>
            <CheckList
              items={[
                "정책 발표로 인한 일시적 금리 변동에 매수 타이밍을 맞추지 않습니다",
                "10년物 국채 수익률 흐름을 함께 참고하면 모기지 금리 방향을 가늠하는 데 도움이 됩니다",
                "금리보다 매물의 임대 수요와 캐시플로우를 투자 판단의 우선 기준으로 삼습니다",
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
          정부가 나서서 모기지 채권을 사들이겠다는 발표는 시장의
          이목을 끌 만한 뉴스였지만, 실제 결과는 금리를 구조적으로
          낮추는 데까지 이어지지 못했습니다. 정책성 이슈는 단기
          변동성을 만드는 재료로만 참고하고, 실제 투자 결정은 매물의
          현금흐름과 시장 펀더멘털을 기준으로 내리시는 것을
          권해드립니다. 궁금한 점이 있으시면{" "}
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
        title="트럼프發 2000억 달러 모기지 채권 매입, 금리 인하 효과는?"
        description="트럼프 행정부가 모기지 금리 인하를 위해 2000억 달러 규모의 모기지 채권 매입을 지시했습니다. 실제 효과와 전망을 정리합니다."
        url="https://www.kiminvestment.com/blog/trump-mortgage-bond-2026"
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
          금리와 정책 흐름을 함께 이해하는 데 도움이 되는 글들입니다.
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
              href: "/blog/road-to-housing-act-2026",
              category: "세금/법률",
              color: "#3498db",
              bg: "rgba(52,152,219,0.15)",
              title: "21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것",
              excerpt:
                "2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다.",
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
          정책 변화 속에서도 흔들림 없는 투자 기준을 세워보세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          금리 전망보다 중요한 펀더멘털 점검까지
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
