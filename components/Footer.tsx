import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
      className="mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 48 48" width="30" height="30">
                <polygon
                  points="24,6 44,22 40,22 40,42 28,42 28,30 20,30 20,42 8,42 8,22 4,22"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ color: "var(--gold)" }} className="font-bold text-sm">
                김통찰의 미국 부동산
              </span>
            </div>
            <p style={{ color: "#888" }} className="text-sm leading-relaxed">
              한국인이 미국 집주인 되는 법.<br />
              미국 부동산 투자의 모든 것을 실전 경험으로 공유합니다.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h4 style={{ color: "var(--gold)" }} className="font-semibold mb-3 text-sm">
              주요 주제
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/blog/us-real-estate-investment-types", label: "부동산 투자 기초" },
                { href: "/blog/mortgage-guide-for-koreans", label: "융자/모기지" },
                { href: "/blog/us-llc-formation-guide", label: "LLC 법인 설립" },
                { href: "/blog/us-rental-income-tax-korean", label: "외국인 세금 신고" },
                { href: "/blog/duplex-east-coast-purchase-review", label: "실제 매물 구매 사례" },
                { href: "/blog/korean-landlord-us-tenant-management-challenges", label: "임대 관리" },
                { href: "/blog/building-us-credit-score", label: "미국 신용점수 만들기" },
                { href: "/blog/buying-process-a-to-z", label: "구매 프로세스 A to Z" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "#888" }}
                    className="text-sm hover:opacity-80 transition-opacity"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid var(--border)", color: "#555" }}
          className="mt-8 pt-6 text-center text-xs"
        >
          <p>
            © {new Date().getFullYear()} 김통찰의 미국 부동산. All rights reserved.
          </p>
          <p className="mt-1">
            본 사이트의 모든 내용은 정보 제공 목적이며 투자 권유가 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
