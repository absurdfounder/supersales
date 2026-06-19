'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import BackgroundCover from '@/public/images/backgroundcover.png'
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
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundCover}
          unoptimized
          alt="Super Sales Agro warehouse and orchards"
          fill
          priority
          className="object-cover object-[center_42%] sm:object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-start px-4 pb-16 pt-28 text-center sm:px-6 sm:pt-32 md:pt-36 lg:pt-40">
        <h1 className="font-funneldisplay text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
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

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-slate-700/90 sm:flex-row sm:gap-5">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center">
              <CheckIcon />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
