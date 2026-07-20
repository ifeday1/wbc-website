import type { MetadataRoute } from 'next';

const baseUrl = 'https://winnersbaptistchurch.org';

const routes = [
  '',
  '/about-the-church',
  '/contact',
  '/diaconates',
  '/events',
  '/giving',
  '/ministers',
  '/ministries',
  '/winners-fc',
  '/winnersbc-career',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
