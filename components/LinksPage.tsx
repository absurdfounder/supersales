import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logonew-black.png'
import SectionShell from '@/components/ui/SectionShell'
import { PixelMissionTag } from '@/components/PixelAtmosphere'
import Footer from '@/components/ui/footer'
import { siteLinkGroups, type SiteLink } from '@/lib/site-links'

function LinkCard({ link }: { link: SiteLink }) {
  const className = [
    'group flex flex-col bg-white p-5 transition sm:p-6',
    link.highlight ? 'ring-1 ring-inset ring-agro/20 hover:bg-agro-50' : 'hover:bg-slate-50',
  ].join(' ')

  const content = (
    <>
      <p className="font-funneldisplay text-base font-bold text-slate-900 group-hover:text-agro-700 sm:text-lg">
        {link.label}
      </p>
      {link.description ? (
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{link.description}</p>
      ) : null}
      <span className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-600">
        Open link →
      </span>
    </>
  )

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
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
  return (
    <div className="bg-white pt-16 md:pt-[4.5rem]">
      <SectionShell eyebrowNumber="01" eyebrow="Quick links" bgClass="bg-white" noBorder>
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mx-auto mb-10 max-w-lg text-center">
            <Link href="/" className="mb-5 inline-block">
              <Image
                src={Logo}
                unoptimized
                alt="Super Sales Agro"
                width={220}
                height={48}
                className="mx-auto h-10 w-auto"
              />
            </Link>
            <PixelMissionTag index="SSA" label="Link hub" className="mb-5" />
            <h1 className="type-h2 mb-3">All our links</h1>
            <p className="type-body">
              Rates, WhatsApp updates, contact, and directions — everything in one place for traders and farmers.
            </p>
          </div>

          <div className="mx-auto max-w-2xl space-y-10">
            {siteLinkGroups.map((group, index) => (
              <section key={group.id}>
                <p className="type-eyebrow-num mb-4">
                  <span className="text-slate-400">[{String(index + 1).padStart(2, '0')}]</span>
                  <span>&nbsp;</span>
                  {group.title}
                </p>
                <div className="grid gap-px bg-slate-200">
                  {group.links.map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </SectionShell>

      <Footer />
    </div>
  )
}
