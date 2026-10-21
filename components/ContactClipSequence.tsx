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
  const playerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
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
    const player = playerRef.current
    if (!player) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0.1 },
    )
    observer.observe(player)
    return () => observer.disconnect()
  }, [])

  const clip = clips[activeClip]

  return (
    <div
      ref={playerRef}
      role="region"
      aria-label="Short videos from the mandi floor"
      className="mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5 sm:max-w-[350px] sm:rounded-3xl"
    >
      {reducedMotion || !inView ? (
        <img src={clip.poster} alt={clip.alt} className="h-full w-full object-cover" />
      ) : (
        <video
          key={clip.src}
          src={clip.src}
          poster={clip.poster}
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-label={clip.alt}
          onEnded={() => setActiveClip((current) => (current + 1) % clips.length)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}
