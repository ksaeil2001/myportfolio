import { TimelineItem } from "@/components/TimelineItem";
import { getTranslations } from "next-intl/server";
import type { TimelineEntry } from "@/data/types";
import timelineData from "../../../../content/about/timeline.json";

export const metadata = {
  title: "About",
  openGraph: {
    images: [
      {
        url: "/api/og?title=About",
        width: 1200,
        height: 630,
        alt: "About",
      },
    ],
  },
};

const timeline: TimelineEntry[] = timelineData;

export default async function AboutPage() {
  const t = await getTranslations('about');
  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl space-y-16 p-8 sm:p-20">
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="text-3xl font-bold text-gray-900 dark:text-white">
          {t('title')}
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {t('intro')}
        </p>
      </section>

      <section aria-labelledby="timeline-heading">
        <h2
          id="timeline-heading"
          className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {t('journey')}
        </h2>
        <ol className="relative border-l border-gray-300 dark:border-gray-700">
          {timeline.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="philosophy-heading">
        <h2
          id="philosophy-heading"
          className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {t('philosophyTitle')}
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('philosophyText')}
        </p>
      </section>

      <section aria-labelledby="skills-heading" className="pb-8">
        <h2
          id="skills-heading"
          className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {t('skills')}
        </h2>
        <ul className="flex flex-wrap gap-2" aria-label="주요 기술">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
          ].map((skill, i) => (
            <li
              key={skill}
              className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
