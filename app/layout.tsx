import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://kiminvestment.com";
const HERO_IMAGE = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "한국인 미국 부동산 투자 가이드 — 김통찰의 미국 부동산",
    template: "%s | 김통찰의 미국 부동산",
  },
  description:
    "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
  keywords: ["미국 부동산", "미국 집 구매", "외국인 부동산", "모기지", "LLC", "FBAR", "미국 투자", "한국인 미국 부동산"],
  openGraph: {
    siteName: "김통찰의 미국 부동산",
    locale: "ko_KR",
    type: "website",
    title: "김통찰의 미국 부동산 | 한국인이 미국 집주인 되는 법",
    description:
      "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
    url: SITE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "김통찰의 미국 부동산 투자 가이드" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "김통찰의 미국 부동산 | 한국인이 미국 집주인 되는 법",
    description:
      "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
    images: [HERO_IMAGE],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      "naver-site-verification": [
        "d01dcb8d5eab2ca1c44a860d569cceb42f880ead",
        "43976d82928609d4fc49503010b8743bf6a84b61",
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
