'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-super-sales-agro.png'
import MobileMenu from './mobile-menu'
import PixelButton from './PixelButton'
import TranslateButton from './TranslateButton'

export default function Header() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    const scrollHandler = () => setTop(window.pageYOffset <= 10)
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <header
      translate="no"
      className={`notranslate fixed top-0 z-30 w-full transition-colors duration-200 ${
        top
          ? 'border-b border-slate-200/70 bg-white/90 backdrop-blur-sm'
          : 'border-b border-slate-200 bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl border-x border-slate-200 px-3 sm:px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link href="/" className="mr-4 shrink-0 rounded-md bg-black/95 px-2 py-1 shadow-sm">
            <Image
              src={Logo}
              unoptimized
              alt="Super Sales Agro"
              width={274}
              height={148}
              className="h-8 w-auto md:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/#products"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Products
            </Link>
            <Link
              href="/#about_us"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              About
            </Link>
            <Link
              href="/todays-mandi-rates"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Mandi Rates
            </Link>
            <Link
              href="/export"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Export
            </Link>
            <Link
              href="/#testimonials"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Testimonials
            </Link>
            <Link
              href="/#contact_us"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Contact
            </Link>
            <div className="hidden md:block">
              <TranslateButton />
            </div>
            <div className="ml-3">
              <PixelButton href="/#contact_us" size="sm">
                Get in Touch
              </PixelButton>
            </div>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
