import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logonew-black.png'

const footerLinks = {
  company: [
    { href: '#products', label: 'Products' },
    { href: '#about_us', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact_us', label: 'Contact' },
  ],
  legal: [
    { href: '/tos', label: 'Terms' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ],
  connect: [
    {
      href: 'https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T',
      label: 'WhatsApp Channel',
      external: true,
    },
    { href: 'tel:+919899262264', label: '+91-9899262264' },
    { href: 'mailto:supersalesagro@gmail.com', label: 'supersalesagro@gmail.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200 px-3 sm:px-4 md:px-6">
        <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image src={Logo} loading="eager" alt="Super Sales Agro" width={180} height={48} className="h-8 w-auto" />
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
              <span className="text-slate-400">[03]</span>&nbsp;Legal
            </p>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-agro-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 py-6 md:flex-row md:items-center">
          <p className="text-sm text-slate-500">&copy; supersalesagro.com. All rights reserved.</p>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://twitter.com/absurdfounder"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition hover:border-agro-300 hover:text-agro-700"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/absurdfounder/supersales"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition hover:border-agro-300 hover:text-agro-700"
                aria-label="Github"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
