import { LoginForm } from "@/components/LoginForm";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Login",
        width: 1200,
        height: 630,
        alt: "Login",
      },
    ],
  },
};

export default async function LoginPage() {
  const t = await getTranslations('login');
  return (
    <main id="main-content" className="mx-auto w-full max-w-md p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
      <LoginForm />
    </main>
  );
}
