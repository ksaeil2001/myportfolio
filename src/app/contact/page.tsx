export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">연락처</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">아래 정보로 언제든지 연락해주세요.</p>
      <section className="mt-8 space-y-4" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          Contact Info
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          이메일: <a href="mailto:hello@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">hello@example.com</a>
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          GitHub: <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/username</a>
        </p>
      </section>
    </main>
  );
}
