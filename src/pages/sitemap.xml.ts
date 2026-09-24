import type { APIContext } from 'astro';
import { withBase } from '../utils/paths';

export function GET({ site }: APIContext) {
  const urls = ['', 'ru/'].map((path) => `<url><loc>${new URL(withBase(path), site)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
