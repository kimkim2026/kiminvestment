import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "Buy Borrow Die 절세 전략 — 미국 자산가들이 세금을 줄이는 방법 | 김통찰의 미국 부동산",
  description:
    "팔지 않고 자산을 키우는 미국 부호들의 대표적인 절세 전략, Buy Borrow Die의 개념과 원리를 한국인 투자자 눈높이에서 정리했습니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/buy-borrow-die-strategy",
  },
  openGraph: {
    title: "Buy Borrow Die 절세 전략 — 미국 자산가들이 세금을 줄이는 방법",
    description:
      "팔지 않고 자산을 키우는 미국 부호들의 대표적인 절세 전략, Buy Borrow Die의 개념과 원리를 한국인 투자자 눈높이에서 정리했습니다.",
    url: "https://kiminvestment.com/blog/buy-borrow-die-strategy",
    images: [
      "https://images.unsplash.com/photo-1780246033063-b058393796a0?w=900&q=80",
    ],
    type: "article",
    publishedTime: "2026-08-27",
  },
};

const AMBER = "#d97706";

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl md:text-2xl font-bold mt-12 mb-4"
      style={{ color: "var(--foreground)" }}
    >
      {children}
    </h2>
  );
}

export default function BuyBorrowDieStrategyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1780246033063-b058393796a0?auto=format&fit=crop&w=1600&q=80"
          alt="오래된 장부 — 팔지 않고 자산을 키우는 Buy Borrow Die 전략"
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
            style={{ background: "rgba(217,119,6,0.18)", color: AMBER }}
          >
            세금/법률
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Buy Borrow Die 절세 전략
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: AMBER }}
          >
            미국 자산가들이 세금을 줄이는 방법
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            팔지 않고 자산을 키우는 미국 부호들의 절세 전략 — 매입, 담보대출,
            상속 3단계의 원리를 한국인 투자자 눈높이에서 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: AMBER, color: "#1a1a1a" }}
            >
              문의하기 →
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
        <span className="text-xs" style={{ color: "#666" }}>2026년 8월 27일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 6분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["Buy Borrow Die", "절세 전략", "자산관리", "상속세", "1031 교환"].map(
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
        title="Buy Borrow Die 절세 전략 — 미국 자산가들이 세금을 줄이는 방법"
        description="팔지 않고 자산을 키우는 미국 부호들의 대표적인 절세 전략, Buy Borrow Die의 개념과 원리를 한국인 투자자 눈높이에서 정리했습니다."
        url="https://www.kiminvestment.com/blog/buy-borrow-die-strategy"
      />

      {/* ── 본문 ── */}
      <article className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          Buy Borrow Die는 미국의 자산가들이 오랫동안 활용해 온 절세 및
          자산관리 전략입니다. 이름 그대로 자산을 매입(Buy)하고, 그 자산을
          담보로 대출(Borrow)을 받아 현금을 마련하고, 마지막에는 매각하지
          않고 상속(Die)으로 다음 세대에 넘기는 세 단계로 구성됩니다. 핵심은
          자산을 팔지 않는 데 있습니다. 자산을 팔지 않으면 양도소득세가
          발생하지 않고, 대신 대출을 통해 현금흐름을 확보하기 때문에
          소득세 부담도 크게 줄어듭니다.
        </p>

        <SubHeading>세율 차이를 활용하는 원리</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 전략의 근본 원리는 소득의 종류에 따라 세율이 다르다는 점을
          활용하는 것입니다. 근로소득이나 사업소득에는 상대적으로 높은
          세율이 적용되는 반면, 자산 매각을 미루고 과세를 이연하는
          자산소득에는 낮은 세율이 적용됩니다. 결국 당장 눈앞의 절세보다
          미래에 더 큰 자산을 남기는 것을 목표로 하는 접근 방식이라 할 수
          있습니다.
        </p>

        <SubHeading>1단계 — 자산 매입(Buy)</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          첫 번째 단계는 자산 매입입니다. 부동산처럼 장기간 보유할 수 있고
          시간이 지날수록 가치가 상승하는 자산을 확보하는 것이 출발점입니다.
          임대 부동산의 경우 각종 비용을 처리해 과세소득을 낮추는 효과도
          함께 얻을 수 있으며, 매각하지 않고 장기간 보유함으로써 자산가치
          상승분에 대한 과세를 자연스럽게 미룰 수 있습니다.
        </p>

        <SubHeading>2단계 — 담보 대출(Borrow)</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          두 번째 단계는 담보 활용입니다. 자산가치가 오른 부분을 매각하는
          대신, 그 자산을 담보로 대출을 받아 필요한 현금을 마련합니다.
          대출로 받은 돈은 세법상 소득으로 분류되지 않기 때문에 별도의
          소득세가 부과되지 않으며, 오히려 대출이자를 비용으로 처리해
          절세 효과를 추가로 얻을 수 있는 경우도 있습니다. 매각 없이
          현금흐름을 만들어낸다는 점이 이 단계의 핵심입니다.
        </p>

        <SubHeading>3단계 — 상속을 통한 이전(Die)</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          세 번째 단계는 상속을 통한 이전입니다. 자산을 매각하지 않고
          세상을 떠날 경우, 미국 세법에서는 상속받는 자녀의 취득가액이
          상속 시점의 시가로 재설정되는 스텝업(Step-Up in Basis) 제도가
          적용됩니다. 이렇게 되면 자녀가 상속받은 자산을 이후에 매각하더라도
          그동안 쌓인 자산가치 상승분에 대해서는 사실상 양도소득세가
          발생하지 않게 됩니다. 즉, 살아있는 동안 쌓아온 자산가치
          상승분에 대한 세금 부담이 상속을 통해 크게 줄어드는 구조입니다.
        </p>

        <SubHeading>부동산 외 다른 자산으로 확장하기</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 전략은 부동산에만 국한되지 않습니다. 부동산은 1031 교환(1031
          Exchange) 제도를 활용해 매각 시점의 과세를 다른 부동산 재투자로
          이연할 수 있고, 보험이나 연금 상품은 세금 없이 자산을 성장시키고
          인출하는 구조로 설계할 수 있습니다. 이 밖에도 주식이나 신탁,
          재단 등 다양한 자산과 수단을 결합해 전략을 확장하는 경우가
          많습니다.
        </p>

        <SubHeading>실제 적용을 위해 필요한 준비</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          다만 이러한 전략을 실제로 적용하기 위해서는 몇 가지 준비가
          필요합니다. 우선 소득의 종류를 어떻게 구성하고 자산을 얼마나
          장기간 보유할지에 대한 구조 설계가 필요하며, 소득 유형별로
          과세 방식이 다르기 때문에 세금 측면의 검토도 함께 이루어져야
          합니다. 또한 부동산, 보험, 상속까지 서로 맞물려 있는 만큼 한
          분야의 전문가만으로는 한계가 있어, 여러 영역을 아우르는
          통합적인 자산관리 자문이 권장됩니다.
        </p>

        <div
          className="my-10"
          style={{ borderTop: "1px solid var(--border)" }}
        />

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          Buy Borrow Die는 하루아침에 완성되는 전략이 아니라, 자산을
          대하는 관점 자체를 바꾸는 장기적인 접근입니다. 팔아서 현금화하는
          대신 보유하고 활용하며 다음 세대로 넘기는 흐름을 이해하는
          것만으로도, 미국에서 부동산이나 자산을 운용하는 한국인
          투자자에게 유용한 참고가 될 수 있습니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          이 개념을 영상으로 조금 더 쉽게 이해하고 싶으시다면, 미국변호사
          존청(John Chung)님이 설명한{" "}
          <a
            href="https://youtu.be/hR1AHoUVQUw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: AMBER, textDecoration: "underline" }}
          >
            미국 부자는 왜 월급을 안받을까? 세금 없이 현금 만들고 자산
            키우는 Buy·Borrow·Die 절세 전략
          </a>{" "}
          영상을 참고하셔도 좋습니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          본 내용은 일반적인 개념 소개이며, 개인의 상황에 따라 적용
          방식과 세금 효과는 크게 달라질 수 있습니다. 구체적인 실행 전
          반드시 미국 세무사 또는 자산관리 전문가와 상담하시길 권합니다.
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: AMBER, textDecoration: "underline" }}
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </article>

      <ShareButtons
        title="Buy Borrow Die 절세 전략 — 미국 자산가들이 세금을 줄이는 방법"
        description="팔지 않고 자산을 키우는 미국 부호들의 대표적인 절세 전략, Buy Borrow Die의 개념과 원리를 한국인 투자자 눈높이에서 정리했습니다."
        url="https://www.kiminvestment.com/blog/buy-borrow-die-strategy"
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
          세금과 자산관리 구조가 궁금하시다면 아래 글들도 함께 읽어보시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/real-estate-selling-tax-guide",
              category: "세금/법률",
              title: "미국 부동산 매도 시 세금 완전 정리 — 초보자를 위한 쉬운 설명",
              excerpt:
                "양도소득세, 감가상각 환수, FIRPTA 원천징수, 1031 Exchange까지 초보 투자자 눈높이에서 쉽게 정리합니다.",
            },
            {
              href: "/blog/1031-exchange-guide-korean",
              category: "세금/법률",
              title: "미국 부동산 투자자라면 꼭 알아야 할 1031 Exchange",
              excerpt:
                "부동산을 팔고 다른 부동산을 살 때 세금을 미룰 수 있는 1031 Exchange. 핵심 조건부터 진행 절차, 장단점까지 정리했습니다.",
            },
            {
              href: "/blog/road-to-housing-act-2026",
              category: "세금/법률",
              title: "21st Century ROAD to Housing Act 완전정리 — 한국인 투자자가 알아야 할 것",
              excerpt:
                "2026년 7월 발효된 미국 주택 법안 ROAD to Housing Act의 핵심 내용과 기관 투자자 규제가 개인 투자자에게 미치는 실제 영향을 정리합니다.",
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
                style={{
                  background: "rgba(217,119,6,0.15)",
                  color: AMBER,
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
      <section
        className="rounded-2xl p-10 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(217,119,6,0.05) 100%)",
          border: "1px solid rgba(217,119,6,0.3)",
        }}
      >
        <h2
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "var(--foreground)" }}
        >
          내 자산에 맞는 절세 구조가 궁금하신가요?
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "#888", maxWidth: 480 }}
        >
          Buy Borrow Die는 개인 상황에 따라 적용 방식이 크게 달라지는
          전략입니다.
          <br />
          <br />
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: AMBER }}
            className="underline underline-offset-2"
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: AMBER, color: "#1a1a1a" }}
          >
            문의하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${AMBER}`, color: AMBER }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>

    </div>
  );
}
