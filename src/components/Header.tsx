import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-700 dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4 sm:p-6">
        <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white">
          MyPortfolio
        </Link>
        <nav className="hidden gap-6 font-medium text-gray-700 dark:text-gray-300 md:flex">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer">
            <span className="sr-only">메뉴 열기</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <nav className="absolute right-0 mt-2 w-40 rounded-md border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-neutral-900">
            <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              <li>
                <Link href="/" className="block px-2 py-2 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-2 py-2 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block px-2 py-2 hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-2 py-2 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
