'use client'

import PlausibleProvider from 'next-plausible'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="supersalesagro.com">
      <main className="grow">{children}</main>
      <Footer />
    </PlausibleProvider>
  )
}
