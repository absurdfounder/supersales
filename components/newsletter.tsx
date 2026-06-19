'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import truckImage from '@/public/images/super-chill-truck.jpg'
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
      <div className="grid gap-px bg-slate-200">
        <div className="relative grid gap-px bg-slate-200 lg:grid-cols-2 lg:gap-0">
          <div className="relative z-10 flex flex-col justify-center bg-slate-900 p-8 text-white sm:p-10 md:p-12">
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

          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[300px] lg:-ml-20 lg:min-h-full xl:-ml-28">
            <Image
              alt="Super Sales Agro cold chain truck"
              src={truckImage}
              fill
              className="object-cover object-center lg:object-[72%_center]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-slate-900 via-slate-900/45 to-transparent sm:h-32 lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[42%] lg:bg-gradient-to-r lg:from-slate-900 lg:via-slate-900/35 lg:to-transparent xl:w-[38%]"
            />
          </div>
        </div>

        <FooterGrid />
      </div>
    </SectionShell>
  )
}
