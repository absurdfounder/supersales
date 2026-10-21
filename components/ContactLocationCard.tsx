'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import PixelButton from '@/components/ui/PixelButton'

interface ContactLocationCardProps {
  title: string
  address: string
  locationType: 'office' | 'dock'
  mapImageSrc: string
  mapImageAlt: string
  directionsUrl: string
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const field = document.createElement('textarea')
  field.value = value
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  const copied = document.execCommand('copy')
  field.remove()
  if (!copied) throw new Error('Clipboard copy failed')
}

export default function ContactLocationCard({
  title,
  address,
  locationType,
  mapImageSrc,
  mapImageAlt,
  directionsUrl,
}: ContactLocationCardProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current)
  }, [])

  async function handleCopy() {
    try {
      await copyText(`${title}\n${address}\n${directionsUrl}`)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopyState('idle'), 2200)
  }

  const copyLabel = copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Try again' : 'Copy location'

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(15,23,42,0.09)] sm:rounded-3xl">
      <div className="relative h-28 shrink-0 overflow-hidden bg-slate-100 sm:h-36">
        <Image
          src={mapImageSrc}
          alt={mapImageAlt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-4">
        <div>
          <div className="flex items-center gap-2">
            {locationType === 'office' ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-agro-700">
                <path d="M4 21h16M6.5 21V4.5h11V21M9.5 8h1m3 0h1m-5 4h1m3 0h1m-5 4h1m3 0h1M3.5 21v-2.5h17V21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-agro-700">
                <path d="M3 6.5h11v11H3zM14 10h4l3 3.5v4h-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="18.5" r="1.8" fill="white" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="18" cy="18.5" r="1.8" fill="white" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            )}
            <h4 className="text-base font-bold tracking-tight text-slate-900">{title}</h4>
          </div>
          <p className="mt-1 min-h-10 text-sm leading-5 text-slate-600">{address}</p>
          <p className="mt-1.5 text-[10px] leading-4 text-slate-400">Map data © OpenStreetMap contributors</p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <PixelButton
            href={directionsUrl}
            size="sm"
            className="min-w-0 flex-1"
            icon={<span aria-hidden="true">↗</span>}
          >
            Directions
          </PixelButton>
          <PixelButton
            type="button"
            onClick={handleCopy}
            aria-label={`${copyLabel} for ${title}`}
            variant="outline"
            size="sm"
            className="min-w-0 flex-1"
            icon={copyState === 'copied' ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <rect x="7" y="6" width="9" height="11" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 6V4.8A1.8 1.8 0 0 0 10.2 3H5.8A1.8 1.8 0 0 0 4 4.8v7.4A1.8 1.8 0 0 0 5.8 14H7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          >
            {copyLabel}
          </PixelButton>
        </div>
        <span className="sr-only" aria-live="polite">
          {copyState === 'copied' ? `${title} location copied to clipboard.` : copyState === 'error' ? 'Could not copy the location.' : ''}
        </span>
      </div>
    </article>
  )
}
