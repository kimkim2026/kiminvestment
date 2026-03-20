"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import SearchModal from "@/components/SearchModal";

const navItems = [
  { href: "/", label: "홈", submenu: null },
  {
    href: "__guide",
    label: "투자 가이드",
    submenu: [
      { href: "/blog?category=investment-guide&tag=기초", label: "부동산 투자 기초" },
      { href: "/blog/buying-process-a-to-z", label: "구매 프로세스 A to Z" },
      { href: "/blog/mortgage-guide-for-koreans", label: "융자/모기지" },
      { href: "/blog?category=investment-guide&tag=임대관리", label: "임대 관리" },
    ],
  },
  {
    href: "__tax",
    label: "세금/법률",
    submenu: [
      { href: "/blog/us-rental-income-tax-korean", label: "외국인 세금 신고" },
      { href: "/blog?category=tax-legal&tag=FBAR", label: "FBAR/FATCA" },
      { href: "/blog/us-llc-formation-guide", label: "LLC 법인 설립" },
      { href: "/blog?category=tax-legal&tag=비자", label: "비자/이민 연계" },
    ],
  },
  {
    href: "__experience",
    label: "나의 투자 경험담",
    submenu: [
      { href: "/blog?category=my-experience&tag=매물구매사례", label: "실제 매물 구매 사례" },
      { href: "/blog/korea-vs-usa-real-estate-investment", label: "수익률 실제 계산" },
      { href: "/blog?category=my-experience&tag=실수교훈", label: "실수 & 교훈" },
      { href: "/about", label: "운영자 소개" },
    ],
  },
  { href: "/contact", label: "문의하기", submenu: null },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseEnter = (href: string) => {
    clearCloseTimer();
    setOpenSubmenu(href);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 300);
  };

  const handleButtonClick = (href: string) => {
    clearCloseTimer();
    setOpenSubmenu((prev) => (prev === href ? null : href));
  };

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // 언마운트 시 타이머 정리
  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <header
      style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <svg viewBox="0 0 48 48" width="36" height="36">
            <polygon
              points="24,6 44,22 40,22 40,42 28,42 28,30 20,30 20,42 8,42 8,22 4,22"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{ color: "var(--gold)" }}
            className="text-base font-bold tracking-wide leading-tight"
          >
            김통찰의 미국 부동산
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label, submenu }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            if (!submenu) {
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    color: active ? "var(--gold)" : "var(--foreground)",
                  }}
                  className="px-3 py-2 text-sm font-medium rounded hover:text-[var(--gold)] transition-colors"
                >
                  {label}
                </Link>
              );
            }

            return (
              <div
                key={href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(href)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleButtonClick(href)}
                  style={{
                    color: active ? "var(--gold)" : "var(--foreground)",
                  }}
                  className="px-3 py-2 text-sm font-medium rounded hover:text-[var(--gold)] transition-colors flex items-center gap-1"
                >
                  {label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{ color: "currentColor" }}
                    className={`transition-transform ${openSubmenu === href ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {openSubmenu === href && (
                  /* pt-2: 보이지 않는 브리지 — 마우스가 버튼과 드롭다운 사이를 이동할 때 끊기지 않도록 */
                  <div
                    className="absolute left-0 pt-2"
                    style={{ top: "100%" }}
                  >
                    <div
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                      }}
                      className="w-44 rounded-lg shadow-xl shadow-black/40 py-1"
                    >
                      {submenu.map(({ href: subHref, label: subLabel }) => (
                        <Link
                          key={subHref}
                          href={subHref}
                          onClick={() => setOpenSubmenu(null)}
                          style={{ color: pathname === subHref ? "var(--gold)" : "#bbb" }}
                          className="block px-4 py-2 text-xs hover:text-[var(--gold)] hover:bg-[var(--surface)] transition-colors"
                        >
                          {subLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Search Button */}
        <button
          onClick={() => setSearchOpen(true)}
          aria-label="검색"
          style={{ color: "#888" }}
          className="p-2 hover:text-[#C9A84C] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <div className="w-5 space-y-1">
            <span
              style={{ background: "var(--gold)" }}
              className={`block h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              style={{ background: "var(--gold)" }}
              className={`block h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              style={{ background: "var(--gold)" }}
              className={`block h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border)" }}
          className="md:hidden px-4 pb-4"
        >
          {navItems.map(({ href, label, submenu }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            const mobileOpen = mobileOpenSubmenu === href;

            if (!submenu) {
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: active ? "var(--gold)" : "var(--foreground)" }}
                  className="block py-3 text-base font-medium border-b border-[var(--border)]"
                >
                  {label}
                </Link>
              );
            }

            return (
              <div key={href} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setMobileOpenSubmenu(mobileOpen ? null : href)}
                  style={{ color: active ? "var(--gold)" : "var(--foreground)" }}
                  className="w-full flex items-center justify-between py-3 text-base font-medium"
                >
                  {label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{ color: "currentColor" }}
                    className={`transition-transform ${mobileOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileOpen && (
                  <div className="pb-2 pl-3 space-y-1">
                    {submenu.map(({ href: subHref, label: subLabel }) => (
                      <Link
                        key={subHref}
                        href={subHref}
                        onClick={() => setMenuOpen(false)}
                        style={{ color: pathname === subHref ? "var(--gold)" : "#888" }}
                        className="block py-1.5 text-xs"
                      >
                        › {subLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
