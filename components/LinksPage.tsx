import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logonew-black.png'
import appleHero from '@/public/images/appleicon.png'
import { linkHubPrimaryLinks, linkHubSocialLinks, type SiteLink } from '@/lib/site-links'

function LinkHubButton({ link }: { link: SiteLink }) {
  const className =
    'block w-full rounded-2xl border-2 border-slate-900 bg-slate-100/90 px-6 py-4 text-center font-funneldisplay text-lg font-bold text-slate-900 transition hover:bg-white hover:shadow-sm'

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  )
}

function SocialIcon({ link }: { link: SiteLink }) {
  const iconClass = 'h-6 w-6 text-slate-900 transition hover:text-agro-700'

  const icons: Record<string, ReactNode> = {
    'whatsapp-channel': (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    call: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
      </svg>
    ),
  }

  const icon = icons[link.id]

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="rounded-full p-2 transition hover:bg-white/70"
      >
        {icon}
      </a>
    )
  }

  return (
    <Link href={link.href} aria-label={link.label} className="rounded-full p-2 transition hover:bg-white/70">
      {icon}
    </Link>
  )
}

export default function LinksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-200/80 via-slate-100 to-white">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-44 pt-14 sm:px-8 sm:pt-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-agro-100 ring-2 ring-agro/20">
            <Image
              src={Logo}
              unoptimized
              alt=""
              width={72}
              height={72}
              className="h-14 w-auto object-contain"
            />
          </div>

          <h1 className="font-funneldisplay text-[1.75rem] font-extrabold leading-tight text-slate-900 sm:text-3xl">
            Super Sales Agro
          </h1>
          <p className="mt-3 max-w-xs font-mono text-sm leading-relaxed text-slate-700">
            Good fruit for a good day
          </p>
        </div>

        <ul className="mt-10 w-full space-y-4">
          {linkHubPrimaryLinks.map((link) => (
            <li key={link.id}>
              <LinkHubButton link={link} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-center gap-3">
          {linkHubSocialLinks.map((link) => (
            <SocialIcon key={link.id} link={link} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-[min(48vh,420px)] items-end justify-center">
        <Image
          src={appleHero}
          unoptimized
          alt=""
          width={640}
          height={640}
          className="h-full w-auto max-w-[min(100%,520px)] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
          priority
        />
      </div>
    </div>
  )
}
