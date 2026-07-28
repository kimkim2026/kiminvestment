import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "같은 동네, 비슷한 집인데 왜 재산세는 다를까 | 김통찰의 미국 부동산",
  description:
    "미국에서는 같은 동네, 비슷한 크기의 집이라도 재산세가 두 배 이상 차이 나는 경우가 흔합니다. 실제 렌탈 부동산 두 채를 비교하며 그 이유를 한국 투자자 눈높이에서 쉽게 설명합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/property-tax-uncapping-explained",
  },
  openGraph: {
    title: "같은 동네, 비슷한 집인데 왜 재산세는 다를까",
    description:
      "미국에서는 같은 동네, 비슷한 크기의 집이라도 재산세가 두 배 이상 차이 나는 경우가 흔합니다. 실제 렌탈 부동산 두 채를 비교하며 그 이유를 한국 투자자 눈높이에서 쉽게 설명합니다.",
    url: "https://kiminvestment.com/blog/property-tax-uncapping-explained",
    images: [
      "https://images.unsplash.com/photo-1768067437750-f18d26d3397b?w=900&q=80",
    ],
    type: "article",
    publishedTime: "2026-07-27",
  },
};

const AMBER = "#f59e0b";
const CATEGORY_COLOR = "#3498db";

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

export default function PropertyTaxUncappingExplainedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1768067437750-f18d26d3397b?w=1600&q=80"
          alt="미국 교외 지역 주택가 — 비슷한 집인데 재산세는 왜 다를까"
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
            style={{ background: "rgba(52,152,219,0.2)", color: CATEGORY_COLOR }}
          >
            세금/법률
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            같은 동네, 비슷한 집인데
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: AMBER }}
          >
            왜 재산세는 다를까
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            실제 렌탈 부동산 두 채의 재산세 고지서를 비교하며, 같은 동네
            비슷한 집인데도 세금이 크게 벌어지는 이유를 정리했습니다.
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
          style={{ background: "rgba(52,152,219,0.15)", color: CATEGORY_COLOR }}
        >
          세금/법률
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 7월 27일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 6분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["재산세", "Taxable Value", "임대 부동산 투자", "미국 세금", "부동산 투자 경험담"].map(
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
        title="같은 동네, 비슷한 집인데 왜 재산세는 다를까"
        description="미국에서는 같은 동네, 비슷한 크기의 집이라도 재산세가 두 배 이상 차이 나는 경우가 흔합니다."
        url="https://www.kiminvestment.com/blog/property-tax-uncapping-explained"
      />

      {/* ── 본문 ── */}
      <article className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          저는 미국 동부 지역에 두 채의 렌탈 부동산을 보유하고 있습니다.
          편의상 A아파트, B아파트라고 부르겠습니다. 두 집 모두 같은
          도시에 있고, 방과 욕실 구성도 거의 비슷합니다. 그런데 2026년
          여름 재산세 고지서를 받아보니 A아파트는 약 6,264달러, B아파트는
          약 9,033달러였습니다. 같은 지역, 비슷한 조건의 집인데 세금이
          이렇게 차이 날 수 있다는 사실이 처음에는 저도 이해가 되지
          않았습니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          한국에서는 공시가격이 매년 시장가치를 따라가며 조정되기 때문에,
          비슷한 집이면 세금도 비슷할 거라고 생각하기 쉽습니다. 하지만
          미국의 재산세 제도는 이 부분에서 완전히 다르게 작동합니다.
        </p>

        <SubHeading>과세표준가액에는 상한선이 있습니다</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          첫 번째 이유는 과세표준가액이라는 개념 때문입니다. 미국 여러
          주에서는 소유주가 바뀌지 않는 한, 과세표준가액이 매년
          인플레이션율 또는 5퍼센트 중 낮은 쪽으로만 오르도록 법으로
          제한하고 있습니다. 즉 실제 시장가치가 아무리 올라도, 소유권이
          유지되는 동안에는 세금 계산의 기준이 되는 금액이 아주 천천히만
          상승합니다.
        </p>

        <SubHeading>소유권이 바뀌는 순간 상한선이 풀립니다</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          두 번째 이유는 매매가 이루어지는 순간 이 상한선이 해제된다는
          점입니다. 부동산이 팔리면 다음 해에 과세표준가액이 그 시점의
          시장가치 절반 수준인 주 평정가치로 리셋됩니다. 제 경우
          B아파트는 비교적 최근에 매입했는데, 이 거래로 인해 이듬해
          과세표준가액이 새로운 시장가치 기준으로 초기화되었습니다.
          반면 A아파트는 몇 년 전에 매입한 뒤로 계속 같은 상한선
          보호를 받고 있어서, 실제 가치는 비슷하거나 더 높을 수 있음에도
          세금 계산 기준액은 훨씬 낮게 묶여 있는 것입니다.
        </p>

        <SubHeading>실거주 여부도 영향을 줍니다</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          세 번째 이유는 실거주 여부에 따른 세금 감면 혜택입니다. 소유주가
          직접 거주하는 주택에는 지역 학교 운영세 일부를 면제해주는
          제도가 있는 주가 많습니다. 저처럼 두 집 모두 임대 목적으로
          운영하는 경우에는 이 혜택을 받지 못하기 때문에 전체 세율이
          그대로 적용됩니다.
        </p>

        <div
          className="my-10"
          style={{ borderTop: "1px solid var(--border)" }}
        />

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          정리하면, 두 부동산의 세금 차이는 집의 크기나 상태 때문이
          아니라 언제 매입했는가의 시점 차이에서 비롯된 것입니다. 최근에
          산 집일수록 세금 기준액이 시장가치에 가깝게 반영되고, 오래
          보유한 집일수록 상한선 제도의 혜택으로 세금이 낮게 유지됩니다.
        </p>

        <SubHeading>한국인 투자자분들께 드리고 싶은 조언</SubHeading>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          매물을 검토할 때 현재 붙어있는 재산세 금액만 보고 판단하지
          마시고, 그 집이 마지막으로 언제 거래되었는지를 함께 확인하시기
          바랍니다. 오래 보유된 집은 지금 세금이 낮아 보여도, 내가
          매입하는 순간 다음 해부터 세금이 급격히 올라갈 수 있기
          때문입니다. 실제 부담해야 할 세금은 현재 표시된 금액이 아니라,
          매입 이후 리셋될 금액을 기준으로 계산해야 정확합니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          각 주마다 이런 상한선 제도의 이름과 방식은 다르지만, 소유권
          변경 시 재산세가 재산정된다는 큰 원칙은 여러 주에서 공통적으로
          적용됩니다. 매물을 검토하실 때는 해당 지역 평가관 웹사이트에서
          과세표준가액과 최근 거래 이력을 직접 확인해보시는 것을
          권해드립니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
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
        title="같은 동네, 비슷한 집인데 왜 재산세는 다를까"
        description="미국에서는 같은 동네, 비슷한 크기의 집이라도 재산세가 두 배 이상 차이 나는 경우가 흔합니다."
        url="https://www.kiminvestment.com/blog/property-tax-uncapping-explained"
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
          매물의 세금 구조가 궁금하시다면 아래 글들도 함께 읽어보시기 바랍니다.
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
              href: "/blog/us-real-estate-tax-benefits",
              category: "세금/법률",
              title: "미국 부동산 투자, 세금 혜택이 얼마나 클까? — 투자자가 꼭 알아야 할 7가지",
              excerpt:
                "감가상각, 모기지 이자 공제, 1031 Exchange까지. 미국 부동산이 투자자에게 세금 면에서 얼마나 유리한 구조인지 정리했습니다.",
            },
            {
              href: "/blog/1031-exchange-guide-korean",
              category: "세금/법률",
              title: "미국 부동산 투자자라면 꼭 알아야 할 1031 Exchange",
              excerpt:
                "부동산을 팔고 다른 부동산을 살 때 세금을 미룰 수 있는 1031 Exchange. 핵심 조건부터 진행 절차, 장단점까지 정리했습니다.",
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
                  background: "rgba(52,152,219,0.15)",
                  color: CATEGORY_COLOR,
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
            "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)",
          border: "1px solid rgba(245,158,11,0.3)",
        }}
      >
        <h2
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "var(--foreground)" }}
        >
          매입 전, 재산세 재산정 여부부터 확인하세요
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "#888", maxWidth: 480 }}
        >
          지금 붙어있는 재산세가 아니라, 매입 후 리셋될 금액을 기준으로
          현금흐름을 계산해야 정확합니다.
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
