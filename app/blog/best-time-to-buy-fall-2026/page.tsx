import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "2026년 최적의 미국 집 구매 시기 — 9월 27일부터 시작되는 이유 | 김통찰의 미국 부동산",
  description:
    "Realtor.com이 발표한 2026년 최적 구매 주간(9월 27일~10월 3일)과 최근 모기지 금리·재고 동향을 바탕으로, 지금이 왜 한국인 투자자에게 협상력을 가질 좋은 시점인지 데이터로 정리했습니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/best-time-to-buy-fall-2026",
  },
  openGraph: {
    title: "2026년 최적의 미국 집 구매 시기 — 9월 27일부터 시작되는 이유",
    description:
      "Realtor.com이 발표한 2026년 최적 구매 주간(9월 27일~10월 3일)과 최근 모기지 금리·재고 동향을 바탕으로, 지금이 왜 한국인 투자자에게 협상력을 가질 좋은 시점인지 데이터로 정리했습니다.",
    url: "https://www.kiminvestment.com/blog/best-time-to-buy-fall-2026",
    images: [
      "https://images.unsplash.com/photo-1632646332858-3bd21405f98f?auto=format&fit=crop&w=1600&q=80",
    ],
    type: "article",
    publishedTime: "2026-09-18",
  },
};

const TEAL = "#0d9488";
const TEAL_LIGHT = "#2dd4bf";
const TITLE = "2026년 최적의 미국 집 구매 시기 — 9월 27일부터 시작되는 이유";
const DESCRIPTION =
  "Realtor.com이 발표한 2026년 최적 구매 주간(9월 27일~10월 3일)과 최근 모기지 금리·재고 동향을 바탕으로, 지금이 왜 한국인 투자자에게 협상력을 가질 좋은 시점인지 데이터로 정리했습니다.";
