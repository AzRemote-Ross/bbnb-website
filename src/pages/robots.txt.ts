import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const host = site?.toString().replace(/\/$/, '') || 'http://localhost:4321';
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${host}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};