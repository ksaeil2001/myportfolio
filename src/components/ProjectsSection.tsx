import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading" className="w-full mt-24">
      <h2
        id="projects-heading"
        className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
      >
        프로젝트 모음
      </h2>
      <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
