'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
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
  const railRef = useRef<HTMLDivElement>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(true)

  const updateScrollState = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    setCanScrollBack(rail.scrollLeft > 8)
    setCanScrollForward(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    updateScrollState()
    rail.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      rail.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.8, 720),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <SectionShell id="on_the_floor" eyebrowNumber="02" eyebrow="On the floor" bgClass="bg-white">
      <div className="pb-10 pt-2 md:pb-14">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div className="max-w-3xl">
            <h2 className="type-h2">Watch Super Sales in Action</h2>
            <p className="type-body mt-3">
              Step onto the mandi floor — real moments from the first look at a lot to loading out.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              disabled={!canScrollBack}
              aria-label="Show previous videos and photos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-agro hover:text-agro-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden>
                <path d="m12.5 4.5-5.5 5.5 5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              disabled={!canScrollForward}
              aria-label="Show more videos and photos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-agro hover:text-agro-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden>
                <path d="m7.5 4.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          role="region"
          aria-label="Super Sales Agro videos and photos"
          tabIndex={0}
          className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-agro sm:-mx-4 sm:gap-4 sm:px-4 md:-mx-6 md:gap-5 md:px-6"
        >
          {SCENES.map((scene, index) => (
            <article
              key={scene.id}
              className="group relative aspect-[9/16] w-[72vw] max-w-[14rem] flex-none snap-start overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:w-[13rem] md:w-[14rem]"
            >
              {scene.kind === 'video' && activeVideo === scene.id ? (
                <video
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
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between gap-3 sm:hidden">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Swipe to explore
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              disabled={!canScrollBack}
              aria-label="Show previous videos and photos"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden>
                <path d="m12.5 4.5-5.5 5.5 5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              disabled={!canScrollForward}
              aria-label="Show more videos and photos"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden>
                <path d="m7.5 4.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
