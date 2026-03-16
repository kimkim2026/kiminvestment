import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개",
  description: "Kim Investment 블로그 운영자 소개 페이지입니다.",
};

const skills = [
  { label: "주식 분석", value: 90 },
  { label: "ETF 투자", value: 85 },
  { label: "부동산", value: 70 },
  { label: "암호화폐", value: 65 },
  { label: "거시경제 분석", value: 80 },
];

const timeline = [
  {
    year: "2014",
    title: "투자 시작",
    desc: "첫 주식 계좌 개설, 국내 주식 투자 시작",
  },
  {
    year: "2017",
    title: "해외 주식 투자",
    desc: "미국 주식 시장 진입, S&P500 ETF 투자 시작",
  },
  {
    year: "2019",
    title: "부동산 투자",
    desc: "첫 부동산 투자 및 REITs 포트폴리오 구성",
  },
  {
    year: "2021",
    title: "암호화폐 진입",
    desc: "비트코인, 이더리움 소액 분산 투자",
  },
  {
    year: "2024",
    title: "블로그 오픈",
    desc: "Kim Investment 블로그 개설, 투자 인사이트 공유 시작",
  },
];

const investmentPhilosophy = [
  {
    icon: "📊",
    title: "데이터 기반 분석",
    desc: "감정이 아닌 데이터와 논리에 근거한 투자 결정을 추구합니다.",
  },
  {
    icon: "⏳",
    title: "장기 투자",
    desc: "단기 시세 차익보다 장기적인 복리 효과를 중시합니다.",
  },
  {
    icon: "🌐",
    title: "글로벌 분산",
    desc: "국내외 다양한 자산 클래스에 분산 투자하여 리스크를 관리합니다.",
  },
  {
    icon: "📚",
    title: "지속적 학습",
    desc: "시장은 끊임없이 변합니다. 지속적인 공부와 업데이트가 핵심입니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h1
          style={{ color: "var(--foreground)" }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          소개
        </h1>
        <p style={{ color: "#888" }} className="text-base">
          Kim Investment 블로그를 운영하는 개인 투자자 소개입니다.
        </p>
      </div>

      {/* Profile Card */}
      <section
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
        className="rounded-2xl p-8 mb-12"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, #8b6914 100%)",
                width: 100,
                height: 100,
              }}
              className="rounded-full flex items-center justify-center text-4xl font-bold text-black"
            >
              K
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 style={{ color: "var(--gold)" }} className="text-2xl font-bold mb-1">
              Kim
            </h2>
            <p style={{ color: "#888" }} className="text-sm mb-4">
              개인 투자자 · 금융 블로거
            </p>
            <p style={{ color: "#bbb" }} className="text-sm leading-relaxed mb-6 max-w-xl">
              10년 이상의 투자 경험을 바탕으로 국내외 주식, ETF, 부동산, 암호화폐 등
              다양한 자산 클래스에 분산 투자하고 있습니다. 복잡한 금융 정보를
              누구나 이해하기 쉽게 정리하고 공유하는 것을 목표로 합니다.
            </p>

            {/* Contact/Social */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { label: "이메일", icon: "✉️", href: "mailto:contact@kiminvestment.com" },
                { label: "트위터", icon: "𝕏", href: "#" },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                    background: "var(--surface-2)",
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm hover:border-[var(--gold)] transition-colors"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full" />
          <h2 style={{ color: "var(--foreground)" }} className="text-xl font-bold">
            투자 철학
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {investmentPhilosophy.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              className="p-5 rounded-xl hover:border-[var(--gold)] transition-colors"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h3 style={{ color: "var(--gold)" }} className="font-semibold mb-2 text-sm">
                {title}
              </h3>
              <p style={{ color: "#888" }} className="text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ background: "var(--green)", width: 4 }} className="h-6 rounded-full" />
          <h2 style={{ color: "var(--foreground)" }} className="text-xl font-bold">
            투자 분야
          </h2>
        </div>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          className="rounded-xl p-6 space-y-5"
        >
          {skills.map(({ label, value }) => (
            <div key={label}>
              <div className="flex justify-between mb-1.5">
                <span style={{ color: "var(--foreground)" }} className="text-sm font-medium">
                  {label}
                </span>
                <span style={{ color: "var(--gold)" }} className="text-sm font-semibold">
                  {value}%
                </span>
              </div>
              <div
                style={{ background: "var(--surface-2)" }}
                className="h-1.5 rounded-full overflow-hidden"
              >
                <div
                  style={{
                    width: `${value}%`,
                    background: "linear-gradient(90deg, var(--gold) 0%, var(--green) 100%)",
                  }}
                  className="h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full" />
          <h2 style={{ color: "var(--foreground)" }} className="text-xl font-bold">
            투자 이력
          </h2>
        </div>
        <div className="relative">
          <div
            style={{ background: "var(--border)", left: "3.5rem" }}
            className="absolute top-0 bottom-0 w-px"
          />
          <div className="space-y-6">
            {timeline.map(({ year, title, desc }) => (
              <div key={year} className="flex gap-6">
                {/* Year */}
                <div
                  style={{ color: "var(--gold)", minWidth: "3.5rem" }}
                  className="text-sm font-bold text-right pt-1 relative"
                >
                  {year}
                  <div
                    style={{
                      background: "var(--gold)",
                      right: "-4px",
                      top: "7px",
                    }}
                    className="absolute w-2 h-2 rounded-full"
                  />
                </div>
                {/* Content */}
                <div className="pl-4 pb-2">
                  <h3 style={{ color: "var(--foreground)" }} className="font-semibold text-sm mb-1">
                    {title}
                  </h3>
                  <p style={{ color: "#888" }} className="text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          borderLeft: "3px solid var(--gold)",
        }}
        className="rounded-lg p-6"
      >
        <h3 style={{ color: "var(--gold)" }} className="font-semibold text-sm mb-3">
          면책 고지
        </h3>
        <p style={{ color: "#888" }} className="text-xs leading-relaxed">
          본 블로그의 모든 콘텐츠는 개인의 의견과 경험을 바탕으로 한 정보 제공 목적으로만
          작성되었습니다. 투자 권유나 전문적인 금융 자문이 아니며, 투자 결과에 대한 책임은
          전적으로 투자자 본인에게 있습니다. 투자 전 충분한 조사와 전문가 상담을 권장합니다.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <p style={{ color: "#888" }} className="text-sm mb-4">
          투자 인사이트가 궁금하시다면 블로그를 방문해보세요.
        </p>
        <Link
          href="/blog"
          style={{ background: "var(--gold)", color: "#000" }}
          className="inline-block px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          블로그 보기
        </Link>
      </div>
    </div>
  );
}
