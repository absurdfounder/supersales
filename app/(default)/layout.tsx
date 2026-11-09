'use client'

import PlausibleProvider from 'next-plausible'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider
      src="https://plausible-d1.vaibhavkalra1212.workers.dev/js/script.outbound-links.js"
      domain="supersalesagro.com"
    >
      <main className="grow">{children}</main>
    </PlausibleProvider>
  )
}
