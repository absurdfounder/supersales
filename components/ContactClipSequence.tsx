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
  const [inViewClips, setInViewClips] = useState<Set<number>>(() => new Set())
  const [activeClip, setActiveClip] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [showThirdClip, setShowThirdClip] = useState(false)
  const displayedClips = showThirdClip ? clips : clips.slice(0, 2)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReducedMotion(motion.matches)
    syncMotion()
    motion.addEventListener('change', syncMotion)
    return () => motion.removeEventListener('change', syncMotion)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const syncLayout = () => setShowThirdClip(desktop.matches)
    syncLayout()
    desktop.addEventListener('change', syncLayout)
    return () => desktop.removeEventListener('change', syncLayout)
  }, [])

  useEffect(() => {
    if (activeClip >= displayedClips.length) setActiveClip(0)
  }, [activeClip, displayedClips.length])

  useEffect(() => {
    const sequence = sequenceRef.current
    if (!sequence || reducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        setInViewClips((current) => {
          const next = new Set(current)
          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.clipIndex)
            if (entry.isIntersecting) next.add(index)
            else next.delete(index)
          })
          return next
        })
      },
      { threshold: 0.3 },
    )
    const cards = sequence.querySelectorAll<HTMLElement>('[data-clip-index]')
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [reducedMotion, showThirdClip])

  return (
    <div
      ref={sequenceRef}
      role="region"
      aria-label="Short videos from the mandi floor"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
    >
      {displayedClips.map((clip, index) => (
        <div
          key={clip.src}
          data-clip-index={index}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5 sm:rounded-3xl"
        >
          {reducedMotion ? (
            <img src={clip.poster} alt={clip.alt} className="h-full w-full object-cover" />
          ) : inViewClips.has(index) && activeClip === index ? (
            <video
              src={clip.src}
              poster={clip.poster}
              autoPlay
              muted
              playsInline
              preload="none"
              aria-label={clip.alt}
              onEnded={() => setActiveClip((current) => (current + 1) % displayedClips.length)}
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
