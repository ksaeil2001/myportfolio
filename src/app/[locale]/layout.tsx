import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import Providers from "@/components/Providers";
import Analytics from "@/components/Analytics";
import { getDictionary } from "@/lib/i18n";
import { NextIntlClientProvider } from "next-intl";

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
    images: [
      {
        url: "/api/og?title=MyPortfolio",
        width: 1200,
        height: 630,
        alt: "MyPortfolio",
      },
    ],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getDictionary(params.locale);
  return (
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <Providers>
            <Analytics />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only absolute top-0 left-0 m-2 rounded bg-white p-2 text-black z-50"
            >
              본문 바로가기
            </a>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
