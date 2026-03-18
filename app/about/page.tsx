import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "운영자 소개",
  description: "김통찰의 미국 부동산 운영자 소개 페이지입니다.",
};

const topics = [
  "미국 부동산 구매 프로세스 (처음부터 끝까지)",
  "외국인 모기지 및 융자 전략",
  "세입자 스크리닝과 임대 관리 실전",
  "FBAR, FIRPTA, 세금 신고 등 세금/법률 이슈",
  "한국과 미국 부동산 투자 비교",
  "리노베이션, 유지보수 등 실제 운용 경험",
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
          alt="도시 빌딩 부동산"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">운영자 소개</h1>
          <p style={{ color: "#C9A84C" }} className="text-sm font-medium">
            김통찰
          </p>
        </div>
      </div>

      {/* Intro */}
      <section
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
        className="rounded-2xl p-8 mb-10"
      >
        <p style={{ color: "var(--foreground)" }} className="text-base leading-relaxed mb-5">
          안녕하세요, <span style={{ color: "#C9A84C" }} className="font-semibold">김통찰</span>입니다.
        </p>
        <p style={{ color: "#bbb" }} className="text-base leading-relaxed mb-5">
          한국과 미국 양쪽에서 부동산 투자를 직접 해오고 있습니다.
          한국에서 먼저 부동산 투자를 시작했고, 이후 미국으로 투자 범위를 넓혀
          현재까지 미국 부동산을 직접 운용하고 있습니다.
        </p>
      </section>

      {/* Why this site */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ background: "#C9A84C", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 style={{ color: "var(--foreground)" }} className="text-xl font-bold">
            이 사이트를 만든 이유
          </h2>
        </div>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          className="rounded-xl p-7 space-y-4"
        >
          <p style={{ color: "#bbb" }} className="text-base leading-relaxed">
            미국 부동산에 관심을 갖기 시작했을 때, 한국어로 된 실용적인 정보가 생각보다 너무 없었습니다.
            있어도 이론적이거나, 실제와 다른 내용이 많았습니다. 직접 겪어보지 않으면 알 수 없는 것들이
            너무 많더라고요.
          </p>
          <p style={{ color: "#bbb" }} className="text-base leading-relaxed">
            그래서 직접 경험한 것들을 기록하기 시작했습니다. 매물 구입 과정, 세입자 관리, 리노베이션,
            세금 신고까지 실제로 겪은 내용을 있는 그대로 공유하고 싶었습니다.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ background: "#C9A84C", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 style={{ color: "var(--foreground)" }} className="text-xl font-bold">
            이 사이트에서 다루는 내용
          </h2>
        </div>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          className="rounded-xl p-7"
        >
          <ul className="space-y-3">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <span style={{ color: "#C9A84C" }} className="mt-0.5 flex-shrink-0 text-lg leading-none">
                  ·
                </span>
                <span style={{ color: "#bbb" }} className="text-base leading-relaxed">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stance */}
      <section className="mb-10">
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          className="rounded-xl p-7 space-y-4"
        >
          <p style={{ color: "#bbb" }} className="text-base leading-relaxed">
            전문 투자 기관이 아닙니다. 저도 여전히 배우면서 투자하고 있습니다.
            다만 제가 직접 경험하고 공부한 내용이기 때문에, 적어도 현실과 동떨어진 이야기는 하지 않으려고 합니다.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          borderLeft: "3px solid #C9A84C",
        }}
        className="rounded-lg p-6 mb-12"
      >
        <h3 style={{ color: "#C9A84C" }} className="font-semibold text-sm mb-3">
          면책 고지
        </h3>
        <p style={{ color: "#888" }} className="text-sm leading-relaxed">
          이 사이트의 모든 내용은 정보 제공 목적이며 투자 권유가 아닙니다.
          투자 결정은 반드시 본인의 판단과 책임 하에 하시기 바랍니다.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p style={{ color: "#888" }} className="text-sm mb-5">
          궁금한 점이 있으시거나, 경험을 나누고 싶으신 분들은 편하게 연락해 주세요.
        </p>
        <Link
          href="/contact"
          style={{ background: "#C9A84C", color: "#000" }}
          className="inline-block px-10 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
        >
          문의하기
        </Link>
      </div>
    </div>
  );
}
