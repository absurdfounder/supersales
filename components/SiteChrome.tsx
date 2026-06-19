'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/ui/header'
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLinkHub = pathname === '/links'

  return (
    <>
      {!isLinkHub ? <Header /> : null}
      <div className="flex flex-1 flex-col">{children}</div>
      {!isLinkHub ? <FloatingWhatsAppButton /> : null}
    </>
  )
}
