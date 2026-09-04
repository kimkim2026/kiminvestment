import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "금리가 오르면 미국 집값은 정말 떨어질까요 | 김통찰의 미국 부동산",
  description:
    "2026년 9월 현재 연준 금리와 모기지 금리 동향을 바탕으로, 금리 변화가 미국 부동산 투자에 실제로 어떤 영향을 주는지 한국인 투자자 관점에서 정리합니다.",
  alternates: {
    canonical:
      "https://www.kiminvestment.com/blog/interest-rate-real-estate-correlation",
  },
  openGraph: {
    title:
      "금리와 미국 부동산 — 지금 오르는 이유와 투자자가 챙겨야 할 것",
    description:
      "2026년 9월 현재 연준 금리와 모기지 금리 동향을 바탕으로, 금리 변화가 미국 부동산 투자에 실제로 어떤 영향을 주는지 한국인 투자자 관점에서 정리합니다.",
    url: "https://kiminvestment.com/blog/interest-rate-real-estate-correlation",
    images: [
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=900&q=80",
    ],
    type: "article",
    publishedTime: "2026-09-04",
  },
};

const BLUE = "#2563eb";
const BLUE_LIGHT = "#60a5fa";

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

function Para({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base leading-relaxed mt-4"
      style={{ color: "#bbb" }}
    >
      {children}
    </p>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-5"
      style={{
        background: "rgba(37,99,235,0.09)",
        border: "1px solid rgba(37,99,235,0.28)",
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
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-5"
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

function NumberedPoint({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex gap-5 mb-5"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <span
        className="text-2xl font-bold flex-shrink-0 w-10 text-center"
        style={{ color: BLUE_LIGHT }}
      >
        {index}
      </span>
      <div className="w-full">
        <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
          {title}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function InterestRateRealEstateCorrelationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=1600&q=80"
          alt="파란 색조의 금융 차트가 표시된 모니터 화면 — 금리와 미국 부동산 시장"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.64)" }}
        />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(37,99,235,0.2)", color: BLUE_LIGHT }}
          >
            융자/모기지
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            금리가 오르면 미국 집값은 정말 떨어질까요
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: BLUE_LIGHT }}
          >
            지금 오르는 이유와 투자자가 챙겨야 할 것
          </p>
          <p className="text-base mb-6" style={{ color: "#ccc", maxWidth: 580 }}>
            2026년 9월 현재 연준 금리와 모기지 금리 동향을 바탕으로,
            <br />
            금리 변화가 미국 부동산 투자에 실제로 어떤 영향을 주는지
            한국인 투자자 관점에서 정리합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: BLUE, color: "#fff" }}
            >
              문의하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${BLUE_LIGHT}`, color: BLUE_LIGHT }}
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
          style={{ background: "rgba(37,99,235,0.15)", color: BLUE_LIGHT }}
        >
          융자/모기지
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          2026년 9월 4일
        </span>
        <span className="text-xs" style={{ color: "#666" }}>
          읽는 데 약 8분
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {[
            "금리",
            "모기지 금리",
            "연준",
            "재융자",
            "부동산 투자",
            "DSCR 대출",
          ].map((tag) => (
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
        title="금리가 오르면 미국 집값은 정말 떨어질까요"
        description="2026년 9월 현재 연준 금리와 모기지 금리 동향을 바탕으로, 금리 변화가 미국 부동산 투자에 실제로 어떤 영향을 주는지 한국인 투자자 관점에서 정리합니다."
        url="https://www.kiminvestment.com/blog/interest-rate-real-estate-correlation"
      />

      {/* ── 본문 ── */}
      <article className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          한국인 투자자분들과 이야기를 나누다 보면 가장 많이 받는 질문
          중 하나가 이것입니다. 연준이 금리를 올리면 미국 부동산 가격도
          같이 떨어지는 것 아니냐는 질문인데요, 결론부터 말씀드리면 두
          지표는 밀접하게 연결되어 있지만 생각처럼 단순하게 움직이지
          않습니다. 오늘은 지금 시점의 실제 데이터를 가지고 이 관계를
          정리해보겠습니다.
        </p>

        <SubHeading>연준 기준금리와 모기지 금리는 다른 지표입니다</SubHeading>
        <Para>
          먼저 짚고 넘어가야 할 부분이 있습니다. 뉴스에서 말하는 연준
          기준금리(Fed Funds Rate)와 우리가 집을 살 때 은행에서 받는
          모기지 금리는 같은 숫자가 아닙니다. 연준 기준금리는 은행 간
          단기 자금 거래에 적용되는 금리이고, 30년 고정 모기지 금리는
          주로 10년물 국채 금리를 따라 움직입니다. 두 금리가 같은 방향으로
          움직이는 경우가 많긴 하지만, 연준이 금리를 동결해도 모기지
          금리는 오를 수 있고, 그 반대도 가능합니다. 지금이 바로 그런
          시기입니다.
        </Para>

        <SubHeading>지금 상황이 조금 특이합니다</SubHeading>
        <Para>
          원래 시장에서는 2026년 안에 연준이 금리를 인하할 것이라는 기대가
          있었습니다. 그런데 최근 흐름이 바뀌었습니다. 2026년 8월 31일
          연준은 기준금리를 3.50%에서 3.75% 구간으로 동결했는데요, 표결
          결과가 9대 3으로 갈렸습니다. 3명의 위원이 오히려 0.25퍼센트포인트
          인상을 주장한 것입니다.
        </Para>
        <Para>
          여기에 신임 연준 의장 케빈 워시(Kevin Warsh)의 발언이 기름을
          부었습니다. 8월 28일 잭슨홀 심포지엄에서 첫 공식 연설을 한 워시
          의장은 물가 안정에 대한 강한 의지를 밝혔고, 이 발언 이후 시장이
          보는 9월 금리 인상 확률이 크게 뛰었습니다. 연설 전에는 동결
          가능성이 70퍼센트에 가까웠는데, 연설 이후에는 인상 가능성이
          48퍼센트에서 56퍼센트 수준까지 올라왔습니다. 다음
          연방공개시장위원회(FOMC) 회의는 9월 15일과 16일에 열립니다.
        </Para>
        <Para>
          이런 반전이 나온 배경에는 이란발 공급망 충격으로 에너지 가격이
          다시 오르고 있다는 점이 있습니다. 인플레이션을 잡아야 하는 연준
          입장에서는 금리 인하보다 인상 쪽에 더 무게가 실리는 상황인
          것입니다.
        </Para>

        <SubHeading>모기지 금리는 이미 1년 내 최고치입니다</SubHeading>
        <Para>
          이런 분위기는 모기지 금리에도 그대로 반영되고 있습니다.
          프레디맥(Freddie Mac) 기준으로 9월 3일 30년 고정 모기지 금리는
          평균 6.71퍼센트를 기록했습니다. 1년 전 같은 시기 평균이
          6.50퍼센트였던 것과 비교하면 확실히 오른 수치입니다. 일 단위로
          집계하는 옵티멀 블루(Optimal Blue) 기준으로는 9월 4일 30년
          고정이 6.78퍼센트, 15년 고정이 5.96퍼센트까지 올라가면서 최근
          1년 사이 가장 높은 수준을 기록했습니다.
        </Para>
        <Para>
          숫자로 체감해보면, 40만 달러를 대출받는다고 가정할 때 6.78퍼센트
          금리에서는 원리금이 매달 약 2,602달러가 나갑니다. 20퍼센트를
          계약금으로 내고 32만 달러를 대출받는 경우에도 월 2,082달러
          수준입니다. 금리가 0.5퍼센트포인트만 움직여도 월 납부액 차이가
          상당히 커진다는 것을 알 수 있습니다.
        </Para>

        <WarningBox>
          작년 이맘때 검토했던 대출 조건과 지금 조건은 이미 다릅니다.
          오퍼를 넣기 전, 반드시 현재 금리 기준으로 월 상환액과 캐시플로우를
          다시 계산해 보시기 바랍니다.
        </WarningBox>

        <figure className="my-10">
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{ aspectRatio: "16 / 9", border: "1px solid var(--border)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1589927725301-dda06a332802?auto=format&fit=crop&w=1600&q=80"
              alt="미국 교외 주택가를 위에서 내려다본 항공 사진"
              fill
              className="object-cover"
            />
          </div>
          <figcaption
            className="text-xs mt-3 text-center"
            style={{ color: "#777" }}
          >
            금리가 오르면 대출을 이용한 매수 수요가 먼저 줄어듭니다. 교외
            주택가일수록 그 영향이 가격 협상 여지로 나타나는 경우가 많습니다.
          </figcaption>
        </figure>

        <SubHeading>한국인 투자자에게 실질적으로 달라지는 것</SubHeading>
        <Para>
          이 상황이 실제 투자 판단에 어떤 영향을 주는지 정리해보겠습니다.
        </Para>

        <div className="mt-6">
          <NumberedPoint index="01" title="캐시플로우 재계산이 필요합니다">
            작년 이맘때 계획했던 대출 조건과 지금 조건이 다르기 때문에,
            매물 검토 단계에서부터 현재 금리 기준으로 다시 계산해야 정확한
            수익률이 나옵니다.
          </NumberedPoint>
          <NumberedPoint
            index="02"
            title="대출 상품 선택에 더 신중해져야 합니다"
          >
            외국인 투자자가 주로 이용하는 DSCR 대출(임대 수익으로 상환
            능력을 평가하는 대출)의 경우 고정금리와 변동금리 중 어떤 것을
            선택할지가 이전보다 중요한 의사결정이 되었습니다. 지금처럼 금리
            방향이 불확실한 시기에는 변동금리의 리스크가 더 커집니다.
          </NumberedPoint>
          <NumberedPoint
            index="03"
            title="지금 매수할지, 인하를 기다릴지의 문제입니다"
          >
            금리가 높다는 이유로 매수를 미루는 분들이 많은데, 역사적으로
            보면 금리가 높을 때는 매수 경쟁도 줄어들어 협상력이 오히려
            좋아지는 경우가 많습니다. 나중에 금리가 내려가면 그때
            리파이낸싱을 통해 월 납부액을 낮추는 전략도 가능합니다.
          </NumberedPoint>
        </div>

        <SubHeading>2022년에서 2023년 상황과 비교해보면</SubHeading>
        <Para>
          이번이 처음 겪는 금리 급등기는 아닙니다. 2022년부터 2023년까지도
          연준이 인플레이션을 잡기 위해 공격적으로 금리를 올리면서 모기지
          금리가 급등했던 시기가 있었습니다. 당시에도 많은 투자자들이
          관망세로 돌아섰지만, 결과적으로 그 시기에 매수한 분들 중에는
          이후 낮아진 금리로 리파이낸싱하며 좋은 성과를 낸 사례들이
          있습니다. 다만 이번 상황은 인플레이션의 원인이 지정학적
          리스크(이란 관련 공급망 충격)에서 온다는 점에서 이전과는 조금
          다른 변수입니다.
        </Para>

        <SubHeading>실전 팁 세 가지</SubHeading>
        <Para>
          지금 시점에서 실제로 도움이 될 만한 팁을 정리해보겠습니다.
        </Para>
        <TipBox>
          <strong style={{ color: "var(--foreground)" }}>
            첫 번째, 클로징이 임박했다면 금리를 락인하세요.
          </strong>{" "}
          45일 이내에 클로징(closing)이 예정되어 있다면 지금 금리를
          락인(lock)해두는 것이 안전한 선택입니다. 9월 16일 FOMC 발표 이후
          금리가 더 오를 가능성이 있기 때문입니다.
        </TipBox>
        <TipBox>
          <strong style={{ color: "var(--foreground)" }}>
            두 번째, 포인트 매입은 장기 보유일 때만 고려하세요.
          </strong>{" "}
          포인트(point)를 매입해서 금리를 낮추는 옵션은 장기 보유 계획이
          확실할 때만 고려하시기 바랍니다. 단기간에 재융자하거나 매도할
          계획이 있다면 포인트 매입 비용을 회수하지 못할 수 있습니다.
        </TipBox>
        <TipBox>
          <strong style={{ color: "var(--foreground)" }}>
            세 번째, 발표 일정을 미리 확인하고 락인 여부를 상의하세요.
          </strong>{" "}
          CPI 발표(9월 11일)와 FOMC 회의(9월 16일) 두 일정을 앞두고
          있다면, 대출 진행 중인 매물에 대해서는 담당 대출 담당자와 미리
          락인 여부를 상의해두시는 것을 권합니다.
        </TipBox>

        <div
          className="my-10"
          style={{ borderTop: "1px solid var(--border)" }}
        />

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          금리는 계속 변하는 변수이지만, 그 변수를 이해하고 대비하는
          투자자와 그렇지 않은 투자자 사이에는 결국 수익률 차이가 벌어지게
          됩니다. 앞으로도 주요 금리 발표가 있을 때마다 미국 부동산 시장에
          미치는 영향을 정리해서 전해드리겠습니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: BLUE_LIGHT, textDecoration: "underline" }}
          >
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </article>

      <ShareButtons
        title="금리가 오르면 미국 집값은 정말 떨어질까요"
        description="2026년 9월 현재 연준 금리와 모기지 금리 동향을 바탕으로, 금리 변화가 미국 부동산 투자에 실제로 어떤 영향을 주는지 한국인 투자자 관점에서 정리합니다."
        url="https://www.kiminvestment.com/blog/interest-rate-real-estate-correlation"
      />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: BLUE, width: 4 }}
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
          금리와 모기지 흐름을 이해하는 데 도움이 되는 글들입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/mortgage-rate-2026-august",
              category: "투자 가이드",
              title:
                "2026년 8월 모기지 금리 6.76%, 올해 최고치 — 지금 사도 될까?",
              excerpt:
                "2026년 8월 기준 30년 고정 모기지 금리가 올해 최고 수준을 기록했습니다. 금리 상승 배경과 매물 재고 증가가 투자자에게 주는 의미를 짚어봅니다.",
            },
            {
              href: "/blog/trump-mortgage-bond-2026",
              category: "투자 가이드",
              title:
                "트럼프發 2000억 달러 모기지 채권 매입, 금리 인하 효과는?",
              excerpt:
                "트럼프 행정부가 모기지 금리 인하를 위해 2000억 달러 규모의 모기지 채권 매입을 지시했습니다. 실제 효과와 전망을 정리합니다.",
            },
            {
              href: "/blog/brrrr-meaning",
              category: "부동산 투자 기초",
              title: "BRRRR 뜻 — 30초 만에 이해하는 미국 부동산 투자 용어",
              excerpt:
                "미국 부동산 투자 커뮤니티에서 자주 보이는 BRRRR이 무엇의 약자인지, 5단계 구조를 쉽고 짧게 설명합니다.",
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
                style={{ background: "rgba(37,99,235,0.15)", color: BLUE_LIGHT }}
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
            "linear-gradient(135deg, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0.05) 100%)",
          border: "1px solid rgba(37,99,235,0.3)",
        }}
      >
        <h2
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "var(--foreground)" }}
        >
          지금 금리 기준으로 내 투자가 가능한지 확인해 보세요
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "#888", maxWidth: 480 }}
        >
          캐시플로우 재계산부터 DSCR 대출의 고정·변동 선택, 락인 타이밍까지
          <br />
          <br />
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: BLUE_LIGHT }}
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
            style={{ background: BLUE, color: "#fff" }}
          >
            문의하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${BLUE_LIGHT}`, color: BLUE_LIGHT }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>

    </div>
  );
}
