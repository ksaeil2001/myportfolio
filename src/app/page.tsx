import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-5xl flex-col gap-24 p-8 sm:p-20">
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
    </main>
  );
}
