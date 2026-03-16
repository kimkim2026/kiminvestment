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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                style={{ background: "var(--gold)" }}
                className="w-7 h-7 rounded flex items-center justify-center font-bold text-black text-xs"
              >
                K
              </div>
              <span style={{ color: "var(--gold)" }} className="font-bold">
                Kim Investment
              </span>
            </div>
            <p style={{ color: "#888" }} className="text-sm leading-relaxed">
              금융 시장을 분석하고 투자 인사이트를 공유하는 블로그입니다.
              장기적 관점의 가치 투자를 지향합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: "var(--gold)" }} className="font-semibold mb-3 text-sm">
              바로가기
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "홈" },
                { href: "/blog", label: "블로그" },
                { href: "/about", label: "소개" },
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

          {/* Categories */}
          <div>
            <h4 style={{ color: "var(--gold)" }} className="font-semibold mb-3 text-sm">
              카테고리
            </h4>
            <ul className="space-y-2">
              {["주식", "ETF", "투자전략", "부동산", "암호화폐"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/blog?category=${cat}`}
                    style={{ color: "#888" }}
                    className="text-sm hover:opacity-80 transition-opacity"
                  >
                    {cat}
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
            © {new Date().getFullYear()} Kim Investment. All rights reserved.
          </p>
          <p className="mt-1">
            본 블로그의 모든 내용은 정보 제공 목적이며 투자 권유가 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
