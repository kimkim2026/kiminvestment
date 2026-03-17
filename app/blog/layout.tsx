import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전체 글",
  description:
    "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
  openGraph: {
    title: "전체 글 | 김통찰의 미국 부동산",
    description:
      "미국 부동산 투자를 꿈꾸는 한국인을 위한 실전 가이드. 구매 프로세스, 모기지, 세금 신고까지 직접 경험한 내용을 한국어로 알려드립니다.",
    url: "https://kiminvestment.com/blog",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
        width: 1200,
        height: 630,
        alt: "미국 부동산 투자 가이드 글 목록",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
