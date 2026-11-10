import { seoLandings, seoVarietyPages } from '@/lib/seo-landings'

const URL = 'https://supersalesagro.com'

const staticPaths = ['', '/todays-mandi-rates', '/wholesale', '/hospitality', '/export', '/hi/aaj-ka-bhav']

function generateSiteMap(): string {
  const paths = [
    ...staticPaths,
    ...seoLandings.map((page) => `/${page.slug}`),
    ...seoVarietyPages.map((page) => `/${page.slug}`),
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${URL}${path}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`
}

export async function GET(): Promise<Response> {
  return new Response(generateSiteMap(), {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
      'Content-Type': 'application/xml',
    },
  })
}
