import './css/style.css'

import Script from 'next/script'
import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import Header from '@/components/ui/header'

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

export const metadata = {
  title: 'Super Sales Agro — Fruit Wholesaler in Delhi & Himachal Mandis',
  description:
    'Super Sales Agro is one of India\'s most trusted fruit wholesalers with 42+ years of experience. Apples, mangoes, kinnow, pears, pomegranate, and guavas from Delhi and Himachal mandis.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false,
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .VIpgJd-ZVi9od-ORHb-OEVmcd,
            .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
            .goog-te-banner-frame,
            .skiptranslate,
            iframe.skiptranslate,
            #google_translate_element iframe {
              display: none !important;
              visibility: hidden !important;
              pointer-events: none !important;
              height: 0 !important;
              width: 0 !important;
            }
            body {
              top: 0 !important;
            }
          `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${silkscreen.variable} ${funneldisplay.variable} font-sans antialiased bg-white text-slate-900 tracking-tight`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
        <div
          id="google_translate_element"
          className="pointer-events-none fixed -z-50 left-0 top-0 opacity-0"
          aria-hidden
        />
      </body>
    </html>
  )
}
