'use client'

import { useEffect, useRef, useState } from 'react'

const clips = [
  {
    src: '/media/floor/v04.mp4',
    poster: '/media/floor/posters/v04.jpg',
    alt: 'Buyers inspecting fruit together at the mandi',
  },
  {
    src: '/media/floor/v13.mp4',
    poster: '/media/floor/posters/v13.jpg',
    alt: 'A sale taking place outside the mandi shed',
  },
  {
    src: '/media/floor/v15.mp4',
    poster: '/media/floor/posters/v15.jpg',
    alt: 'A worker securing apple cartons for dispatch',
  },
]

export default function ContactClipSequence() {
  const sequenceRef = useRef<HTMLDivElement>(null)
  const [visibleClips, setVisibleClips] = useState<Set<number>>(() => new Set())
  const [activeClip, setActiveClip] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReducedMotion(motion.matches)
    syncMotion()
    motion.addEventListener('change', syncMotion)
    return () => motion.removeEventListener('change', syncMotion)
  }, [])

  useEffect(() => {
    const sequence = sequenceRef.current
    if (!sequence || reducedMotion) return

    const observer = new IntersectionObserver((entries) => {
      setVisibleClips((current) => {
        const next = new Set(current)
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.clipIndex)
          if (entry.isIntersecting) next.add(index)
          else next.delete(index)
        })
        return next
      })
    }, { threshold: 0.3 })
    const cards = sequence.querySelectorAll<HTMLElement>('[data-clip-index]')
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div
      ref={sequenceRef}
      role="region"
      aria-label="Short videos from the mandi floor"
      className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
    >
      {clips.map((clip, index) => (
        <div
          key={clip.src}
          data-clip-index={index}
          className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5 sm:rounded-3xl ${
            index === 2 ? 'col-span-2 mx-auto w-1/2 lg:col-span-1 lg:mx-0 lg:w-full' : ''
          }`}
        >
          {reducedMotion ? (
            <img src={clip.poster} alt={clip.alt} className="h-full w-full object-cover" />
          ) : visibleClips.has(index) && activeClip === index ? (
            <video
              src={clip.src}
              poster={clip.poster}
              autoPlay
              muted
              playsInline
              preload="none"
              aria-label={clip.alt}
              onEnded={() => setActiveClip((current) => (current + 1) % clips.length)}
              className="h-full w-full object-cover"
            />
          ) : (
            <img src={clip.poster} alt={clip.alt} className="h-full w-full object-cover" />
          )}
        </div>
      ))}
    </div>
  )
}
