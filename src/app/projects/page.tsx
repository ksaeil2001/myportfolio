import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { filter, sort } = await searchParams;
  let projectList = [...projects];

  // Placeholder for future filtering
  if (filter) {
    projectList = projectList.filter(() => true);
  }

  // Placeholder for future sorting
  if (sort) {
    projectList = projectList.slice();
  }

  return (
    <main className="mx-auto w-full max-w-5xl p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        프로젝트 목록
      </h1>
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
