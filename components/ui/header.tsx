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
          <Link href="/" className="mr-4 flex shrink-0 items-center gap-2.5 sm:gap-3">
            <Image
              src={Logo}
              unoptimized
              alt=""
              width={274}
              height={148}
              className="h-8 w-auto md:h-9"
              aria-hidden
            />
            <span className="font-funneldisplay text-sm font-extrabold leading-tight text-slate-900 sm:text-base md:text-lg">
              Super Sales Agro
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/#products"
              className="hidden px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 xl:inline-block xl:px-3 xl:text-[11px] xl:tracking-[0.14em]"
            >
              Products
            </Link>
            <Link
              href="/#about_us"
              className="hidden px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 lg:inline-block lg:px-3 lg:text-[11px] lg:tracking-[0.14em]"
            >
              About
            </Link>
            <Link
              href="/todays-mandi-rates"
              className="px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 lg:px-3 lg:text-[11px] lg:tracking-[0.14em]"
            >
              Mandi Rates
            </Link>
            <Link
              href="/wholesale"
              className="px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 lg:px-3 lg:text-[11px] lg:tracking-[0.14em]"
            >
              Wholesale
            </Link>
            <Link
              href="/hospitality"
              className="px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 lg:px-3 lg:text-[11px] lg:tracking-[0.14em]"
            >
              Hospitality
            </Link>
            <Link
              href="/export"
              className="px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 lg:px-3 lg:text-[11px] lg:tracking-[0.14em]"
            >
              Export
            </Link>
            <Link
              href="/#contact_us"
              className="hidden px-2 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-900 lg:inline-block lg:px-3 lg:text-[11px] lg:tracking-[0.14em]"
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
