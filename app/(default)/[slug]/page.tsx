import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingView from '@/components/SeoLanding'
import { getSeoLanding, seoLandings } from '@/lib/seo-landings'

const SITE = 'https://supersalesagro.com'

export function generateStaticParams() {
  return seoLandings.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getSeoLanding(params.slug)
  if (!page) return {}

  const url = `${SITE}/${page.slug}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'Super Sales Agro',
      locale: 'en_IN',
      type: 'website',
    },
  }
}

export default function SeoLandingPage({ params }: { params: { slug: string } }) {
  const page = getSeoLanding(params.slug)
  if (!page) notFound()
  return <SeoLandingView page={page} />
}
