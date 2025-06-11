import Link from "next/link";
import ResumeDownloadLink from "./ResumeDownloadLink";

export function HeroSection() {
  return (
    <section
      className="w-full max-w-3xl mx-auto text-center sm:text-left py-24"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        안녕하세요, 저는 김세일입니다
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        사람을 위한 UI를 고민하는 프론트엔드 개발자입니다. 좋은 인터페이스는 감동을 남깁니다.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <Link
          href="/projects"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="프로젝트 목록 보기"
        >
          프로젝트 보기
        </Link>
        <ResumeDownloadLink
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="이력서 다운로드"
        >
          이력서 다운로드
        </ResumeDownloadLink>
      </div>
    </section>
  );
}
