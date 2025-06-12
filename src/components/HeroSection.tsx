import Link from "next/link";
import ResumeDownloadLink from "./ResumeDownloadLink";
import { useTranslations, useLocale } from "next-intl";

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  return (
    <section
      className="w-full max-w-3xl mx-auto text-center sm:text-left py-24"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        {t('greeting')}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        {t('intro')}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <Link
          href={{ pathname: '/projects' }}
          locale={locale}
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="프로젝트 목록 보기"
        >
          {t('projects')}
        </Link>
        <ResumeDownloadLink
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="이력서 다운로드"
        >
          {t('download')}
        </ResumeDownloadLink>
      </div>
    </section>
  );
}
