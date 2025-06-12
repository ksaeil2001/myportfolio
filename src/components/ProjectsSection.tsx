import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/lib/projects";
import { getTranslations } from "next-intl/server";

export async function ProjectsSection() {
  const t = await getTranslations('projects');
  const projects = await getProjects();
  return (
    <section aria-labelledby="projects-heading" className="w-full mt-24">
      <h2
        id="projects-heading"
        className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
      >
        {t('heading')}
      </h2>
      <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
