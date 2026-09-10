import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { baseUrl } from '@/lib/shared';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => {
    const base = baseUrl.pathname.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const fullPath = `${base}${cleanPath}`.replace(/\/+/g, '/');
    return new URL(fullPath, baseUrl.origin).toString();
  };

  const docPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: url(page.url),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page.url === '/docs' ? 0.9 : 0.8,
  }));

  return [
    {
      url: url('/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...docPages,
  ];
}
