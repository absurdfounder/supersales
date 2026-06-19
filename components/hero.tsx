'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import BackgroundCover from '@/public/images/backgroundcover.png'
import SectionShell from '@/components/ui/SectionShell'
import { PixelMissionTag } from '@/components/PixelAtmosphere'
import PixelButton from '@/components/ui/PixelButton'

const words = [
  { emoji: '🍎', label: 'Apples' },
  { emoji: '🍊', label: 'Oranges' },
  { emoji: '🥭', label: 'Mangoes' },
  { emoji: '🍐', label: 'Pears' },
]

const stats = [
  { value: '42+', label: 'Years experience' },
  { value: '65K MT', label: 'Annual volume' },
  { value: 'Same day', label: 'Farmer payment' },
]

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 shrink-0 text-agro" aria-hidden>
      <path
        d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const current = words[index]

  return (
    <SectionShell eyebrowNumber="01" eyebrow="Wholesale" bgClass="bg-slate-50" noBorder>
      <div className="relative -mx-3 overflow-hidden border border-slate-200 sm:-mx-4 md:-mx-6">
        <div className="relative min-h-[640px] md:min-h-[700px] lg:min-h-[760px]">
          <Image
            src={BackgroundCover}
            unoptimized
            alt="Super Sales Agro warehouse and orchards"
            fill
            priority
            className="object-cover object-[center_62%] md:object-[center_58%]"
          />

          <div className="pointer-events-none absolute inset-0 hero-sky-wash" aria-hidden />
          <div className="pointer-events-none absolute inset-0 hero-land-fade" aria-hidden />
          <div className="pointer-events-none absolute inset-0 hero-checker-grid" aria-hidden />
          <div className="pointer-events-none absolute inset-0 pixel-flicker-grid" aria-hidden />

          <div className="pointer-events-none absolute inset-3 border border-white/30 sm:inset-4 md:inset-5" aria-hidden />
          <div
            className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-agro-400/70 sm:left-4 sm:top-4 md:left-5 md:top-5"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-agro-400/70 sm:right-4 sm:top-4 md:right-5 md:top-5"
            aria-hidden
          />

          <div className="relative z-10 grid min-h-[640px] grid-rows-[minmax(0,1fr)_auto] md:min-h-[700px] lg:min-h-[760px]">
            <div className="flex items-center justify-center px-4 py-10 sm:px-8 md:px-10 md:py-12">
              <div className="w-full max-w-3xl border border-slate-200/80 bg-white/75 px-5 py-8 text-center shadow-sm backdrop-blur-md sm:px-8 sm:py-10">
                <PixelMissionTag index="01" label="Mission briefing" className="mb-5" />

                <h1 className="font-funneldisplay text-[1.65rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-[2.65rem]">
                  Fruit Wholesalers with over 42 years of experience in{' '}
                  <span
                    key={current.label}
                    className="inline-block bg-gradient-to-r from-agro-400 to-agro-600 bg-clip-text text-transparent word-flip"
                  >
                    {current.emoji} {current.label}
                  </span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Delhi &amp; Himachal mandis · cold chain · same-day farmer payment · 250+ trader relationships
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <PixelButton href="#contact_us" className="w-full sm:w-auto">
                    Get in Touch
                  </PixelButton>
                  <PixelButton href="#testimonials" tone="dark" className="w-full sm:w-auto">
                    Why Traders Love Us
                  </PixelButton>
                </div>

                <div className="mt-5 flex flex-col items-center justify-center gap-2 text-xs text-slate-700 sm:flex-row sm:gap-5 sm:text-sm">
                  <div className="flex items-center">
                    <CheckIcon />
                    Family owned
                  </div>
                  <div className="flex items-center">
                    <CheckIcon />
                    Azadpur mandi
                  </div>
                  <div className="flex items-center">
                    <CheckIcon />
                    Export ready
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px border-t border-slate-200/80 bg-slate-200/90">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/90 px-3 py-4 text-center backdrop-blur-sm sm:px-4 sm:py-5"
                >
                  <p className="font-funneldisplay text-xl font-bold text-slate-900 sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
