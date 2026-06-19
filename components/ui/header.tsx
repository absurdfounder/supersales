'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logonew-black.png'
import MobileMenu from './mobile-menu'
import PixelButton from './PixelButton'

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
      className={`fixed top-0 z-30 w-full transition-colors duration-200 ${
        top
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-slate-200 bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 ${
          top ? 'max-w-8xl' : 'max-w-7xl border-x border-slate-200 px-3 sm:px-4 md:px-6'
        }`}
      >
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link href="/" className="mr-4 shrink-0">
            <Image src={Logo} unoptimized alt="Super Sales Agro" width={220} height={48} className="h-9 w-auto md:h-10" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="#products"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Products
            </Link>
            <Link
              href="#about_us"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Testimonials
            </Link>
            <Link
              href="#contact_us"
              className="px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-900"
            >
              Contact
            </Link>
            <div className="ml-3">
              <PixelButton href="#contact_us" size="sm">
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
