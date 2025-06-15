import { ContactForm } from "@/components/ContactForm";
import ResumeDownloadLink from "@/components/ResumeDownloadLink";
import { getTranslations } from "next-intl/server";
import { getContactEmail } from "@/lib/env";

interface PageProps {
  params: Promise<{ locale: string }>;
}

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

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const email = getContactEmail() ?? 'contact@example.com';
  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{t('desc')}</p>
      <section className="mt-8 space-y-4" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          Contact Info
        </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('email')}: <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{email}</a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('github')}: <a href="https://github.com/saeil" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/saeil</a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('blog')}: <a href="https://blog.saeil.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">blog.saeil.dev</a>
          </p>
          <ResumeDownloadLink
            className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t('download')}
          </ResumeDownloadLink>
      </section>

      <ContactForm />
    </main>
  );
}
