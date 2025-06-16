import React from 'react';
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations('notFound');
  return (
    <main id="main-content" className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{t('desc')}</p>
      <Link
        href="/"
        className="mt-8 text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {t('home')}
      </Link>
    </main>
  );
}
