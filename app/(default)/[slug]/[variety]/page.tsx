import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SeoLandingView from '@/components/SeoLanding'
import { getVarietyPage, seoVarietyPages } from '@/lib/seo-landings'

const SITE = 'https://supersalesagro.com'

export function generateStaticParams() {
  return seoVarietyPages.map((page) => {
    const [slug, variety] = page.slug.split('/')
    return { slug, variety }
  })
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; variety: string }
}): Metadata {
  const page = getVarietyPage(params.slug, params.variety)
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

export default function VarietyPage({ params }: { params: { slug: string; variety: string } }) {
  const page = getVarietyPage(params.slug, params.variety)
  if (!page) notFound()
  return <SeoLandingView page={page} />
}
