import React from 'react';
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogSection } from "@/components/BlogSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  openGraph: {
    images: [
      {
        url: "/api/og?title=MyPortfolio",
        width: 1200,
        height: 630,
        alt: "MyPortfolio",
      },
    ],
  },
};

export default function Home() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-5xl flex-col gap-24 p-8 sm:p-20">
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <BlogSection />
    </main>
  );
}
