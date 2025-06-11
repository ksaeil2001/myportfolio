import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Contact",
        width: 1200,
        height: 630,
        alt: "Contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">연락처</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">아래 정보로 언제든지 연락해주세요.</p>
      <section className="mt-8 space-y-4" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          Contact Info
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          이메일: <a href="mailto:contact@saeil.dev" className="text-blue-600 dark:text-blue-400 hover:underline">contact@saeil.dev</a>
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          GitHub: <a href="https://github.com/saeil" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/saeil</a>
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          블로그: <a href="https://blog.saeil.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">blog.saeil.dev</a>
        </p>
        <a
          href="/resume.pdf"
          className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
          download
        >
          PDF 이력서 다운로드
        </a>
      </section>

      <ContactForm />
    </main>
  );
}
