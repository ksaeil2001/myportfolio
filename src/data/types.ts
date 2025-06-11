export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  slug: string;
  year: number;
  contribution: number; // percentage of personal contribution
  period?: string; // e.g. "2023-01 ~ 2023-06"
  links?: {
    demo?: string;
    repo?: string;
  };
  features: string[];
  learnings: string[];
  team?: TeamMember[];
  reviews?: string[];
  contentHtml?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}
