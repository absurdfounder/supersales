import LinksPage from '@/components/LinksPage'

export const metadata = {
  title: 'Links | Super Sales Agro',
  description:
    'Today\'s mandi rates on WhatsApp, chat or call our mandi desk, and shipping address for Super Sales Agro at Azadpur Delhi.',
  alternates: { canonical: 'https://supersalesagro.com/links' },
  robots: { index: false, follow: true },
}

export default function LinksRoutePage() {
  return <LinksPage />
}
