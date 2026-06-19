'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import notionfooterImage from '@/public/images/notionfooter.png'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import { FooterGrid } from '@/components/ui/footer'

const words = ['Apples', 'Mangoes', 'Kinnow', 'Pears']

export default function Newsletter() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <SectionShell eyebrowNumber="09" eyebrow="Get started" bgClass="bg-white" noBorderBottom={false}>
      <div className="grid gap-px bg-slate-200 pb-0 pt-2">
        <div className="grid gap-px bg-slate-200 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
          <div className="bg-slate-900 p-8 text-white sm:p-10 md:p-12">
            <h3 className="font-funneldisplay text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Looking for the best rates for your{' '}
              <span className="text-agro-300" key={words[index]}>
                {words[index]}
              </span>
              ?
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We help you grow your business by using technologies and best practices.
            </p>
            <div className="mt-8">
              <PixelButton href="#contact_us">Get in Touch</PixelButton>
            </div>
          </div>

          <div className="relative min-h-[220px] bg-slate-900 sm:min-h-[260px] lg:min-h-[280px]">
            <Image
              alt="Super Sales Agro cold chain truck"
              src={notionfooterImage}
              fill
              className="object-cover object-center p-4 sm:p-6"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/20 to-slate-900/80 lg:via-transparent lg:to-slate-900/40" />
          </div>
        </div>

        <FooterGrid />
      </div>
    </SectionShell>
  )
}
