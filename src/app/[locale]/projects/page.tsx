import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilterBar } from "@/components/ProjectFilterBar";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Projects",
        width: 1200,
        height: 630,
        alt: "Projects",
      },
    ],
  },
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const projects = await getProjects();
  const stackParam = Array.isArray(params.stack) ? params.stack[0] : params.stack;
  const yearParam = Array.isArray(params.year) ? params.year[0] : params.year;
  const contributionParam = Array.isArray(params.contribution)
    ? params.contribution[0]
    : params.contribution;
  const sortParam = Array.isArray(params.sort) ? params.sort[0] : params.sort;

  let projectList = [...projects];

  if (stackParam) {
    const stacks = stackParam.split(",").filter(Boolean);
    projectList = projectList.filter((p) =>
      stacks.every((s) => p.stack.includes(s)),
    );
  }

  if (yearParam) {
    const yearNum = Number(yearParam);
    if (!Number.isNaN(yearNum)) {
      projectList = projectList.filter((p) => p.year === yearNum);
    }
  }

  if (contributionParam) {
    const min = Number(contributionParam);
    if (!Number.isNaN(min)) {
      projectList = projectList.filter((p) => p.contribution >= min);
    }
  }

  switch (sortParam) {
    case "latest":
      projectList.sort((a, b) => b.year - a.year);
      break;
    case "oldest":
      projectList.sort((a, b) => a.year - b.year);
      break;
    case "name":
      projectList.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "contribution":
      projectList.sort((a, b) => b.contribution - a.contribution);
      break;
    case "usage":
      const freq: Record<string, number> = {};
      projects.flatMap(p => p.stack).forEach(s => {
        freq[s] = (freq[s] ?? 0) + 1;
      });
      projectList.sort((a, b) => {
        const aScore = a.stack.reduce((sum, s) => sum + (freq[s] ?? 0), 0);
        const bScore = b.stack.reduce((sum, s) => sum + (freq[s] ?? 0), 0);
        return bScore - aScore;
      });
      break;
    default:
      break;
  }

  const stackOptions = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();
  const yearOptions = Array.from(new Set(projects.map((p) => p.year))).sort(
    (a, b) => b - a,
  );

  const t = await getTranslations('projects');

  return (
    <main id="main-content" className="mx-auto w-full max-w-5xl p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {t('heading')}
      </h1>
      <ProjectFilterBar stacks={stackOptions} years={yearOptions} />
      <div
        role="list"
        className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
