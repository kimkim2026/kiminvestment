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

export const metadata: Metadata = {
  title: {
    default: "김통찰의 미국 부동산 | 한국인이 미국 집주인 되는 법",
    template: "%s | 김통찰의 미국 부동산",
  },
  description:
    "한국인이 미국 부동산 투자를 시작하는 방법. 구매 프로세스, 융자/모기지, 세금 신고, LLC 설립까지 실전 경험을 공유합니다.",
  keywords: ["미국 부동산", "미국 집 구매", "외국인 부동산", "모기지", "LLC", "FBAR", "미국 투자"],
  openGraph: {
    siteName: "김통찰의 미국 부동산",
    locale: "ko_KR",
    type: "website",
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
