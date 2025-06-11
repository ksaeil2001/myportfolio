import { getProjects } from '@/lib/projects';
import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const baseUrl = req.nextUrl.origin;
  const projects = await getProjects();

  const urls = [
    '',
    '/about',
    '/projects',
    '/contact',
    ...projects.map((p) => `/projects/${p.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `<url><loc>${baseUrl}${url}</loc></url>`) 
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
