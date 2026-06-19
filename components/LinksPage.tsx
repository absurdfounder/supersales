import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-super-sales-agro.png'
import BackgroundCover from '@/public/images/backgroundcover.png'
import { linkHubPrimaryLinks, linkHubShipping, linkHubSocialLinks, type SiteLink } from '@/lib/site-links'

function LinkHubButton({ link }: { link: SiteLink }) {
  const className = [
    'block w-full rounded-2xl border-2 px-6 py-4 text-center shadow-sm backdrop-blur-sm transition hover:shadow-md',
    link.highlight
      ? 'border-agro-600 bg-agro-50/95 font-funneldisplay text-lg font-bold text-slate-900 hover:bg-agro-50'
      : 'border-slate-900/90 bg-white/92 font-funneldisplay text-lg font-bold text-slate-900 hover:bg-white',
  ].join(' ')

  const content = (
    <>
      <span>{link.label}</span>
      {link.description ? (
        <span className="mt-1 block font-mono text-xs font-normal text-slate-600">{link.description}</span>
      ) : null}
    </>
  )

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  )
}

export default function LinksPage() {
  const homeLink = linkHubSocialLinks[0]

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <Image
        src={BackgroundCover}
        unoptimized
        alt=""
        fill
        priority
        className="object-cover object-[center_22%] sm:object-[center_20%]"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 hero-sky-wash" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-checker-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 pixel-flicker-grid" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/35 via-white/10 to-white/92"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-3 border border-white/40 sm:inset-4" aria-hidden />
      <div
        className="pointer-events-none absolute left-3 top-3 z-10 h-4 w-4 border-l-2 border-t-2 border-agro-500/80 sm:left-4 sm:top-4"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-3 top-3 z-10 h-4 w-4 border-r-2 border-t-2 border-agro-500/80 sm:right-4 sm:top-4"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-14 sm:px-8 sm:pt-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="sr-only">Super Sales Agro</h1>
          <Image
            src={Logo}
            unoptimized
            alt="Super Sales Agro"
            width={274}
            height={148}
            className="mb-4 h-auto w-[min(100%,220px)] rounded-xl shadow-sm"
          />

          <p className="mt-1 max-w-xs font-mono text-sm leading-relaxed text-slate-800">
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

        <div className="mt-8 rounded-2xl border-2 border-slate-900/90 bg-white/92 p-5 text-center shadow-sm backdrop-blur-sm">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">
            {linkHubShipping.title}
          </p>
          <p className="mt-2 font-funneldisplay text-sm font-bold text-slate-900">
            Licence No. {linkHubShipping.licence}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{linkHubShipping.address}</p>
          <a
            href={linkHubShipping.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-mono text-xs font-bold uppercase tracking-[0.12em] text-agro-700 transition hover:text-agro-900"
          >
            Open in Google Maps
          </a>
        </div>

        {homeLink ? (
          <div className="mt-8 text-center">
            <Link
              href={homeLink.href}
              className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:text-agro-700"
            >
              Visit full website
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}
