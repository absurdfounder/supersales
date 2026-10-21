'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
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

type Pin = 'before' | 'fixed' | 'after'

type View = {
  pin: Pin
  index: number
  play: boolean
  stageH: number
  step: number
  sticky: number
  left: number
  width: number
}

const INITIAL_VIEW: View = {
  pin: 'before',
  index: 0,
  play: false,
  stageH: 0,
  step: 420,
  sticky: 64,
  left: 0,
  width: 0,
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function FrameCorners() {
  return (
    <>
      <div className="pointer-events-none absolute inset-3 border border-white/45 sm:inset-4" aria-hidden />
      <div className="pointer-events-none absolute left-3 top-3 z-10 h-4 w-4 border-l-2 border-t-2 border-agro-500/85 sm:left-4 sm:top-4" aria-hidden />
      <div className="pointer-events-none absolute right-3 top-3 z-10 h-4 w-4 border-r-2 border-t-2 border-agro-500/85 sm:right-4 sm:top-4" aria-hidden />
      <div className="pointer-events-none absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-agro-500/85 sm:bottom-4 sm:left-4" aria-hidden />
      <div className="pointer-events-none absolute bottom-3 right-3 z-10 h-4 w-4 border-b-2 border-r-2 border-agro-500/85 sm:bottom-4 sm:right-4" aria-hidden />
    </>
  )
}

function StillGallery() {
  return (
    <div className="-mx-3 grid gap-px bg-slate-200 sm:-mx-4 md:-mx-6">
      {SCENES.map((scene, index) => (
        <article key={scene.id} className="grid bg-white md:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)]">
          <div className="flex flex-col justify-center px-4 py-5 md:px-6 md:py-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-agro-700">
              {pad(index + 1)} / {pad(SCENES.length)} · {scene.kind === 'video' ? 'Clip' : 'Still'}
            </p>
            <h3 className="mt-2 font-funneldisplay text-xl font-bold text-slate-900">{scene.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{scene.caption}</p>
          </div>
          <div className="relative aspect-[4/5] bg-[#f6faf7] sm:aspect-video">
            {scene.kind === 'video' ? (
              <video
                data-floor=""
                src={scene.src}
                poster={scene.poster}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full bg-[#f6faf7] object-contain"
                onPlay={(event) => {
                  document.querySelectorAll<HTMLVideoElement>('video[data-floor]').forEach((node) => {
                    if (node !== event.currentTarget) node.pause()
                  })
                }}
              />
            ) : (
              <img
                src={scene.src}
                alt={scene.alt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: scene.objectPosition ?? 'center' }}
              />
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default function FloorGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef({ step: 420, sticky: 64 })
  const userPaused = useRef(false)
  const [reduced, setReduced] = useState(false)
  const [view, setView] = useState<View>(INITIAL_VIEW)
  const [sound, setSound] = useState(false)
  const [held, setHeld] = useState(false)
  const [blocked, setBlocked] = useState(false)

  const scene = SCENES[view.index] ?? SCENES[0]

  const scrollToScene = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const { step, sticky } = metricsRef.current
    const rect = track.getBoundingClientRect()
    const absoluteTop = window.scrollY + rect.top
    const target = absoluteTop - sticky + index * step + 8
    window.scrollTo({ top: target, behavior: 'smooth' })
  }, [])

  useLayoutEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduced(motion.matches)
    syncMotion()
    motion.addEventListener('change', syncMotion)

    let frame = 0
    const measure = () => {
      const track = trackRef.current
      if (!track || motion.matches) return
      const header = document.querySelector('header')
      const sticky = Math.round(header?.getBoundingClientRect().height || (window.innerWidth >= 768 ? 72 : 64))
      const stageH = window.innerHeight - sticky
      const step = Math.max(260, Math.round(window.innerHeight * 0.4))
      const nextHeight = `${stageH + SCENES.length * step}px`
      if (track.style.height !== nextHeight) track.style.height = nextHeight
      metricsRef.current = { step, sticky }

      const rect = track.getBoundingClientRect()
      const traveled = sticky - rect.top
      const max = SCENES.length * step
      const clamped = Math.min(Math.max(traveled, 0), max - 1)
      const index = Math.min(SCENES.length - 1, Math.floor(clamped / step))

      let pin: Pin = 'fixed'
      if (rect.top > sticky) pin = 'before'
      else if (rect.bottom < sticky + stageH - 1) pin = 'after'

      const stageTop = pin === 'fixed' ? sticky : rect.top
      const stageBottom = stageTop + stageH
      const visible = Math.min(stageBottom, window.innerHeight) - Math.max(stageTop, 0)
      const play = visible > stageH * 0.45 && !document.hidden

      setView((prev) => {
        if (
          prev.pin === pin &&
          prev.index === index &&
          prev.play === play &&
          prev.stageH === stageH &&
          prev.step === step &&
          prev.sticky === sticky &&
          Math.abs(prev.left - rect.left) < 0.5 &&
          Math.abs(prev.width - rect.width) < 0.5
        ) {
          return prev
        }
        return { pin, index, play, stageH, step, sticky, left: rect.left, width: rect.width }
      })
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
    window.addEventListener('visibilitychange', measure)
    window.visualViewport?.addEventListener('resize', measure)

    return () => {
      motion.removeEventListener('change', syncMotion)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      window.removeEventListener('visibilitychange', measure)
      window.visualViewport?.removeEventListener('resize', measure)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    userPaused.current = false
    setHeld(false)
    setBlocked(false)
    if (barRef.current) barRef.current.style.width = '0%'
  }, [view.index])

  useEffect(() => {
    if (reduced || scene.kind !== 'video') return
    const el = videoRef.current
    if (!el) return
    let cancelled = false
    el.muted = !sound

    if (!view.play || userPaused.current) {
      el.pause()
      return
    }

    const start = () => {
      if (cancelled || userPaused.current) return
      el.play()
        .then(() => setBlocked(false))
        .catch(() => {
          if (!cancelled) setBlocked(true)
        })
    }

    if (el.readyState >= 2) start()
    else el.addEventListener('canplay', start, { once: true })

    return () => {
      cancelled = true
      el.removeEventListener('canplay', start)
      el.pause()
    }
  }, [reduced, scene.kind, scene.src, view.play, view.index, sound])

  useEffect(() => {
    const next = SCENES[view.index + 1]
    if (!next || next.kind !== 'video') return
    const el = document.createElement('video')
    el.preload = 'auto'
    el.muted = true
    el.playsInline = true
    el.src = next.src
    return () => {
      el.pause()
      el.removeAttribute('src')
      el.load()
    }
  }, [view.index])

  const togglePlayback = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      userPaused.current = false
      setHeld(false)
      el.muted = !sound
      el.play()
        .then(() => setBlocked(false))
        .catch(() => setBlocked(true))
      return
    }
    userPaused.current = true
    setHeld(true)
    el.pause()
  }

  if (reduced) {
    return (
      <SectionShell id="on_the_floor" eyebrowNumber="02" eyebrow="On the floor" bgClass="bg-white">
        <div className="max-w-3xl pb-8 pt-2">
          <h2 className="type-h2">Watch a sale happen.</h2>
          <p className="type-body mt-3">
            Shops 61 and 62. Photos and clips from the floor — a lot opened, weighed, and sold.
          </p>
        </div>
        <StillGallery />
        <div className="h-8" />
      </SectionShell>
    )
  }

  const stageStyle: CSSProperties =
    view.pin === 'fixed'
      ? { position: 'fixed', top: view.sticky, left: view.left, width: view.width, height: view.stageH, zIndex: 20 }
      : view.pin === 'after'
        ? { position: 'absolute', left: 0, right: 0, bottom: 0, height: view.stageH }
        : { position: 'absolute', left: 0, right: 0, top: 0, height: view.stageH || undefined }

  const showHold = held || blocked

  return (
      <SectionShell id="on_the_floor" bgClass="bg-white" className="scroll-mt-16">
      <div
        ref={trackRef}
        className="relative -mx-3 min-h-[70vh] sm:-mx-4 md:-mx-6"
        style={view.stageH ? { height: view.stageH + SCENES.length * view.step } : undefined}
        data-floor-index={view.index}
      >
        <div
          className={`bg-white ${view.stageH ? '' : 'h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)]'}`}
          style={stageStyle}
        >
          <div className="flex h-full flex-col overflow-hidden md:grid md:grid-cols-[minmax(17rem,22.5rem)_minmax(0,1fr)]">
            <div className="order-2 flex shrink-0 flex-col gap-3 border-t border-slate-200 bg-white px-3 py-3 pr-16 md:order-1 md:h-full md:justify-between md:overflow-y-auto md:border-r md:border-t-0 md:px-6 md:py-7 md:pr-6">
              <div>
                <span className="type-eyebrow-num">
                  <span className="text-slate-400">[02]</span>
                  <span>&nbsp;</span>
                  On the floor
                </span>
                <h2 className="mt-3 font-funneldisplay text-xl font-bold leading-tight tracking-tight text-slate-900 md:mt-4 md:text-3xl">
                  Watch a sale happen.
                </h2>
                <p className="mt-2 hidden text-sm leading-relaxed text-slate-600 md:block">
                  Shops 61 and 62. Scroll the morning — one scene plays at a time.
                </p>

                <div key={scene.id} className="floor-in mt-6 border-t border-slate-200 pt-5 md:mt-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-agro-700">
                  {pad(view.index + 1)} / {pad(SCENES.length)} · {scene.kind === 'video' ? 'Clip' : 'Still'}
                </p>
                <h3 className="mt-1.5 font-funneldisplay text-lg font-bold text-slate-900 md:mt-2 md:text-2xl">
                  {scene.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600 md:line-clamp-none md:text-base">
                  {scene.caption}
                </p>
              </div>
              </div>

              <div>
                <div className="flex gap-1" role="tablist" aria-label="Scenes from the floor">
                  {SCENES.map((item, index) => {
                    const active = index === view.index
                    const passed = index < view.index
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        aria-label={`${item.title}, ${item.kind === 'video' ? 'clip' : 'photo'} ${index + 1} of ${SCENES.length}`}
                        onClick={() => scrollToScene(index)}
                        className="flex h-8 flex-1 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro"
                      >
                        <span
                          className={`block w-full ${active ? 'h-1.5 bg-agro' : passed ? 'h-1 bg-agro/40' : 'h-1 bg-slate-200'}`}
                        />
                      </button>
                    )
                  })}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToScene(Math.max(0, view.index - 1))}
                    disabled={view.index === 0}
                    className="border border-slate-200 px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-agro hover:text-agro-700 disabled:pointer-events-none disabled:opacity-40"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToScene(Math.min(SCENES.length - 1, view.index + 1))}
                    disabled={view.index === SCENES.length - 1}
                    className="border border-slate-200 px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-agro hover:text-agro-700 disabled:pointer-events-none disabled:opacity-40"
                  >
                    Next
                  </button>
                  {scene.kind === 'video' && (
                    <button
                      type="button"
                      onClick={() => setSound((value) => !value)}
                      aria-pressed={sound}
                      className="border border-slate-200 px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-agro hover:text-agro-700"
                    >
                      {sound ? 'Sound on' : 'Sound off'}
                    </button>
                  )}
                </div>

                {view.index === 0 && (
                  <p className="mt-3 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-agro-700">
                    <span className="floor-nudge inline-block" aria-hidden>
                      ↓
                    </span>
                    Scroll to move through the morning
                  </p>
                )}
                {view.index > 0 && view.index < SCENES.length - 1 && (
                  <p className="mt-3 hidden font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 md:block">
                    Next · {SCENES[view.index + 1].title}
                  </p>
                )}
              </div>
            </div>

            <div className="relative order-1 min-h-[14rem] flex-1 bg-[#f6faf7] md:order-2 md:min-h-0">
              {scene.kind === 'video' && (
                <div className="pointer-events-none absolute inset-0 pixel-flicker-grid" aria-hidden />
              )}
              <div key={scene.id} className="floor-in absolute inset-0">
                {scene.kind === 'video' ? (
                  <video
                    ref={videoRef}
                    src={scene.src}
                    poster={scene.poster}
                    muted={!sound}
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    aria-label={scene.alt}
                    className="h-full w-full cursor-pointer bg-transparent object-contain"
                    onClick={togglePlayback}
                    onTimeUpdate={(event) => {
                      const el = event.currentTarget
                      if (!barRef.current || !el.duration) return
                      barRef.current.style.width = `${(el.currentTime / el.duration) * 100}%`
                    }}
                  />
                ) : (
                  <img
                    src={scene.src}
                    alt={scene.alt}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: scene.objectPosition ?? 'center' }}
                    draggable={false}
                  />
                )}
              </div>
              <FrameCorners />
              {scene.kind === 'video' && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5 bg-slate-900/10">
                  <div ref={barRef} className="h-full w-0 bg-agro" />
                </div>
              )}
              {scene.kind === 'video' && showHold && (
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-white/30 bg-slate-900/80 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
                >
                  {blocked ? 'Play clip' : 'Paused'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
