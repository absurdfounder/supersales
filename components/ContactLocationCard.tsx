'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ContactLocationCardProps {
  title: string
  address: string
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
      <div className="relative h-32 shrink-0 overflow-hidden bg-slate-100 sm:h-36">
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
          <h4 className="text-base font-bold tracking-tight text-slate-900">{title}</h4>
          <p className="mt-1 min-h-10 text-sm leading-5 text-slate-600">{address}</p>
          <p className="mt-1.5 text-[10px] leading-4 text-slate-400">Map data © OpenStreetMap contributors</p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-agro-700 px-3 text-xs font-semibold text-white transition-colors hover:bg-agro-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-600 focus-visible:ring-offset-2 sm:text-sm"
          >
            Directions <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`${copyLabel} for ${title}`}
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-agro-300 hover:bg-agro-50 hover:text-agro-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-600 focus-visible:ring-offset-2 sm:px-3 sm:text-sm"
          >
            {copyState === 'copied' ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <rect x="7" y="6" width="9" height="11" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 6V4.8A1.8 1.8 0 0 0 10.2 3H5.8A1.8 1.8 0 0 0 4 4.8v7.4A1.8 1.8 0 0 0 5.8 14H7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
            {copyLabel}
          </button>
        </div>
        <span className="sr-only" aria-live="polite">
          {copyState === 'copied' ? `${title} location copied to clipboard.` : copyState === 'error' ? 'Could not copy the location.' : ''}
        </span>
      </div>
    </article>
  )
}
