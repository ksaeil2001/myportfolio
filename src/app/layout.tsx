import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "MyPortfolio",
    template: "%s | MyPortfolio",
  },
  description:
    "프론트엔드 개발자 김세일의 프로젝트와 경험을 소개하는 포트폴리오 사이트입니다.",
  keywords: [
    "김세일",
    "포트폴리오",
    "프론트엔드",
    "개발자",
    "React",
    "Next.js",
  ],
  authors: [{ name: "김세일" }],
  openGraph: {
    title: "MyPortfolio",
    description:
      "프론트엔드 개발자 김세일의 프로젝트와 경험을 소개하는 포트폴리오 사이트입니다.",
    url: "https://example.com",
    siteName: "MyPortfolio",
    locale: "ko_KR",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
