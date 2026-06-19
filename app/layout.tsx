import './css/style.css'

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
      <body
        className={`${inter.variable} ${robotoMono.variable} ${silkscreen.variable} ${funneldisplay.variable} font-sans antialiased bg-slate-50 text-slate-900 tracking-tight`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
