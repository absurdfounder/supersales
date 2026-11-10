import './css/style.css'

import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import SiteChrome from '@/components/SiteChrome'
import GoogleTranslateBoot from '@/components/GoogleTranslateBoot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

const silkscreen = localFont({
  src: [{ path: '../public/fonts/Silkscreen-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-silkscreen',
})

const funneldisplay = localFont({
  src: '../public/fonts/FunnelDisplay-VariableFont_wght.ttf',
  variable: '--font-funneldisplay',
})

const siteUrl = 'https://supersalesagro.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Azadpur Mandi Fruit Wholesaler | Super Sales Agro',
    template: '%s',
  },
  description:
    'Fruit commission agent at Azadpur mandi, Delhi, since 1982. Himachal apples, kinnow, mango, nashpati, pomegranate, and guava. Today’s mandi rates and wholesale supply.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Super Sales Agro',
    title: 'Azadpur Mandi Fruit Wholesaler | Super Sales Agro',
    description:
      'Fruit wholesaler at Azadpur subzi mandi and the Himachal apple mandis. Daily fruit rates, domestic wholesale, hotels, and export.',
  },
}

const businessLd = {
  '@context': 'https://schema.org',
  '@type': 'WholesaleStore',
  name: 'Super Sales Agro',
  url: siteUrl,
  telephone: '+919899262264',
  email: 'supersalesagro@gmail.com',
  foundingDate: '1982',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-285, New Subzi Mandi, Azadpur',
    addressLocality: 'Delhi',
    postalCode: '110034',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${robotoMono.variable} ${silkscreen.variable} ${funneldisplay.variable} font-sans antialiased bg-white text-slate-900 tracking-tight`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <SiteChrome>{children}</SiteChrome>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }} />
        <GoogleTranslateBoot />
        <div
          id="google_translate_element"
          className="pointer-events-none fixed -z-50 left-0 top-0 opacity-0 notranslate"
          translate="no"
          aria-hidden
        />
      </body>
    </html>
  )
}
