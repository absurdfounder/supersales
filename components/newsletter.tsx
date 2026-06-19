'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import truckImage from '@/public/images/super-chill-truck.jpg'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import { FooterGrid } from '@/components/ui/footer'
import { isTranslatedPage } from '@/app/utils/googleTranslateHelper'

const words = ['Apples', 'Mangoes', 'Kinnow', 'Pears']

export default function Newsletter() {
  const [index, setIndex] = useState(0)
  const [pauseAnimation, setPauseAnimation] = useState(false)

  useEffect(() => {
    if (isTranslatedPage()) {
      setPauseAnimation(true)
      return
    }

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    const guard = window.setTimeout(() => {
      if (isTranslatedPage()) {
        setPauseAnimation(true)
        clearInterval(intervalId)
      }
    }, 1500)

    return () => {
      clearInterval(intervalId)
      window.clearTimeout(guard)
    }
  }, [])

  return (
    <SectionShell eyebrowNumber="09" eyebrow="Get started" bgClass="bg-white" noBorderBottom={false}>
      <div className="grid gap-px bg-slate-200">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-white p-8 text-slate-900 sm:p-10 md:p-12">
            <h3 className="font-funneldisplay text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Looking for the best rates for your{' '}
              <span className={`text-agro-700${pauseAnimation ? ' notranslate' : ''}`} key={pauseAnimation ? 'static' : words[index]} translate={pauseAnimation ? 'no' : undefined}>
                {words[index]}
              </span>
              ?
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We help you grow your business by using technologies and best practices.
            </p>
            <div className="mt-8">
              <PixelButton href="#contact_us">Get in Touch</PixelButton>
            </div>
          </div>

          <div className="relative min-h-[280px] bg-white sm:min-h-[320px] lg:min-h-[360px]">
            <Image
              alt="Super Sales Agro cold chain truck"
              src={truckImage}
              fill
              className="object-cover object-[right_center]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[45%] bg-gradient-to-r from-white via-white/55 to-transparent sm:w-[40%] lg:w-[36%]"
            />
          </div>
        </div>

        <FooterGrid />
      </div>
    </SectionShell>
  )
}
