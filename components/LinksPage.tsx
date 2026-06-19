import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-super-sales-agro.png'
import BackgroundCover from '@/public/images/backgroundcover.png'
import { linkHubPrimaryLinks, linkHubShipping, linkHubSocialLinks, type SiteLink } from '@/lib/site-links'

function LinkHubButton({ link }: { link: SiteLink }) {
  const className = [
    'block w-full rounded-2xl border-2 px-6 py-4 text-center transition',
    link.highlight
      ? 'border-agro-600 bg-agro-50 font-funneldisplay text-lg font-bold text-slate-900 hover:bg-agro-100'
      : 'border-slate-900 bg-slate-50 font-funneldisplay text-lg font-bold text-slate-900 hover:bg-slate-100',
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
      <div className="pointer-events-none absolute inset-0 hero-checker-grid opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 pixel-flicker-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white/85 to-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-white via-white/98 to-transparent"
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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-12 pt-14 sm:px-8 sm:pt-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="sr-only">Super Sales Agro</h1>
          <Image
            src={Logo}
            unoptimized
            alt="Super Sales Agro"
            width={274}
            height={148}
            className="mb-4 h-auto w-full max-w-[240px] sm:max-w-[274px]"
          />

          <p className="rounded-full border border-slate-200 bg-white px-4 py-1.5 font-mono text-sm leading-relaxed text-slate-800">
            Good fruit for a good day
          </p>
        </div>

        <div className="mt-8 w-full rounded-3xl border-2 border-slate-900 bg-white p-5 sm:p-6">
          <ul className="w-full space-y-3">
            {linkHubPrimaryLinks.map((link) => (
              <li key={link.id}>
                <LinkHubButton link={link} />
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-slate-200 pt-6 text-center">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-800">
              {linkHubShipping.title}
            </p>
            <p className="mt-2 font-funneldisplay text-sm font-bold text-slate-900">
              Licence No. {linkHubShipping.licence}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-800">{linkHubShipping.address}</p>
            <a
              href={linkHubShipping.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border-2 border-slate-900 bg-slate-50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-100"
            >
              Open in Google Maps
            </a>
          </div>

          {homeLink ? (
            <div className="mt-6 border-t border-slate-200 pt-6 text-center">
              <Link
                href={homeLink.href}
                className="inline-block rounded-full border-2 border-slate-900 bg-slate-50 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-100"
              >
                Visit full website
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
