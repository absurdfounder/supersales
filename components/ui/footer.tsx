import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-super-sales-agro.png'
import { seoLandings } from '@/lib/seo-landings'

const footerLinks = {
  company: [
    { href: '/#products', label: 'Products' },
    { href: '/#about_us', label: 'About Us' },
    { href: '/todays-mandi-rates', label: "Today's Mandi Rates" },
    { href: '/wholesale', label: 'Wholesale' },
    { href: '/hospitality', label: 'Hospitality & Retail' },
    { href: '/export', label: 'Export' },
    { href: '/links', label: 'Links' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#contact_us', label: 'Contact' },
  ],
  produce: [
    ...seoLandings.map((page) => ({ href: `/${page.slug}`, label: page.eyebrow })),
    { href: '/hi/aaj-ka-bhav', label: 'आज का भाव' },
  ],
  connect: [
    {
      href: 'https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T',
      label: 'WhatsApp Channel',
      external: true,
    },
    { href: 'tel:+919899262264', label: '+91-9899262264' },
    { href: 'mailto:supersalesagro@gmail.com', label: 'supersalesagro@gmail.com' },
    { href: 'https://mangroveharvest.com/', label: 'Mangrove Harvest — USA & Canada', external: true },
  ],
}

export function FooterGrid() {
  return (
    <>
      <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="mb-4 inline-flex items-center gap-3">
            <Image
              src={Logo}
              loading="eager"
              alt=""
              width={274}
              height={148}
              className="h-10 w-auto"
              aria-hidden
            />
            <span className="font-funneldisplay text-lg font-extrabold text-slate-900">Super Sales Agro</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-600">
            India&apos;s trusted fruit wholesaler since 1982. 65,000+ MT of fresh produce every year from Delhi and
            Himachal mandis.
          </p>
        </div>

        <div className="bg-white p-6">
          <p className="type-eyebrow-num mb-4 text-[10px]">
            <span className="text-slate-400">[01]</span>&nbsp;Navigate
          </p>
          <ul className="space-y-2 text-sm">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-600 transition hover:text-agro-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6">
          <p className="type-eyebrow-num mb-4 text-[10px]">
            <span className="text-slate-400">[02]</span>&nbsp;Connect
          </p>
          <ul className="space-y-2 text-sm">
            {footerLinks.connect.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={'external' in link && link.external ? '_blank' : undefined}
                  rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                  className="text-slate-600 transition hover:text-agro-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6">
          <p className="type-eyebrow-num mb-4 text-[10px]">
            <span className="text-slate-400">[03]</span>&nbsp;Fruit &amp; mandi
          </p>
          <ul className="space-y-2 text-sm">
            {footerLinks.produce.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-600 transition hover:text-agro-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white px-6 py-6">
        <p className="text-sm text-slate-500">&copy; supersalesagro.com. All rights reserved.</p>
      </div>
    </>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200 px-3 sm:px-4 md:px-6">
        <div className="grid gap-px bg-slate-200">
          <FooterGrid />
        </div>
      </div>
    </footer>
  )
}
