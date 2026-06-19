'use client'

import PlausibleProvider from 'next-plausible'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="supersalesagro.com">
      <main className="grow">{children}</main>
    </PlausibleProvider>
  )
}
