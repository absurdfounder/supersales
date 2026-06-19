'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import PixelButton from './PixelButton'
import TranslateButton from './TranslateButton'

const links = [
  { href: '/#products', label: 'Products' },
  { href: '/#about_us', label: 'About' },
  { href: '/todays-mandi-rates', label: 'Mandi Rates' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/hospitality', label: 'Hospitality' },
  { href: '/export', label: 'Export' },
  { href: '/#contact_us', label: 'Contact' },
]

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="h-6 w-6 fill-current text-slate-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 h-screen w-full overflow-scroll border-b border-slate-200 bg-white pb-16"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="grid gap-px bg-slate-200 p-3">
            {links.map((link) => (
              <li key={link.href} className="bg-white">
                <Link
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="bg-white px-4 py-3">
              <TranslateButton />
            </li>
            <li className="bg-white p-4">
              <PixelButton href="/#contact_us" className="w-full">
                Get in Touch
              </PixelButton>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
