import { seoLandings, seoVarietyPages } from '@/lib/seo-landings'

const SITE = 'https://supersalesagro.com'

function link(path: string, name: string, note: string) {
  const clean = note.replace(/\s+/g, ' ').trim()
  return `- [${name}](${SITE}${path}): ${clean}`
}

function generateLlmsTxt(): string {
  const fruit = seoLandings.filter((page) => page.slug !== 'azadpur-mandi')
  const yard = seoLandings.find((page) => page.slug === 'azadpur-mandi')
  const lines = seoVarietyPages.filter((page) => !page.slug.startsWith('export/'))
  const exportLines = seoVarietyPages.filter((page) => page.slug.startsWith('export/'))

  return `# Super Sales Agro

> Fruit commission agent at Azadpur mandi, Delhi, since 1982. Licence B-4881. Head office A-285, New Subzi Mandi, Azadpur, Delhi 110034. Auction site A-1022, New Subzi Mandi. Phones +91-9899262264 and +91-9711269346. Email supersalesagro@gmail.com.

Super Sales Agro buys and sells Himachal apples, kinnow, mango, nashpati, Nagpur orange, pomegranate, and guava. Quotes are per kilogram. Apples are also quoted per box. A blank rate on the site is not a price. The morning number is published only after that day's floor is confirmed. Vegetable prices are published by APMC Azadpur, not by this desk.

Buyers in other Indian states send a delivery city to the wholesale desk. The fruit is dispatched from Azadpur. It is not a local shop in that state. Export packing is for the United Kingdom, Europe, Australia, the Middle East, and South East Asia. Wholesale Indian mangoes for the United States and Canada are handled by Mangrove Harvest at https://mangroveharvest.com/.

Kinnaur apples are quoted only on days that lot is on the floor. Alphonso is packed only in the weeks that fruit is shipping. Allahabad guava has no standing page. There is no page for Kashmir apples, onion, or tomato.

## Desk

${link('/', 'Home', 'Azadpur mandi fruit wholesaler since 1982.')}
${link('/todays-mandi-rates', "Today's mandi rates", 'Morning fruit rates after the floor is confirmed. A blank cell is not a price.')}
${link('/wholesale', 'Wholesale, other states', 'Dispatch from Azadpur to a delivery city the buyer names.')}
${link('/hospitality', 'Hotels and retail', 'Standing fruit supply for kitchens and chains in Delhi.')}
${link('/export', 'Fruit export', 'Graded fruit for the UK, Europe, Australia, the Middle East, and South East Asia.')}
${link('/hi/aaj-ka-bhav', 'आज का भाव', 'Hindi rate page. This is real HTML, not a translation widget.')}
${yard ? link(`/${yard.slug}`, yard.eyebrow, yard.h1) : ''}

## Fruit

${fruit.map((page) => link(`/${page.slug}`, page.eyebrow, page.h1)).join('\n')}

## Lines

${lines.map((page) => link(`/${page.slug}`, page.eyebrow, page.h1)).join('\n')}

## Export lines

${exportLines.map((page) => link(`/${page.slug}`, page.eyebrow, page.h1)).join('\n')}
`
}

export function GET(): Response {
  return new Response(generateLlmsTxt(), {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}
