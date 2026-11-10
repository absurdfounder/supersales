import Image from 'next/image'
import Link from 'next/link'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import { seoLandings, type SeoLanding } from '@/lib/seo-landings'
import { EXPORT_WHATSAPP } from '@/lib/export-content'
import { WHATSAPP_CHANNEL_URL } from '@/lib/site-links'

const SITE = 'https://supersalesagro.com'

export default function SeoLandingView({ page }: { page: SeoLanding }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const pageUrl = `${SITE}/${page.slug}`
  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Super Sales Agro', item: SITE },
      ...(page.parent
        ? [{ '@type': 'ListItem', position: 2, name: page.parent.label, item: `${SITE}${page.parent.href}` }]
        : []),
      {
        '@type': 'ListItem',
        position: page.parent ? 3 : 2,
        name: page.eyebrow,
        item: pageUrl,
      },
    ],
  }

  const others = seoLandings.filter((item) => item.slug !== page.slug)
  const sectionNo = (base: number) => String(base + (page.children ? 1 : 0)).padStart(2, '0')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />

      <SectionShell eyebrow={page.eyebrow} eyebrowNumber="01" bgClass="bg-white" className="pt-16 md:pt-[4.5rem]">
        <div className="pb-10 pt-2 md:pb-14">
          <nav aria-label="Breadcrumb" className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            {page.parent ? (
              <>
                <span className="mx-2 text-slate-300">/</span>
                <Link href={page.parent.href} className="hover:text-slate-900">
                  {page.parent.label}
                </Link>
              </>
            ) : null}
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-900">{page.eyebrow}</span>
          </nav>
          <h1 className="type-h2 mb-4 max-w-3xl">{page.h1}</h1>
          <p className="type-body mb-6 max-w-3xl">{page.lede}</p>
          <p lang="hi" className="mb-8 max-w-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
            {page.hindi}
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-4">
            {page.cta === 'export' ? (
              <>
                <PixelButton href={EXPORT_WHATSAPP} external>
                  Request an export quote
                </PixelButton>
                <PixelButton href="mailto:supersalesagro@gmail.com" external tone="dark">
                  Email the export desk
                </PixelButton>
              </>
            ) : (
              <>
                <PixelButton href="/todays-mandi-rates">Today&apos;s mandi rates</PixelButton>
                <PixelButton href={WHATSAPP_CHANNEL_URL} external tone="dark">
                  WhatsApp rates
                </PixelButton>
              </>
            )}
          </div>
          {page.photos ? (
            <div className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-3">
              {page.photos.map((photo) => (
                <div key={photo.src} className="relative aspect-[4/3] bg-white">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </SectionShell>

      {page.children ? (
        <SectionShell eyebrow="Lines we quote" eyebrowNumber="02" bgClass="bg-white">
          <ul className="grid gap-px bg-slate-200 pb-10 sm:grid-cols-2 md:pb-14">
            {page.children.map((child) => (
              <li key={child.href} className="bg-white">
                <Link href={child.href} className="block px-4 py-4 transition hover:bg-slate-50">
                  <span className="font-funneldisplay font-bold text-slate-900">{child.label}</span>
                  <span className="mt-1 block text-sm text-slate-500">{child.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </SectionShell>
      ) : null}

      <SectionShell eyebrow="At a glance" eyebrowNumber={sectionNo(2)} bgClass="bg-white">
        <div className="grid gap-px bg-slate-200 pb-10 sm:grid-cols-2 lg:grid-cols-4 md:pb-14">
          {page.facts.map((fact) => (
            <div key={fact.label} className="bg-white px-4 py-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{fact.label}</p>
              <p className="mt-2 font-funneldisplay text-lg font-bold text-slate-900">{fact.value}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="For buyers and sellers" eyebrowNumber={sectionNo(3)} bgClass="bg-white">
        <div className="max-w-3xl space-y-8 pb-10 md:pb-14">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 font-funneldisplay text-2xl font-bold text-slate-900">{section.heading}</h2>
              <p className="type-body">{section.body}</p>
            </div>
          ))}
          <PixelButton href={page.cta === 'export' ? EXPORT_WHATSAPP : '/#contact_us'} external={page.cta === 'export'}>
            {page.cta === 'export' ? 'Talk to the export desk' : 'Talk to the mandi desk'}
          </PixelButton>
        </div>
      </SectionShell>

      <SectionShell eyebrow="Questions" eyebrowNumber={sectionNo(4)} bgClass="bg-white">
        <div className="max-w-3xl pb-10 md:pb-14">
          {page.faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-slate-200 py-4">
              <summary className="cursor-pointer list-none font-funneldisplay text-lg font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                {faq.q}
              </summary>
              <p className="type-body mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Also on this desk" eyebrowNumber={sectionNo(5)} bgClass="bg-white">
        <div className="pb-12 md:pb-16">
          <ul className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug} className="bg-white">
                <Link href={`/${item.slug}`} className="block px-4 py-4 transition hover:bg-slate-50">
                  <span className="font-funneldisplay font-bold text-slate-900">{item.eyebrow}</span>
                  <span className="mt-1 block text-sm text-slate-500">{item.h1}</span>
                </Link>
              </li>
            ))}
            <li className="bg-white">
              <Link href="/wholesale" className="block px-4 py-4 transition hover:bg-slate-50">
                <span className="font-funneldisplay font-bold text-slate-900">Domestic wholesale</span>
                <span className="mt-1 block text-sm text-slate-500">Processors, exporters, and traders across India</span>
              </Link>
            </li>
            <li className="bg-white">
              <Link href="/hospitality" className="block px-4 py-4 transition hover:bg-slate-50">
                <span className="font-funneldisplay font-bold text-slate-900">Hotels and retail</span>
                <span className="mt-1 block text-sm text-slate-500">Standing fruit supply for kitchens and chains</span>
              </Link>
            </li>
            <li className="bg-white">
              <Link href="/export" className="block px-4 py-4 transition hover:bg-slate-50">
                <span className="font-funneldisplay font-bold text-slate-900">Fruit export</span>
                <span className="mt-1 block text-sm text-slate-500">Graded Indian fruit for overseas buyers</span>
              </Link>
            </li>
          </ul>
        </div>
      </SectionShell>
    </>
  )
}
