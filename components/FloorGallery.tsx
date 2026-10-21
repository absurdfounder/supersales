'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SectionShell from '@/components/ui/SectionShell'

type Scene = {
  id: string
  kind: 'video' | 'photo'
  src: string
  poster?: string
  title: string
  alt: string
  objectPosition?: string
}

const SCENES: Scene[] = [
  {
    id: 'walk',
    kind: 'video',
    src: '/media/floor/v02.mp4',
    poster: '/media/floor/posters/v02.jpg',
    title: 'Through the shed',
    alt: 'Walking through a fruit shed lined with stacked Kinnaur apple cartons',
  },
  {
    id: 'truck',
    kind: 'video',
    src: '/media/floor/v03.mp4',
    poster: '/media/floor/posters/v03.jpg',
    title: 'Loading out',
    alt: 'A truck being loaded with apple cartons at the mandi',
  },
  {
    id: 'outside',
    kind: 'video',
    src: '/media/floor/v13.mp4',
    poster: '/media/floor/posters/v13.jpg',
    title: 'Outside the shed',
    alt: 'Buyers gathered around apple cartons outside the shed',
  },
]

const MORE_SCENES: Scene[] = [
  {
    id: 'inspection',
    kind: 'video',
    src: '/media/floor/v04.mp4',
    poster: '/media/floor/posters/v04.jpg',
    title: 'Buyers inspect the fruit',
    alt: 'Buyers gathered around an open apple carton at the mandi',
  },
  {
    id: 'auction',
    kind: 'video',
    src: '/media/floor/v10.mp4',
    poster: '/media/floor/posters/v10.jpg',
    title: 'A turn at the box',
    alt: 'Buyers taking their turn at an open box of Himachal apples',
  },
  {
    id: 'packing',
    kind: 'video',
    src: '/media/floor/v15.mp4',
    poster: '/media/floor/posters/v15.jpg',
    title: 'Packing the order',
    alt: 'A worker closing and strapping apple cartons',
  },
]

export default function FloorGallery({ compact = false }: { compact?: boolean }) {
  const scenes = compact ? MORE_SCENES : SCENES
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const activeVideoRef = useRef<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => {
      setReducedMotion(motion.matches)
      if (motion.matches) {
        activeVideoRef.current = null
        setActiveVideo(null)
      }
    }
    syncMotion()
    motion.addEventListener('change', syncMotion)
    return () => motion.removeEventListener('change', syncMotion)
  }, [])

  useLayoutEffect(() => {
    if (reducedMotion) return
    const track = trackRef.current
    const stage = stageRef.current
    const rail = railRef.current
    if (!track || !stage || !rail) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) {
      setReducedMotion(true)
      return
    }

    let frame = 0
    const measure = () => {
      const header = document.querySelector('header')
      const stickyTop = Math.round(header?.getBoundingClientRect().height || (window.innerWidth >= 768 ? 72 : 64))
      const stageHeight = compact
        ? Math.max(360, Math.min(window.innerHeight - stickyTop, window.innerHeight * 0.6))
        : Math.max(460, window.innerHeight - stickyTop)
      const travel = Math.max(0, rail.scrollWidth - stage.clientWidth)

      stage.style.top = `${stickyTop}px`
      stage.style.height = `${stageHeight}px`
      track.style.height = `${stageHeight + travel}px`

      const trackTop = track.getBoundingClientRect().top
      const distance = Math.min(travel, Math.max(0, stickyTop - trackTop))
      rail.style.transform = `translate3d(${-distance}px, 0, 0)`

      const stageRect = stage.getBoundingClientRect()
      const stageVisible = stageRect.bottom > stickyTop && stageRect.top < window.innerHeight
      let nextVideo: string | null = null

      if (stageVisible) {
        const center = stageRect.left + stageRect.width / 2
        let nearestDistance = Number.POSITIVE_INFINITY

        Array.from(rail.children).forEach((child) => {
          const card = child as HTMLElement
          if (card.dataset.sceneKind !== 'video') return
          const rect = card.getBoundingClientRect()
          if (rect.right <= stageRect.left || rect.left >= stageRect.right) return
          const cardCenter = rect.left + rect.width / 2
          const cardDistance = Math.abs(cardCenter - center)
          if (cardDistance < nearestDistance) {
            nearestDistance = cardDistance
            nextVideo = card.dataset.sceneId ?? null
          }
        })
      }

      if (activeVideoRef.current !== nextVideo) {
        activeVideoRef.current = nextVideo
        setActiveVideo(nextVideo)
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    window.visualViewport?.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      window.visualViewport?.removeEventListener('resize', measure)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [compact, reducedMotion])

  const renderCards = (horizontal: boolean) => scenes.map((scene, index) => (
    <article
      key={scene.id}
      data-scene-id={scene.id}
      data-scene-kind={scene.kind}
      aria-label={`${scene.kind === 'video' ? 'Video' : 'Photo'}: ${scene.title}`}
      className={`relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-900/10 ${
        horizontal
          ? compact
            ? 'w-[min(70vw,26vh,18rem)] flex-none'
            : 'w-[min(78vw,34vh,22rem)] flex-none'
          : 'w-full'
      }`}
    >
      {scene.kind === 'video' && activeVideo === scene.id ? (
        <video
          ref={videoRef}
          src={scene.src}
          poster={scene.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={scene.alt}
          className="absolute inset-0 h-full w-full bg-slate-950 object-cover"
        />
      ) : (
        <img
          src={scene.kind === 'video' ? scene.poster ?? scene.src : scene.src}
          alt={scene.kind === 'photo' ? scene.alt : ''}
          aria-hidden={scene.kind === 'video' ? true : undefined}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: scene.objectPosition ?? 'center' }}
          draggable={false}
          loading={index < 5 ? 'eager' : 'lazy'}
        />
      )}
    </article>
  ))

  const content = reducedMotion ? (
    <div className={`pb-10 ${compact ? 'pt-4' : 'pt-2'} md:pb-14`}>
      {!compact && (
        <div className="mb-6 max-w-3xl sm:mb-8">
          <h2 id="floor-gallery-title" className="type-h2">Watch Super Sales in Action</h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">A few real moments from our daily trade.</p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {renderCards(false)}
      </div>
    </div>
  ) : (
    <div ref={trackRef} className="relative">
      <div
        ref={stageRef}
        className={`sticky z-10 flex flex-col overflow-hidden bg-white ${compact ? 'py-3 sm:py-4' : 'py-5 sm:py-6 md:py-8'}`}
      >
        {!compact && (
          <div className="mb-5 max-w-3xl shrink-0 sm:mb-6">
            <h2 id="floor-gallery-title" className="type-h2">Watch Super Sales in Action</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">A few real moments from our daily trade.</p>
          </div>
        )}
        <div
          role="region"
          aria-label={compact ? 'More moments from the mandi' : undefined}
          aria-labelledby={compact ? undefined : 'floor-gallery-title'}
          className="min-h-0 flex-1 overflow-hidden"
        >
          <div ref={railRef} className="mx-auto flex h-full w-max items-center gap-3 sm:gap-4 md:gap-5">
            {renderCards(true)}
          </div>
        </div>
      </div>
    </div>
  )

  if (compact) {
    return (
      <section className="relative bg-white" aria-label="More videos from Super Sales Agro">
        <div className="mx-auto max-w-7xl border-x border-slate-200 px-3 sm:px-4 md:px-6">
          {content}
        </div>
      </section>
    )
  }

  return (
    <SectionShell id="on_the_floor" eyebrowNumber="02" eyebrow="On the floor" bgClass="bg-white">
      {content}
    </SectionShell>
  )
}
