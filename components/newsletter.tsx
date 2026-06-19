'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import notionfooterImage from '@/public/images/notionfooter.png'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'

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
      <div className="pb-10 pt-2 md:pb-14">
        <div className="grid gap-px bg-slate-200 lg:grid-cols-[1fr_auto]">
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
          <div className="relative hidden min-h-[200px] bg-white lg:block lg:min-w-[280px] xl:min-w-[360px]">
            <Image alt="Fresh produce" src={notionfooterImage} fill className="object-contain object-right p-6" unoptimized />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