const URL = "https://www.kiminvestment.com/blog/best-time-to-buy-fall-2026";

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 items-start px-4 py-3 rounded-xl my-4"
      style={{
        background: "rgba(13,148,136,0.09)",
        border: "1px solid rgba(13,148,136,0.28)",
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
            style={{ color: TEAL }}
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

export default function BestTimeToBuyFall2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1632646332858-3bd21405f98f?auto=format&fit=crop&w=1600&q=80"
          alt="마당에 놓인 매매(For Sale) 팻말 — 2026년 최적 구매 시기"
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
            style={{ background: "rgba(13,148,136,0.22)", color: TEAL_LIGHT }}
          >
            투자 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            2026년 최적의 미국 집 구매 시기
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: TEAL_LIGHT }}
          >
            9월 27일부터 시작되는 이유
          </p>
          <p className="text-base mb-6" style={{ color: "#ccc", maxWidth: 580 }}>
            Realtor.com이 발표한 2026년 최적 구매 주간과 최근 모기지 금리·재고
            동향을 바탕으로,
            <br />
            지금이 왜 협상력을 가질 좋은 시점인지 데이터로 정리했습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: TEAL, color: "#fff" }}
            >
              투자 상담 신청하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: `1px solid ${TEAL_LIGHT}`, color: TEAL_LIGHT }}
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
          style={{ background: "rgba(13,148,136,0.15)", color: TEAL_LIGHT }}
        >
          투자 가이드
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 9월 18일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 6분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["시장 분석", "구매 타이밍", "모기지 금리", "재고 증가", "매수자 시장", "2026년 부동산"].map(
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

      <ShareButtons title={TITLE} description={DESCRIPTION} url={URL} />

      {/* ── 들어가며 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed mb-4" style={{ color: "#bbb" }}>
          &quot;미국 집을 언제 사야 할까요?&quot; 그동안은 &quot;시장 상황에 따라
          다르다&quot;는 모호한 답만 가능했습니다. 그런데 이번에는 조금 더 구체적인
          답이 나왔습니다. Realtor.com이 2026년 9월 14일 발표한 &quot;2026 Best
          Time to Buy&quot; 리포트가, 지난 몇 년간의 매물 등록·가격·경쟁 데이터를
          분석해 매수자에게 가장 유리한 한 주를 구체적으로 짚어냈기 때문입니다.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          이 글에서는 해당 리포트의 핵심 내용과, 최근 발표된 모기지 금리·재고
          데이터를 함께 살펴보면서 이 시기가 한국인 투자자에게 실제로 어떤 의미를
          갖는지 정리해 드리겠습니다.
        </p>
      </section>

      {/* ── 왜 9월 27일~10월 3일인가 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: TEAL, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            왜 9월 27일~10월 3일이 &quot;최적 주간&quot;인가
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          Realtor.com은 이 주간을 세 가지 근거로 꼽았습니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <CheckList
            items={[
              "연초 대비 매물이 31.9% 더 많이 시장에 나와 있는 시기입니다.",
              "연중 평균 주간 대비로도 매물이 13.3% 더 많습니다.",
              "여름철 계절적 가격 고점을 지난 뒤라 가격 부담이 낮아지고, 매수 경쟁도 함께 줄어드는 구간입니다.",
            ]}
          />
        </div>

        <TipBox>
          Realtor.com이 분석한 42개 대형 대도시권 가운데 42곳 모두 전국
          최적 주간과 한 달 이내의 시차로 각 지역만의 최적 주간을
          맞는다고 합니다. 즉 관심 있는 지역이 정확히 9월 말이 아니더라도,
          9~10월 전반이 대체로 매수자에게 유리한 시기라고 이해하시면
          됩니다.
        </TipBox>
      </section>

      {/* ── 최근 시장 데이터로 보는 배경 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: TEAL, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            최근 시장 데이터로 보는 배경
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          2026년 9월 10일 전후로 발표된 지표들도 같은 방향을 가리키고
          있습니다.
        </p>

        <div className="overflow-x-auto my-6">
          <table
            className="w-full text-sm border-collapse rounded-lg overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                {["지표", "수치", "시사점"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2 text-left font-semibold"
                    style={{ border: "1px solid var(--border)", color: TEAL_LIGHT }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "30년 고정 모기지 금리 (9월 10일 기준)",
                  "6.76%",
                  "전주 대비 소폭 상승, 여전히 높은 수준",
                ],
                [
                  "활성 재고",
                  "약 162만 채",
                  "팬데믹 이전 수준에 근접",
                ],
                [
                  "공급 개월수",
                  "4.9개월",
                  "매수자 우위로 전환 중인 구간",
                ],
                [
                  "8월 기존주택매매",
                  "전월 대비 -2.0%",
                  "매수 심리 위축, 협상 여지 확대",
                ],
              ].map((row, rIdx) => (
                <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? "transparent" : "var(--surface)" }}>
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-2"
                      style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs" style={{ color: "#666" }}>
          수치 출처: Freddie Mac 주간 모기지 리포트, 전미부동산협회(NAR) 기존주택매매
          리포트 (2026년 9월 10일 발표 기준)
        </p>
      </section>

      <figure className="my-10">
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{ aspectRatio: "16 / 9", border: "1px solid var(--border)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1761830000355-5edd98d71965?auto=format&fit=crop&w=1600&q=80"
            alt="가을 단풍이 든 언덕 위 주택가"
            fill
            className="object-cover"
          />
        </div>
        <figcaption
          className="text-xs mt-3 text-center"
          style={{ color: "#777" }}
        >
          매물이 늘고 거래가 둔화되는 가을은, 매도자가 조급해지고 매수자의
          협상 여지가 커지는 시기입니다.
        </figcaption>
      </figure>

      {/* ── 한국인 투자자에게 의미하는 것 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: TEAL, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            한국인 투자자에게 의미하는 것
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          금리가 낮아진 것이 아니라는 점이 핵심입니다. 그런데도 왜 지금이
          기회로 꼽히는지 정리해 보겠습니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
            금리보다 협상력 변화에 주목해야 합니다
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            30년 고정 모기지 금리는 6.76%로 여전히 부담스러운 수준입니다.
            하지만 지금 시장의 핵심은 금리 자체가 아니라, 재고가 늘고
            거래가 둔화되면서 매도자가 조급해지는 국면으로 넘어가고
            있다는 점입니다. 같은 금리라도 협상 여지가 큰 시기에 오퍼를
            넣으면, 가격이나 클로징 비용 조건에서 더 유리하게 조율할
            가능성이 높아집니다.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
            사전 승인은 미리 받아두세요
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            모기지를 활용해 매입할 계획이라면, 최적 주간이 시작되기 전에
            사전 승인(Pre-Approval)을 먼저 받아두시는 것이 좋습니다. 이
            시기에 좋은 매물이 나왔을 때 곧바로 오퍼를 넣을 수 있어야
            협상력을 실제로 활용할 수 있습니다. 사전 승인 절차는{" "}
            <Link href="/blog/buying-process-a-to-z" style={{ color: TEAL_LIGHT, textDecoration: "underline" }}>
              미국 부동산 구매 프로세스 A to Z
            </Link>{" "}
            글의 1단계에서 자세히 다루고 있습니다.
          </p>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
            LLC 명의라면 대출 조건을 다시 확인하세요
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            LLC 명의로 투자를 계획하고 계신다면, 이 시기에도 LLC 명의
            대출은 개인 명의보다 금리나 조건이 불리할 수 있다는 점을 다시
            한 번 염두에 두셔야 합니다. 자세한 내용은{" "}
            <Link href="/blog/llc-setup-guide" style={{ color: TEAL_LIGHT, textDecoration: "underline" }}>
              미국 LLC 설립 방법
            </Link>{" "}
            글의 &quot;흔한 실수&quot; 섹션을 참고해 주세요.
          </p>
        </div>
      </section>

      {/* ── 주의할 점 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "#dc2626", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            주의할 점
          </h2>
        </div>
        <p className="mb-6 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          전국 평균 데이터가 모든 지역에 똑같이 적용되지는 않습니다.
        </p>

        <WarningBox>
          <strong style={{ color: "#f87171" }}>
            일부 지역은 이 흐름과 반대로 움직일 수 있습니다.
          </strong>{" "}
          특히 여전히 재고가 부족한 인기 학군이나, 저가 매물이 밀집한
          지역은 전국 평균과 다르게 경쟁이 치열한 상태를 유지하는
          경우가 많습니다. 오퍼를 넣기 전 반드시 관심 지역의 로컬
          재고량과 DOM(Days on Market, 평균 매매 소요 일수) 데이터를
          현지 에이전트를 통해 별도로 확인하시기 바랍니다.
        </WarningBox>
      </section>

      {/* ── 마무리 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ background: TEAL, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            마무리
          </h2>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          9월 27일부터 시작되는 이 한 주는 &quot;무조건 사야 하는
          시기&quot;가 아니라{" "}
          <strong style={{ color: "var(--foreground)" }}>
            협상력이 생기는 시기
          </strong>
          라는 점을 기억해 두시기 바랍니다. 금리는 여전히 높은 수준이지만,
          매물이 늘고 매도자의 조급함이 커지는 구간에서는 같은 예산으로도
          더 나은 조건을 끌어낼 여지가 생깁니다. 다만 전국 평균과 관심
          지역의 실제 상황이 다를 수 있다는 점을 감안해, 사전 승인과 로컬
          데이터 확인을 먼저 마쳐두시는 것을 권합니다.
        </p>
        <p className="text-base leading-relaxed mt-4" style={{ color: "#bbb" }}>
          궁금한 점이 있으시면{" "}
          <Link href="/contact" style={{ color: TEAL_LIGHT, textDecoration: "underline" }}>
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
      </section>

      <ShareButtons title={TITLE} description={DESCRIPTION} url={URL} />

      {/* ── 함께 읽으면 좋은 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: TEAL, width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          구매 시점을 결정하기 전에 함께 확인하시면 좋은 글들입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: "/blog/buying-process-a-to-z",
              category: "투자 가이드",
              title: "미국 부동산 구매 프로세스 A to Z",
              excerpt:
                "오퍼 제출부터 클로징까지, 미국 부동산 구매의 전 과정을 단계별로 정리했습니다. 처음 구매하시는 분들이 꼭 알아야 할 핵심 내용을 담았습니다.",
            },
            {
              href: "/blog/mortgage-guide-for-koreans",
              category: "투자 가이드",
              title: "한국인을 위한 미국 모기지 완전 정복",
              excerpt:
                "미국 모기지는 한국 주택담보대출과 완전히 다릅니다. 고정금리 vs 변동금리, DTI 계산법, 외국인 모기지 조건까지 핵심만 정리했습니다.",
            },
            {
              href: "/blog/llc-setup-guide",
              category: "세금/법률",
              title: "미국 LLC 설립 방법 — 한국인 투자자를 위한 7단계 완전 가이드",
              excerpt:
                "미국 부동산 투자를 위한 LLC 설립 절차를 한국인 투자자 관점에서 단계별로 정리했습니다. 주(State) 선택부터 EIN 신청까지 알아야 할 모든 것을 담았습니다.",
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
                style={{ background: "rgba(13,148,136,0.15)", color: TEAL_LIGHT }}
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
        style={{
          background: "linear-gradient(135deg, rgba(13,148,136,0.16) 0%, rgba(13,148,136,0.05) 100%)",
          border: "1px solid rgba(13,148,136,0.3)",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          이번 최적 주간에 맞춰 매수 준비를 시작해 보세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 480 }}>
          사전 승인부터 관심 지역 로컬 데이터 확인까지
          <br />
          <br />
          궁금한 점이 있으시면{" "}
          <Link href="/contact" style={{ color: TEAL_LIGHT }} className="underline underline-offset-2">
            문의하기
          </Link>{" "}
          페이지를 통해 언제든지 질문해 주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: TEAL, color: "#fff" }}
          >
            문의하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: `1px solid ${TEAL_LIGHT}`, color: TEAL_LIGHT }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>

    </div>
  );
}
