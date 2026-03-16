"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/blog", label: "블로그" },
  { href: "/about", label: "소개" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            style={{ background: "var(--gold)" }}
            className="w-8 h-8 rounded flex items-center justify-center font-bold text-black text-sm"
          >
            K
          </div>
          <span
            style={{ color: "var(--gold)" }}
            className="text-lg font-bold tracking-wide"
          >
            Kim Investment
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                style={{
                  color: active ? "var(--gold)" : "var(--foreground)",
                  borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                }}
                className="text-sm font-medium pb-1 transition-colors hover:opacity-80"
              >
                {label}
              </Link>
            );
          })}
        </nav>

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
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ color: active ? "var(--gold)" : "var(--foreground)" }}
                className="block py-3 text-sm font-medium border-b border-[var(--border)] last:border-0"
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
