import type { MetadataRoute } from 'next'

const privatePaths = ['/affiliate', '/compare-against', '/api/']

const readers = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: privatePaths,
      },
      {
        userAgent: readers,
        allow: '/',
        disallow: privatePaths,
      },
    ],
    sitemap: 'https://supersalesagro.com/sitemap.xml',
    host: 'https://supersalesagro.com',
  }
}
