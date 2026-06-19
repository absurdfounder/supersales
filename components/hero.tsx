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

const trustItems = ['42 years experience', 'Same Day Payment', 'Family Owned']

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
      <div className="relative -mx-3 min-h-[min(88vh,760px)] overflow-hidden border border-slate-200 sm:-mx-4 md:-mx-6">
        <Image
          src={BackgroundCover}
          unoptimized
          alt="Super Sales Agro warehouse and orchards"
          fill
          priority
          className="object-cover object-[center_42%] sm:object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/20" />

        <div className="relative z-10 flex min-h-[min(88vh,760px)] flex-col items-center justify-start px-4 pb-12 pt-24 text-center sm:px-8 sm:pt-28 md:pt-32">
          <PixelMissionTag index="01" label="Mission briefing" className="mb-6" />

          <h1 className="max-w-4xl font-funneldisplay text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Fruit Wholesalers with over 42 years of experience in{' '}
            <span
              key={current.label}
              className="inline-block bg-gradient-to-r from-agro-400 to-agro bg-clip-text text-transparent word-flip"
            >
              {current.emoji} {current.label}
            </span>
          </h1>

          <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
            <PixelButton href="#contact_us" className="w-full sm:w-auto">
              Get in Touch
            </PixelButton>
            <PixelButton href="#testimonials" tone="dark" className="w-full sm:w-auto">
              Why Traders Love Us
            </PixelButton>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-slate-800/90 sm:flex-row sm:gap-5">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center">
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
