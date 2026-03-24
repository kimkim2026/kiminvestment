import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FBAR / FATCA 완벽 가이드 | 해외 계좌 신고",
  description:
    "미국에 살면서 한국 계좌를 갖고 계신가요? FBAR와 FATCA 신고 대상, 마감일, 절차, 페널티까지 쉽게 정리했습니다.",
};

export default function FbarFatcaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 섹션 1: 히어로 ── */}
      <section className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{
          minHeight: 340,
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.62)" }} />
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(201,168,76,0.18)", color: "var(--gold)" }}
          >
            해외 계좌 신고 가이드
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            FBAR / FATCA
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-3" style={{ color: "var(--gold-light)" }}>
            내가 신고 대상일까요?
          </p>
          <p className="text-base mb-6" style={{ color: "#ccc", maxWidth: 560 }}>
            미국에 살면서 한국 계좌를 갖고 계신가요?<br />
            모르고 지나쳤다가 큰 벌금을 받는 경우가 많습니다.
          </p>
          <Link
            href="/contact"
            className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--gold)", color: "#0d0d0d" }}
          >
            무료로 확인하기 →
          </Link>
        </div>
      </section>

      {/* ── 섹션 2: FBAR vs FATCA 개요 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            FBAR와 FATCA, 뭐가 다른가요?
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          둘 다 &quot;해외 계좌를 신고하라&quot;는 제도지만, 신고하는 곳과 기준이 다릅니다.
        </p>

        {/* 카드 2개 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* FBAR 카드 */}
          <div
            className="rounded-2xl p-7"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xl font-bold px-3 py-1 rounded-lg"
                style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
              >
                FBAR
              </span>
              <span className="text-sm" style={{ color: "#888" }}>FinCEN Form 114</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              해외 금융계좌의 잔액이 연중 합산 <span style={{ color: "var(--gold)" }} className="font-semibold">$10,000을 넘은 적</span>이 있다면
              FinCEN(미 재무부 산하)에 신고해야 합니다.
              세금 신고와는 별도로 제출합니다.
            </p>
          </div>

          {/* FATCA 카드 */}
          <div
            className="rounded-2xl p-7"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xl font-bold px-3 py-1 rounded-lg"
                style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
              >
                FATCA
              </span>
              <span className="text-sm" style={{ color: "#888" }}>IRS Form 8938</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
              더 높은 기준(<span style={{ color: "var(--gold)" }} className="font-semibold">미국 거주자 기준 $50,000~</span>)이 적용되고,
              IRS에 세금 신고서와 함께 제출합니다.
              금융기관도 의무 보고를 합니다.
            </p>
          </div>
        </div>

        {/* 비교 테이블 */}
        <div
          className="rounded-2xl overflow-hidden mb-5"
          style={{ border: "1px solid var(--border)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--gold)", width: "25%" }}>구분</th>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#ccc" }}>FBAR</th>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#ccc" }}>FATCA (Form 8938)</th>
              </tr>
            </thead>
            <tbody style={{ color: "#bbb" }}>
              {[
                ["신고처", "FinCEN (BSA E-Filing)", "IRS (세금 신고서 첨부)"],
                ["기준 금액", "연중 합산 $10,000 초과", "$50,000 ~ $200,000+"],
                ["마감일", "4월 15일 (자동연장 10월)", "세금 신고 마감일과 동일"],
                ["대상 계좌", "은행·증권·연금·보험 등", "금융자산 전반"],
              ].map(([label, fbar, fatca], i) => (
                <tr
                  key={i}
                  style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "var(--surface)" : "transparent" }}
                >
                  <td className="px-5 py-3 font-medium" style={{ color: "#aaa" }}>{label}</td>
                  <td className="px-5 py-3">{fbar}</td>
                  <td className="px-5 py-3">{fatca}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
                <td className="px-5 py-3 font-medium" style={{ color: "#aaa" }}>둘 다?</td>
                <td className="px-5 py-3" colSpan={2} style={{ color: "#bbb" }}>
                  기준 충족 시 두 가지 모두 신고 필요
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#bbb" }}
        >
          📌 FBAR는 세금 신고와 별도로 제출하는 것이 가장 많이 헷갈리는 부분입니다.
        </div>
      </section>

      {/* ── 섹션 3: 신고 마감일 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            언제까지 신고해야 하나요?
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          놓치면 자동으로 벌금이 부과되는 구조입니다. 캘린더에 꼭 표시해 두세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
          {[
            {
              date: "4월 15일",
              label: "FBAR 원래 마감일",
              note: "신청 없이도 자동으로 10월까지 연장됩니다",
            },
            {
              date: "10월 15일",
              label: "FBAR 최종 연장 마감일",
              note: "이 날짜를 넘기면 미신고 처리됩니다",
            },
          ].map(({ date, label, note }) => (
            <div
              key={date}
              className="rounded-2xl p-7 flex flex-col gap-2"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span className="text-3xl font-bold" style={{ color: "var(--gold)" }}>{date}</span>
              <span className="font-semibold text-base" style={{ color: "var(--foreground)" }}>{label}</span>
              <span className="text-sm" style={{ color: "#888" }}>{note}</span>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 space-y-3"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          {[
            "FATCA (Form 8938)는 세금 신고서(1040)와 함께 제출합니다.",
            "연장 신청(Form 4868)을 하면 FATCA 마감도 함께 10월로 연장됩니다.",
            "계좌가 없어진 해도 그 해 최고 잔액이 기준을 넘었다면 신고 의무가 있습니다.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-sm font-bold mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }}>✓</span>
              <span className="text-sm" style={{ color: "#bbb" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 섹션 4: 신고 절차 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            어떻게 신고하나요?
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          처음이라도 단계별로 따라가면 어렵지 않습니다.
        </p>

        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "내 계좌 목록 정리하기",
              desc: "한국 은행계좌, 증권계좌, 연금(국민연금 제외), 보험 해지환급금 등을 모두 리스트업합니다. 공동계좌나 서명권한만 있는 계좌도 포함됩니다.",
            },
            {
              step: "02",
              title: "연중 최고 잔액 확인",
              desc: "모든 계좌의 연중 최고 잔액 합산이 $10,000을 넘는지 확인합니다. 잔액 환산 시 해당 연도 12월 31일 기준 공식 환율을 사용합니다.",
            },
            {
              step: "03",
              title: "FBAR 온라인 제출 (FinCEN)",
              desc: "BSA E-Filing 시스템(bsaefiling.fincen.treas.gov)에서 Form 114를 직접 작성·제출합니다. 무료이며, 회계사에게 위임도 가능합니다.",
            },
            {
              step: "04",
              title: "FATCA 해당 시 Form 8938 첨부",
              desc: "기준 금액 초과 시 세금 신고서(1040)에 Form 8938을 첨부합니다. 회계사와 함께 준비하면 실수를 줄일 수 있습니다.",
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="rounded-2xl p-6 flex gap-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-2xl font-bold flex-shrink-0 w-10 text-center"
                style={{ color: "var(--gold)" }}
              >
                {step}
              </span>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 섹션 5: 페널티 경고 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            신고 안 하면 얼마나 무겁나요?
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          FBAR 미신고 페널티는 생각보다 훨씬 가혹합니다. 모르고 지나쳤다고 봐주지 않습니다.
        </p>

        <div
          className="rounded-2xl p-7 mb-5"
          style={{ background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.3)" }}
        >
          <p className="font-bold text-base mb-5" style={{ color: "#f87171" }}>⚠ FBAR 미신고 페널티</p>
          <div className="space-y-3">
            {[
              { label: "비고의적 미신고 (Non-willful)", value: "건당 최대 $10,000" },
              { label: "고의적 미신고 (Willful)", value: "건당 $100,000 또는 잔액의 50%" },
              { label: "형사 처벌", value: "최대 징역 5~10년" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start justify-between gap-4 flex-wrap">
                <span className="text-sm" style={{ color: "#bbb" }}>{label}</span>
                <span className="text-sm font-semibold" style={{ color: "#f87171" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm leading-relaxed"
          style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#bbb" }}
        >
          💡 <span style={{ color: "var(--gold)" }} className="font-semibold">Streamlined Filing</span> 프로그램을 이용하면 과거 미신고 기간을 자진 정정하고
          페널티를 대폭 줄일 수 있습니다. 이미 늦었다고 포기하지 마세요.
        </div>
      </section>

      {/* ── 섹션 6: FAQ ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div style={{ background: "var(--gold)", width: 4 }} className="h-6 rounded-full flex-shrink-0" />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            자주 묻는 질문
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          많은 분들이 같은 고민을 하십니다.
        </p>
        <FaqAccordion />
      </section>

      {/* ── 섹션 7: 하단 CTA ── */}
      <section
        className="rounded-2xl p-10 text-center"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          내가 신고 대상인지 확인하세요
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "#888", maxWidth: 420 }}>
          복잡해 보여도 전문가와 함께라면 훨씬 간단합니다.<br />
          지금 바로 무료 상담으로 확인해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--gold)", color: "#0d0d0d" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/contact"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            신고 체크리스트 받기
          </Link>
        </div>
      </section>

    </div>
  );
}
