import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/affiliate', '/compare-against', '/api/'],
    },
    sitemap: 'https://supersalesagro.com/sitemap.xml',
    host: 'https://supersalesagro.com',
  }
}
