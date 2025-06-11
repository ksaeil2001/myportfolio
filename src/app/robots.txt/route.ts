import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const baseUrl = req.nextUrl.origin;
  const body = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
