import { getProjects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { JSX } from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string | string[] | undefined }> }): Promise<Metadata> {
  const { slug } = await params;
  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slugValue);
  const title = project ? project.title : "Project";
  return {
    title,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string | string[] | undefined }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slugValue);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <section className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={`${project.title} 대표 이미지`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
          className="object-cover"
          loading="lazy"
        />
      </section>

      <section className="mt-8" aria-labelledby="stack-heading">
        <h2
          id="stack-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          사용 기술
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="사용된 기술">
          {project.stack.map((tech, i) => (
            <li
              key={i}
              className="rounded bg-gray-100 px-2 py-0.5 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="features-heading">
        <h2
          id="features-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          주요 기능
        </h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="learnings-heading">
        <h2
          id="learnings-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          배운 점
        </h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {project.learnings.map((item, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {project.contentHtml && (
        <section className="prose dark:prose-invert mt-8" aria-labelledby="detail-heading">
          <h2 id="detail-heading" className="sr-only">
            상세 설명
          </h2>
          <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        </section>
      )}
    </main>
  );
}
