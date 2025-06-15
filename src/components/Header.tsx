"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function Header() {
  const t = useTranslations('menu');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const switchLocale = (next: string) => {
    const segments = pathname.split('/');
    segments[1] = next;
    const query = search.toString();
    router.push(segments.join('/') + (query ? '?' + query : ''));
  };
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-700 dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4 sm:p-6">
        <Link href={{ pathname: '/', query: {} }} locale={locale} className="text-lg font-bold text-gray-900 dark:text-white">
          MyPortfolio
        </Link>
        <nav className="hidden gap-6 font-medium text-gray-700 dark:text-gray-300 md:flex">
          <Link href={{ pathname: '/' }} locale={locale} className="hover:underline">
            {t('home')}
          </Link>
          <Link href={{ pathname: '/about' }} locale={locale} className="hover:underline">
            {t('about')}
          </Link>
          <Link href={{ pathname: '/projects' }} locale={locale} className="hover:underline">
            {t('projects')}
          </Link>
          <Link href={{ pathname: '/contact' }} locale={locale} className="hover:underline">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <select
            aria-label={t('language')}
            value={locale}
            onChange={(e) => switchLocale(e.target.value)}
            className="rounded border p-1 text-sm"
          >
            <option value="ko">{t('korean')}</option>
            <option value="en">{t('english')}</option>
          </select>
          <ThemeToggle />
        </div>
        <details className="relative md:hidden">
          <summary tabIndex={0} className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer">
            <span className="sr-only">메뉴 열기</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <nav className="absolute right-0 mt-2 w-40 rounded-md border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-neutral-900">
            <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              <li>
                <Link href={{ pathname: '/' }} locale={locale} className="block px-2 py-2 hover:underline">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about' }} locale={locale} className="block px-2 py-2 hover:underline">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/projects' }} locale={locale} className="block px-2 py-2 hover:underline">
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/contact' }} locale={locale} className="block px-2 py-2 hover:underline">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
