import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: "미국 퇴거 소송 변호사 비용 실제 공개 — 인보이스로 낱낱이 분석 | 김통찰의 미국 부동산",
  description:
    "미시간 세입자 퇴거 소송에서 실제 지불한 변호사 비용 $626을 인보이스 항목별로 공개합니다. 한국 명도소송 비용과 비교하면 얼마나 저렴한지, 언제 변호사를 써야 하는지 실전 경험을 바탕으로 설명합니다.",
  alternates: {
    canonical: "https://www.kiminvestment.com/blog/eviction-lawyer-cost",
  },
  openGraph: {
    title: "미국 퇴거 소송 변호사 비용 실제 공개 — 인보이스로 낱낱이 분석",
    description:
      "미시간 세입자 퇴거 소송에서 실제 지불한 변호사 비용 $626을 인보이스 항목별로 공개합니다.",
    url: "https://kiminvestment.com/blog/eviction-lawyer-cost",
    images: [
      "https://res.cloudinary.com/diglpn5kv/image/upload/Invoice_Final_fwl1vp",
    ],
    type: "article",
  },
};

export default function EvictionLawyerCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* ── 히어로 섹션 ── */}
      <section
        className="rounded-2xl overflow-hidden mb-14 relative flex items-end"
        style={{ minHeight: 360, background: "#0f172a" }}
      >
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(217,119,6,0.2)", color: "#f59e0b" }}
          >
            나의 투자 경험담
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            미국 퇴거 소송 변호사 비용 실제 공개
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-3"
            style={{ color: "#f59e0b" }}
          >
            인보이스로 낱낱이 분석
          </p>
          <p
            className="text-base mb-6"
            style={{ color: "#ccc", maxWidth: 560 }}
          >
            생각보다 훨씬 저렴했습니다. 실제 지불한 $626 전액을 항목별로
            공개하고, 한국 명도소송 비용과 비교해 드립니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ background: "#f59e0b", color: "#0d0d0d" }}
            >
              문의하기 →
            </Link>
            <Link
              href="/blog"
              className="inline-block font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
              style={{ border: "1px solid #f59e0b", color: "#f59e0b" }}
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
          style={{ background: "rgba(231,76,60,0.15)", color: "#e74c3c" }}
        >
          나의 투자 경험담
        </span>
        <span className="text-xs" style={{ color: "#666" }}>2026년 6월 15일</span>
        <span className="text-xs" style={{ color: "#666" }}>읽는 데 약 8분</span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {["퇴거", "변호사 비용", "Eviction", "미시간", "LT Case", "Writ of Eviction", "세입자"].map(
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
        title="미국 퇴거 소송 변호사 비용 실제 공개 — 인보이스로 낱낱이 분석"
        description="미시간 세입자 퇴거 소송에서 실제 지불한 변호사 비용 $626을 인보이스 항목별로 공개합니다."
        url="https://www.kiminvestment.com/blog/eviction-lawyer-cost"
      />

      {/* ── 도입 ── */}
      <section className="mb-14">
        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          미국에서 세입자를 퇴거시키려면 법적 절차가 필수입니다. 처음 변호사를 선임할
          때 얼마나 나올지 몰라 걱정이 많았습니다. 결론부터 말씀드리면, 변호사 선임비
          $435에 법원 실비 $191을 더해 총 $626이 들었습니다. 한국에서 명도소송을
          진행했다면 착수금만 300~500만 원(약 $2,200~$3,700)은 나왔을 비용입니다.
        </p>
      </section>

      {/* ── 실제 인보이스 공개 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            실제 인보이스 전체 공개
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          Josh 변호사로부터 받은 실제 인보이스입니다.
        </p>

        <div
          className="rounded-xl overflow-hidden mb-3"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src="https://res.cloudinary.com/diglpn5kv/image/upload/Invoice_Final_fwl1vp"
            alt="미국 퇴거 소송 변호사 인보이스 — $626 전체 항목"
            width={1200}
            height={900}
            className="w-full"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-xs text-center mb-6" style={{ color: "#666" }}>
          실제 Josh 변호사로부터 받은 인보이스 (2026년 1월~6월)
        </p>

        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#bbb",
          }}
        >
          💡 이번 퇴거 케이스는 2026년 1월 Filing을 시작으로 6월 집행관 집행까지 약
          5개월이 소요되었습니다. 중간에 Fair Housing Inquiry(공정주거법 조사)가
          끼어들면서 일정이 다소 늘어졌습니다.
        </div>
      </section>

      {/* ── 변호사 비용 항목별 해설 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            변호사 비용 $435 항목별 해설
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          퇴거 절차의 각 단계별로 발생한 비용입니다.
        </p>

        <div
          className="rounded-xl overflow-hidden mb-6"
          style={{ border: "1px solid var(--border)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "rgba(217,119,6,0.15)" }}>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#f59e0b" }}
                >
                  항목
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#f59e0b" }}
                >
                  금액
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#f59e0b" }}
                >
                  설명
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "#bbb" }}>
              {[
                [
                  "Eviction Filing",
                  "$150",
                  "소환장·소장 작성, 법원 제출 — 전체 비용의 핵심",
                ],
                [
                  "Service",
                  "$50",
                  "법원서류 수령 후 송달인(Process Server)에게 전달",
                ],
                [
                  "1st Hearing – LT Case",
                  "$60",
                  "1차 심리 참석. 세입자가 지원 요청 및 연기 신청",
                ],
                [
                  "Fair Housing Inquiry",
                  "$40",
                  "공정주거법 기관 조사 대응. 세입자가 차별 주장 제기",
                ],
                [
                  "2nd Hearing – LT Case",
                  "$60",
                  "2차 심리, 협상 진행, 합의 내용 법원 기록",
                ],
                [
                  "Writ of Eviction",
                  "$50",
                  "퇴거 영장 작성 및 61st District Court 제출",
                ],
                [
                  "Writ of Eviction – Court Officer",
                  "$25",
                  "집행관과 연락, 집행 조율",
                ],
              ].map(([item, amount, desc], i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: "1px solid var(--border)",
                    background: i % 2 === 0 ? "var(--surface)" : "transparent",
                  }}
                >
                  <td
                    className="px-4 py-3 font-medium whitespace-nowrap"
                    style={{ color: "#f59e0b" }}
                  >
                    {item}
                  </td>
                  <td
                    className="px-4 py-3 font-semibold whitespace-nowrap"
                    style={{ color: "var(--foreground)" }}
                  >
                    {amount}
                  </td>
                  <td className="px-4 py-3">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(220,38,38,0.07)",
            border: "1px solid rgba(220,38,38,0.3)",
          }}
        >
          <p className="font-bold text-sm mb-3" style={{ color: "#f87171" }}>
            ⚠ Fair Housing Inquiry에 주의하세요
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#bbb" }}>
            Fair Housing Inquiry($40) 항목에 주목해 주세요. 세입자가 퇴거 통보에
            불만을 품고 인종·국적 차별을 주장하며 공정주거법 기관에 신고할 수
            있습니다. 이 경우 변호사 없이 혼자 대응하면 매우 위험합니다. 이번
            케이스에서 변호사가 FHC(Fair Housing Center) 서신을 검토하고 적절한
            답변을 작성해 준 덕분에 문제없이 마무리되었습니다.
          </p>
        </div>
      </section>

      {/* ── 법원 실비 항목별 해설 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            법원 실비(Expenses) $191 항목별 해설
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          변호사 선임비 외에 실제 발생한 법원·집행 비용입니다.
        </p>

        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#94a3b8" }}
                >
                  날짜
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#94a3b8" }}
                >
                  항목
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#94a3b8" }}
                >
                  금액
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#94a3b8" }}
                >
                  설명
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "#bbb" }}>
              {[
                [
                  "2026-01-21",
                  "Filing Fee",
                  "$68",
                  "61st District Court 접수비 $55 + 우편비 $13",
                ],
                [
                  "2026-03-08",
                  "Service Fee",
                  "$47",
                  "송달 업체 Grizzel & Associates 송달비",
                ],
                ["2026-05-02", "Filing Fee (Writ)", "$15", "퇴거 영장 법원 접수비"],
                [
                  "2026-06-01",
                  "Court Officer Invoice",
                  "$61",
                  "집행관(Grizzel & Associates) 현장 집행비",
                ],
              ].map(([date, item, amount, desc], i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: "1px solid var(--border)",
                    background: i % 2 === 0 ? "var(--surface)" : "transparent",
                  }}
                >
                  <td
                    className="px-4 py-3 whitespace-nowrap"
                    style={{ color: "#666" }}
                  >
                    {date}
                  </td>
                  <td
                    className="px-4 py-3 font-medium"
                    style={{ color: "#aaa" }}
                  >
                    {item}
                  </td>
                  <td
                    className="px-4 py-3 font-semibold whitespace-nowrap"
                    style={{ color: "var(--foreground)" }}
                  >
                    {amount}
                  </td>
                  <td className="px-4 py-3">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 한국 vs 미국 비교 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            한국 명도소송 vs 미국 Eviction 비용 비교
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          구조적 차이가 비용 차이를 만들어 냅니다.
        </p>

        <div
          className="rounded-xl overflow-hidden mb-6"
          style={{ border: "1px solid var(--border)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "var(--gold)" }}
                >
                  구분
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#94a3b8" }}
                >
                  한국 명도소송
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold"
                  style={{ color: "#f59e0b" }}
                >
                  미국 Eviction (이번 케이스)
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "#bbb" }}>
              {[
                [
                  "착수금",
                  "300~500만 원 ($2,200~$3,700)",
                  "$435 (변호사 선임비 전체)",
                ],
                ["실비", "인지대·송달료 별도", "$191"],
                ["성공보수", "청구액의 10~20% 추가", "없음 (정액제)"],
                ["총 예상 비용", "$2,500~$4,500+", "$626"],
                ["소요 기간", "6개월~1년+", "약 5개월"],
              ].map(([label, korea, usa], i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: "1px solid var(--border)",
                    background: i % 2 === 0 ? "var(--surface)" : "transparent",
                  }}
                >
                  <td
                    className="px-4 py-3 font-medium"
                    style={{ color: "#aaa" }}
                  >
                    {label}
                  </td>
                  <td className="px-4 py-3">{korea}</td>
                  <td
                    className="px-4 py-3 font-semibold"
                    style={{ color: "#f59e0b" }}
                  >
                    {usa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base leading-relaxed" style={{ color: "#bbb" }}>
          미국이 저렴한 이유는 구조적 차이에 있습니다. 미국의 LT(Landlord-Tenant)
          법원은 임대인·세입자 분쟁만 전담하는 소액사건 법원으로, 절차가 표준화되어
          있어 변호사 비용도 낮게 유지됩니다. 반면 한국은 일반 민사소송 절차를
          따르기 때문에 복잡도와 비용이 높습니다.
        </p>
      </section>

      {/* ── 변호사를 써야 하는 경우 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            언제 변호사를 반드시 써야 할까요?
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          이런 상황이라면 DIY는 위험합니다.
        </p>

        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="space-y-3">
            {[
              "세입자가 Fair Housing(공정주거법) 위반을 주장할 때",
              "세입자가 법원에 반소(Counterclaim)를 제기했을 때",
              "체납 임대료가 $3,000 이상일 때 (회수 가능성 검토 필요)",
              "세입자가 변호사를 선임했을 때",
              "퇴거 후 부동산 손상이 심해 추가 소송이 예상될 때",
              "LLC 법인 명의 부동산인 경우 (법인은 변호사 선임 필수인 주 있음)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="text-sm font-bold mt-0.5 flex-shrink-0"
                  style={{ color: "var(--gold)" }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: "#bbb" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#bbb",
          }}
        >
          💡 단순 월세 체납으로 세입자가 법적 저항 없이 나가는 경우라면
          DIY(직접 법원 서류 작성)도 가능합니다. 미시간의 경우 법원 웹사이트에서
          양식을 무료로 내려받을 수 있습니다. 하지만 조금이라도 복잡한 상황이라면
          $435 투자로 전문가에게 맡기는 편이 훨씬 안전합니다.
        </div>
      </section>

      <ShareButtons
        title="미국 퇴거 소송 변호사 비용 실제 공개 — 인보이스로 낱낱이 분석"
        description="미시간 세입자 퇴거 소송에서 실제 지불한 변호사 비용 $626을 인보이스 항목별로 공개합니다."
        url="https://www.kiminvestment.com/blog/eviction-lawyer-cost"
      />

      {/* ── 관련 글 ── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <div
            style={{ background: "var(--gold)", width: 4 }}
            className="h-6 rounded-full flex-shrink-0"
          />
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            함께 읽으면 좋은 글
          </h2>
        </div>
        <p className="mb-8 text-sm" style={{ color: "#888", paddingLeft: 16 }}>
          퇴거 이후의 절차도 미리 준비해 두세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/blog/tenant-turnover-checklist",
              category: "나의 투자 경험담",
              title: "세입자 교체 완전 가이드 — 9단계 체크리스트",
              excerpt:
                "공실 최소화와 수익 극대화를 위한 세입자 교체 프로세스",
            },
            {
              href: "/blog/eviction-real-experience",
              category: "나의 투자 경험담",
              title: "미국 세입자 강제 퇴거(Eviction) — 직접 겪고 있는 실전 이야기",
              excerpt:
                "월세를 4개월째 내지 않는 세입자, 법원 심리까지 넘어간 Eviction 절차를 현재 진행 중입니다. 7-Day Notice부터 법원 Filing, Stay 신청까지 — 아직 끝나지 않은 실전 이야기를 있는 그대로 공유합니다.",
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
                  background: "rgba(231,76,60,0.15)",
                  color: "#e74c3c",
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
          퇴거 절차, 혼자 감당하지 않아도 됩니다
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "#888", maxWidth: 480 }}
        >
          8년간 10채 이상을 운영하면서 배운 교훈 중 하나는, 법적 문제는 전문가에게
          맡기는 것이 결국 더 저렴하다는 것입니다. $626으로 5개월간의 퇴거 절차를
          깔끔하게 마무리할 수 있었습니다.
          <br />
          <br />
          궁금한 점이 있으시면{" "}
          <Link
            href="/contact"
            style={{ color: "#f59e0b" }}
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
            style={{ background: "#f59e0b", color: "#0d0d0d" }}
          >
            문의하기 →
          </Link>
          <Link
            href="/blog"
            className="inline-block font-semibold px-7 py-3 rounded-xl text-sm transition-opacity hover:opacity-80"
            style={{ border: "1px solid #f59e0b", color: "#f59e0b" }}
          >
            블로그 전체보기
          </Link>
        </div>
      </section>

    </div>
  );
}
