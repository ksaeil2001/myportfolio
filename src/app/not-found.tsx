import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">페이지를 찾을 수 없습니다.</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link
        href="/"
        className="mt-8 text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
