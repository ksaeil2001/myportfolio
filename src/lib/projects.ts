import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import sanitizeHtml from 'sanitize-html';
import type { Project } from '@/data/types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects');

type Cache = { data: Project[]; timestamp: number } | null
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour
let cache: Cache = null

export async function getProjects(): Promise<Project[]> {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.data
  }

  const files = await fs.readdir(CONTENT_DIR)
  const projects: Project[] = []

  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const raw = await fs.readFile(path.join(CONTENT_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const rawHtml = String(await remark().use(html).process(content));
    const htmlContent = sanitizeHtml(rawHtml);

    projects.push({
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      stack: data.stack || [],
      slug: data.slug,
      year: Number(data.year),
      contribution: Number(data.contribution),
      period: data.period,
      links: data.links,
      features: data.features || [],
      learnings: data.learnings || [],
      team: data.team || [],
      reviews: data.reviews || [],
      contentHtml: htmlContent,
    });
  }

  const sorted = projects.sort((a, b) => b.year - a.year)
  cache = { data: sorted, timestamp: Date.now() }
  return sorted
}
