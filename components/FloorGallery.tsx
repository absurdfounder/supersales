'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SectionShell from '@/components/ui/SectionShell'

type Scene = {
  id: string
  kind: 'video' | 'photo'
  src: string
  poster?: string
  title: string
  caption: string
  alt: string
  objectPosition?: string
}

const SCENES: Scene[] = [
  {
    id: 'shop',
    kind: 'photo',
    src: '/media/floor/p-shop.jpg',
    title: 'Shops 61 & 62',
    caption: 'The SSA board under the yellow tarp. Cartons out front, the morning already moving.',
    alt: 'Super Sales Agro shops 61 and 62, with stacked apple cartons under a yellow tarp',
    objectPosition: '18% 48%',
  },
  {
    id: 'walk',
    kind: 'video',
    src: '/media/floor/v02.mp4',
    poster: '/media/floor/posters/v02.jpg',
    title: 'Through the shed',
    caption: 'Kinnaur cartons stacked down the aisle, buyers already in among them.',
    alt: 'Walking through a fruit shed lined with stacked Kinnaur apple cartons',
  },
  {
    id: 'scale',
    kind: 'video',
    src: '/media/floor/v01.mp4',
    poster: '/media/floor/posters/v01.jpg',
    title: 'On the scale',
    caption: 'A carton goes on the scale before anyone talks rate.',
    alt: 'An apple carton on a weighing scale',
  },
  {
    id: 'truck',
    kind: 'video',
    src: '/media/floor/v03.mp4',
    poster: '/media/floor/posters/v03.jpg',
    title: 'Loading out',
    caption: 'One truck fills. The next lot is already stacked in front of it.',
    alt: 'A truck being loaded with apple cartons at the mandi',
  },
  {
    id: 'open-box',
    kind: 'photo',
    src: '/media/floor/p-open-box.jpg',
    title: 'An open box',
    caption: 'Colour, size, and feel — checked by hand, not from a sheet.',
    alt: 'Buyers inspecting an open carton of Kinnaur apples inside the shed',
  },
  {
    id: 'circle',
    kind: 'video',
    src: '/media/floor/v04.mp4',
    poster: '/media/floor/posters/v04.jpg',
    title: 'The circle',
    caption: 'The box opens and buyers close in. This is the sale.',
    alt: 'A group of buyers gathered around an open apple carton',
  },
  {
    id: 'plums',
    kind: 'photo',
    src: '/media/floor/p-plums.jpg',
    title: 'Apples and plums',
    caption: 'Himachal apples in the carton, plums in the punnets beside them.',
    alt: 'Open cartons of apples and punnets of plums with buyers tasting fruit',
  },
  {
    id: 'rows',
    kind: 'video',
    src: '/media/floor/v05.mp4',
    poster: '/media/floor/posters/v05.jpg',
    title: 'Row after row',
    caption: 'Kinnaur and Himachal apples, strapped and waiting under the tin roof.',
    alt: 'Aisles of stacked apple cartons under a corrugated shed roof',
  },
  {
    id: 'lane',
    kind: 'video',
    src: '/media/floor/v06.mp4',
    poster: '/media/floor/posters/v06.jpg',
    title: 'Lane to lane',
    caption: 'Buyers move through the shed, lot to lot.',
    alt: 'Buyers walking between stacks of apple boxes',
  },
  {
    id: 'fans',
    kind: 'photo',
    src: '/media/floor/p-fans.jpg',
    title: 'Under the fans',
    caption: 'The same boxes, a wider circle, the morning trade in full swing.',
    alt: 'A crowded fruit shed with ceiling fans and buyers around open apple boxes',
  },
  {
    id: 'stacks',
    kind: 'video',
    src: '/media/floor/v07.mp4',
    poster: '/media/floor/posters/v07.jpg',
    title: 'Beside the stacks',
    caption: 'Tray-packed Kinnaur apples, stacked and marked.',
    alt: 'Tall stacks of Kinnaur apple cartons beside a buyer',
  },
  {
    id: 'boards',
    kind: 'video',
    src: '/media/floor/v08.mp4',
    poster: '/media/floor/posters/v08.jpg',
    title: 'Under the boards',
    caption: 'Shop numbers overhead. Boxes on both sides of the lane.',
    alt: 'A mandi lane with shop boards overhead and apple cartons stacked on both sides',
  },
  {
    id: 'roof',
    kind: 'video',
    src: '/media/floor/v09.mp4',
    poster: '/media/floor/posters/v09.jpg',
    title: 'Up to the roof',
    caption: 'Cartons piled high enough to change the light in the aisle.',
    alt: 'Apple cartons stacked high toward the shed roof',
  },
  {
    id: 'platform',
    kind: 'photo',
    src: '/media/floor/p-platform.jpg',
    title: 'On the platform',
    caption: 'A call goes out while the lot is still being seen.',
    alt: 'Buyers standing on a raised platform among apple cartons, one of them on the phone',
  },
  {
    id: 'queue',
    kind: 'video',
    src: '/media/floor/v10.mp4',
    poster: '/media/floor/posters/v10.jpg',
    title: 'A turn at the box',
    caption: 'Himachal apples opened at the edge of the shed. Everyone waits a look.',
    alt: 'Buyers lined up at an open box of Himachal apples',
  },
  {
    id: 'sale',
    kind: 'video',
    src: '/media/floor/v11.mp4',
    poster: '/media/floor/posters/v11.jpg',
    title: 'The sale itself',
    caption: 'Shoulders in, fruit in the middle, a rate getting made.',
    alt: 'A dense crowd of buyers in the middle of a fruit sale',
  },
  {
    id: 'closer',
    kind: 'video',
    src: '/media/floor/v12.mp4',
    poster: '/media/floor/posters/v12.jpg',
    title: 'Closer in',
    caption: 'Another moment in the same crowd. Nobody is watching from a distance.',
    alt: 'Buyers pressed close together around a sale inside the shed',
  },
  {
    id: 'himachal',
    kind: 'photo',
    src: '/media/floor/p-himachal.jpg',
    title: 'Opened on the spot',
    caption: 'Himachal apples, the carton cut open for anyone who wants a look.',
    alt: 'Buyers inspecting open cartons of Himachal apples outdoors',
    objectPosition: 'center 40%',
  },
  {
    id: 'outside',
    kind: 'video',
    src: '/media/floor/v13.mp4',
    poster: '/media/floor/posters/v13.jpg',
    title: 'Outside the shed',
    caption: 'Papers, boxes, and a knot of buyers in the sun.',
    alt: 'Buyers gathered around apple cartons outside the shed',
  },
  {
    id: 'hands',
    kind: 'photo',
    src: '/media/floor/p-hands.jpg',
    title: 'In the box',
    caption: 'Hands on the fruit. Firmness and colour decide the number.',
    alt: 'Buyers with their hands in open cartons of Himachal apples',
  },
  {
    id: 'lift',
    kind: 'video',
    src: '/media/floor/v14.mp4',
    poster: '/media/floor/posters/v14.jpg',
    title: 'Lifted away',
    caption: 'Once it’s taken, the box moves.',
    alt: 'A buyer lifting a full carton of apples',
  },
  {
    id: 'shut',
    kind: 'video',
    src: '/media/floor/v15.mp4',
    poster: '/media/floor/posters/v15.jpg',
    title: 'Strapped shut',
    caption: 'Closed, taped, and ready to leave the floor.',
    alt: 'A worker closing and strapping apple cartons',
  },
  {
    id: 'end',
    kind: 'video',
    src: '/media/floor/v16.mp4',
    poster: '/media/floor/posters/v16.jpg',
    title: 'End of the round',
    caption: 'Buyers still on the platform, looking over what the morning has left.',
    alt: 'Buyers standing on a platform looking over stacked apple cartons',
  },
]

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function FloorGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReducedMotion(motion.matches)
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

      const video = videoRef.current
      if (video) {
        const videoRect = video.getBoundingClientRect()
        const stageRect = stage.getBoundingClientRect()
        if (
          videoRect.right <= stageRect.left ||
          videoRect.left >= stageRect.right ||
          videoRect.bottom <= stickyTop ||
          videoRect.top >= window.innerHeight
        ) {
          video.pause()
        }
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
      className={`group relative aspect-[9/16] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm ${
        horizontal ? 'w-[72vw] max-w-[13rem] flex-none sm:w-[13rem] md:w-[14rem]' : 'w-full'
      }`}
    >
      {scene.kind === 'video' && activeVideo === scene.id ? (
        <video
          ref={videoRef}
          src={scene.src}
          poster={scene.poster}
          autoPlay
          muted
          controls
          loop
          playsInline
          preload="metadata"
          aria-label={scene.alt}
          className="absolute inset-0 h-full w-full bg-slate-950 object-cover"
        />
      ) : (
        <img
          src={scene.kind === 'video' ? scene.poster ?? scene.src : scene.src}
          alt={scene.kind === 'photo' ? scene.alt : ''}
          aria-hidden={scene.kind === 'video' ? true : undefined}
          className="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: scene.objectPosition ?? 'center' }}
          draggable={false}
          loading={index < 5 ? 'eager' : 'lazy'}
        />
      )}

      <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-full border border-white/35 bg-slate-950/45 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        {pad(index + 1)} · {scene.kind === 'video' ? 'Short' : 'Photo'}
      </span>

      {scene.kind === 'video' && activeVideo !== scene.id && (
        <button
          type="button"
          onClick={() => setActiveVideo(scene.id)}
          aria-label={`Play video: ${scene.title}`}
          className="absolute inset-0 z-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-agro"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/90 text-agro-700 shadow-lg backdrop-blur-sm transition group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M8 5.8c0-.8.9-1.3 1.6-.9l9.2 5.3a1 1 0 0 1 0 1.7l-9.2 5.3c-.7.4-1.6-.1-1.6-.9V5.8Z" />
            </svg>
          </span>
        </button>
      )}

      {scene.kind !== 'video' || activeVideo !== scene.id ? (
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
      ) : (
        <span className="pointer-events-none absolute bottom-12 left-3 z-10 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white/90 drop-shadow">
          Now playing
        </span>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4">
        {activeVideo === scene.id ? null : (
          <>
            <h3 className="font-funneldisplay text-lg font-bold leading-tight text-white drop-shadow-sm">
              {scene.title}
            </h3>
            <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/85">{scene.caption}</p>
          </>
        )}
      </div>
    </article>
  ))

  return (
    <SectionShell id="on_the_floor" eyebrowNumber="02" eyebrow="On the floor" bgClass="bg-white">
      {reducedMotion ? (
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-6 max-w-3xl sm:mb-8">
            <h2 id="floor-gallery-title" className="type-h2">Watch Super Sales in Action</h2>
            <p className="type-body mt-3">
              Step onto the mandi floor — real moments from the first look at a lot to loading out.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {renderCards(false)}
          </div>
        </div>
      ) : (
        <div ref={trackRef} className="relative">
          <div ref={stageRef} className="sticky z-10 flex flex-col justify-center overflow-hidden bg-white py-5 sm:py-6 md:py-8">
            <div className="mb-5 max-w-3xl shrink-0 sm:mb-6">
              <h2 id="floor-gallery-title" className="type-h2">Watch Super Sales in Action</h2>
              <p className="type-body mt-2 sm:mt-3">
                Step onto the mandi floor — real moments from the first look at a lot to loading out.
              </p>
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
            <p className="mt-3 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Keep scrolling to see more
            </p>
          </div>
        </div>
      )}
    </SectionShell>
  )
}
