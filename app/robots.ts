import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/shared';

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL(
    (baseUrl.pathname.replace(/\/$/, '') + '/sitemap.xml').replace(/\/+/g, '/'),
    baseUrl.origin
  ).toString();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: sitemapUrl,
  };
}
