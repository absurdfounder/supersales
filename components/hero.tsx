'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import BackgroundCover from '@/public/images/backgroundcover.png'
import SectionShell from '@/components/ui/SectionShell'
import { PixelAtmosphere, PixelMissionTag } from '@/components/PixelAtmosphere'
import PixelButton from '@/components/ui/PixelButton'

const words = ['Apples', 'Mangoes', 'Kinnow', 'Pears']

const stats = [
  { label: 'Years experience', value: '42+' },
  { label: 'Annual volume', value: '65K MT' },
  { label: 'Payment', value: 'Same day' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SectionShell eyebrowNumber="01" eyebrow="Wholesale" bgClass="bg-white" noBorder>
      <PixelAtmosphere camo flicker className="border border-slate-200">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-slate-200 p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
            <PixelMissionTag index="01" label="Mission briefing" className="mb-6" />
            <h1 className="type-h1 mb-4">
              Fruit wholesalers with 42 years of experience in{' '}
              <span className="text-agro" key={words[index]}>
                {words[index]}
              </span>
            </h1>
            <p className="type-body mb-8 max-w-xl">
              Super Sales Agro connects farmers and buyers across India with transparent pricing, same-day payment,
              and cold-chain logistics from Delhi and Himachal mandis.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <PixelButton href="#contact_us">Get in Touch</PixelButton>
              <PixelButton href="#testimonials" variant="outline" tone="dark">
                Why Traders Love Us
              </PixelButton>
            </div>
            <div className="grid grid-cols-3 gap-px bg-slate-200">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white px-3 py-4 text-center sm:px-4">
                  <p className="font-funneldisplay text-xl font-bold text-slate-900 sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
            <Image
              src={BackgroundCover}
              unoptimized
              alt="Fresh produce at Super Sales Agro"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        </div>
      </PixelAtmosphere>
    </SectionShell>
  )
}
