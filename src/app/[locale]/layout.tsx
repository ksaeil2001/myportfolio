import type { Metadata } from "next";
// 시스템 기본 글꼴 사용을 위해 폰트 로딩 제거
import "../globals.css";
import { Header } from "@/components/Header";
import Providers from "@/components/Providers";
import Analytics from "@/components/Analytics";
import { getDictionary } from "@/lib/i18n";
import { NextIntlClientProvider } from "next-intl";

// 기본 시스템 글꼴을 사용하므로 폰트 설정이 필요하지 않음

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

export const dynamicParams = false;

export function generateStaticParams() {
  return ['ko', 'en'].map((l) => ({ locale: l }));
}

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
      <body className="antialiased">
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
