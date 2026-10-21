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
    id: 'shop',
    kind: 'photo',
    src: '/media/floor/p-shop.jpg',
    title: 'Shops 61 & 62',
    alt: 'Super Sales Agro shops 61 and 62, with stacked apple cartons under a yellow tarp',
    objectPosition: '18% 48%',
  },
  {
    id: 'walk',
    kind: 'video',
    src: '/media/floor/v02.mp4',
    poster: '/media/floor/posters/v02.jpg',
    title: 'Through the shed',
    alt: 'Walking through a fruit shed lined with stacked Kinnaur apple cartons',
  },
  {
    id: 'scale',
    kind: 'video',
    src: '/media/floor/v01.mp4',
    poster: '/media/floor/posters/v01.jpg',
    title: 'On the scale',
    alt: 'An apple carton on a weighing scale',
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
    id: 'open-box',
    kind: 'photo',
    src: '/media/floor/p-open-box.jpg',
    title: 'An open box',
    alt: 'Buyers inspecting an open carton of Kinnaur apples inside the shed',
  },
  {
    id: 'circle',
    kind: 'video',
    src: '/media/floor/v04.mp4',
    poster: '/media/floor/posters/v04.jpg',
    title: 'The circle',
    alt: 'A group of buyers gathered around an open apple carton',
  },
  {
    id: 'plums',
    kind: 'photo',
    src: '/media/floor/p-plums.jpg',
    title: 'Apples and plums',
    alt: 'Open cartons of apples and punnets of plums with buyers tasting fruit',
  },
  {
    id: 'rows',
    kind: 'video',
    src: '/media/floor/v05.mp4',
    poster: '/media/floor/posters/v05.jpg',
    title: 'Row after row',
    alt: 'Aisles of stacked apple cartons under a corrugated shed roof',
  },
  {
    id: 'lane',
    kind: 'video',
    src: '/media/floor/v06.mp4',
    poster: '/media/floor/posters/v06.jpg',
    title: 'Lane to lane',
    alt: 'Buyers walking between stacks of apple boxes',
  },
  {
    id: 'fans',
    kind: 'photo',
    src: '/media/floor/p-fans.jpg',
    title: 'Under the fans',
    alt: 'A crowded fruit shed with ceiling fans and buyers around open apple boxes',
  },
  {
    id: 'stacks',
    kind: 'video',
    src: '/media/floor/v07.mp4',
    poster: '/media/floor/posters/v07.jpg',
    title: 'Beside the stacks',
    alt: 'Tall stacks of Kinnaur apple cartons beside a buyer',
  },
  {
    id: 'boards',
    kind: 'video',
    src: '/media/floor/v08.mp4',
    poster: '/media/floor/posters/v08.jpg',
    title: 'Under the boards',
    alt: 'A mandi lane with shop boards overhead and apple cartons stacked on both sides',
  },
  {
    id: 'roof',
    kind: 'video',
    src: '/media/floor/v09.mp4',
    poster: '/media/floor/posters/v09.jpg',
    title: 'Up to the roof',
    alt: 'Apple cartons stacked high toward the shed roof',
  },
  {
    id: 'platform',
    kind: 'photo',
    src: '/media/floor/p-platform.jpg',
    title: 'On the platform',
    alt: 'Buyers standing on a raised platform among apple cartons, one of them on the phone',
  },
  {
    id: 'queue',
    kind: 'video',
    src: '/media/floor/v10.mp4',
    poster: '/media/floor/posters/v10.jpg',
    title: 'A turn at the box',
    alt: 'Buyers lined up at an open box of Himachal apples',
  },
  {
    id: 'closer',
    kind: 'video',
    src: '/media/floor/v12.mp4',
    poster: '/media/floor/posters/v12.jpg',
    title: 'Closer in',
    alt: 'Buyers pressed close together around a sale inside the shed',
  },
  {
    id: 'himachal',
    kind: 'photo',
    src: '/media/floor/p-himachal.jpg',
    title: 'Opened on the spot',
    alt: 'Buyers inspecting open cartons of Himachal apples outdoors',
    objectPosition: 'center 40%',
  },
  {
    id: 'outside',
    kind: 'video',
    src: '/media/floor/v13.mp4',
    poster: '/media/floor/posters/v13.jpg',
    title: 'Outside the shed',
    alt: 'Buyers gathered around apple cartons outside the shed',
  },
  {
    id: 'hands',
    kind: 'photo',
    src: '/media/floor/p-hands.jpg',
    title: 'In the box',
    alt: 'Buyers with their hands in open cartons of Himachal apples',
  },
  {
    id: 'lift',
    kind: 'video',
    src: '/media/floor/v14.mp4',
    poster: '/media/floor/posters/v14.jpg',
    title: 'Lifted away',
    alt: 'A buyer lifting a full carton of apples',
  },
  {
    id: 'shut',
    kind: 'video',
    src: '/media/floor/v15.mp4',
    poster: '/media/floor/posters/v15.jpg',
    title: 'Strapped shut',
    alt: 'A worker closing and strapping apple cartons',
  },
  {
    id: 'end',
    kind: 'video',
    src: '/media/floor/v16.mp4',
    poster: '/media/floor/posters/v16.jpg',
    title: 'End of the round',
    alt: 'Buyers standing on a platform looking over stacked apple cartons',
  },
]

export default function FloorGallery() {
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
      const stageHeight = Math.max(460, window.innerHeight - stickyTop)
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
        }
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
  }, [reducedMotion])

  const renderCards = (horizontal: boolean) => SCENES.map((scene, index) => (
    <article
      key={scene.id}
      data-scene-id={scene.id}
      data-scene-kind={scene.kind}
      aria-label={`${scene.kind === 'video' ? 'Video' : 'Photo'}: ${scene.title}`}
      className={`relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-900/10 ${
        horizontal ? 'w-[min(78vw,34vh,22rem)] flex-none' : 'w-full'
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

  return (
    <SectionShell id="on_the_floor" eyebrowNumber="02" eyebrow="On the floor" bgClass="bg-white">
      {reducedMotion ? (
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-6 max-w-3xl sm:mb-8">
            <h2 id="floor-gallery-title" className="type-h2">Watch Super Sales in Action</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {renderCards(false)}
          </div>
        </div>
      ) : (
        <div ref={trackRef} className="relative">
          <div ref={stageRef} className="sticky z-10 flex flex-col overflow-hidden bg-white py-5 sm:py-6 md:py-8">
            <div className="mb-5 max-w-3xl shrink-0 sm:mb-6">
              <h2 id="floor-gallery-title" className="type-h2">Watch Super Sales in Action</h2>
            </div>
            <div
              role="region"
              aria-labelledby="floor-gallery-title"
              className="min-h-0 flex-1 overflow-hidden"
            >
              <div ref={railRef} className="flex h-full w-max items-center gap-3 sm:gap-4 md:gap-5">
                {renderCards(true)}
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  )
}
