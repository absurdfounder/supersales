export type SiteLink = {
  id: string
  label: string
  description?: string
  href: string
  external?: boolean
  highlight?: boolean
}

export type SiteLinkGroup = {
  id: string
  title: string
  links: SiteLink[]
}

export const linkHubPrimaryLinks: SiteLink[] = [
  {
    id: 'mandi-rates',
    label: "Today's mandi rates",
    href: '/todays-mandi-rates',
  },
  {
    id: 'whatsapp-chat',
    label: 'WhatsApp us',
    href: 'https://wa.me/919899262264?text=Hi%20Super%20Sales%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20today%27s%20mandi%20rates.',
    external: true,
  },
  {
    id: 'about',
    label: 'Our story',
    href: '/#about_us',
  },
  {
    id: 'export',
    label: 'Export',
    href: '/export',
  },
  {
    id: 'locations',
    label: 'Locations',
    href: '/#contact_us',
  },
]

export const linkHubSocialLinks: SiteLink[] = [
  {
    id: 'whatsapp-channel',
    label: 'WhatsApp channel',
    href: 'https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T',
    external: true,
  },
  {
    id: 'call',
    label: 'Call mandi desk',
    href: 'tel:+919899262264',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:supersalesagro@gmail.com',
    external: true,
  },
  {
    id: 'home',
    label: 'Website',
    href: '/',
  },
]

export const siteLinkGroups: SiteLinkGroup[] = [
  {
    id: 'daily',
    title: 'Daily updates',
    links: [
      {
        id: 'mandi-rates',
        label: "Today's mandi rates",
        description: 'Wholesale fruit prices from Azadpur & Himachal',
        href: '/todays-mandi-rates',
        highlight: true,
      },
      {
        id: 'whatsapp-channel',
        label: 'WhatsApp channel',
        description: 'Daily rates, arrivals & market briefings',
        href: 'https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T',
        external: true,
        highlight: true,
      },
    ],
  },
  {
    id: 'website',
    title: 'Website',
    links: [
      {
        id: 'home',
        label: 'Super Sales Agro home',
        description: '42+ years in Delhi & Himachal mandis',
        href: '/',
      },
      {
        id: 'products',
        label: 'Our produce',
        description: 'Apples, mangoes, kinnow, pears & more',
        href: '/#products',
      },
      {
        id: 'about',
        label: 'About us',
        description: 'Family-owned wholesaler since 1982',
        href: '/#about_us',
      },
      {
        id: 'export',
        label: 'Export programme',
        description: 'U.K., Europe, Australia, Middle East & SE Asia',
        href: '/export',
      },
      {
        id: 'testimonials',
        label: 'Farmer testimonials',
        href: '/#testimonials',
      },
      {
        id: 'contact',
        label: 'Contact & locations',
        href: '/#contact_us',
      },
    ],
  },
  {
    id: 'reach',
    title: 'Reach us',
    links: [
      {
        id: 'call-primary',
        label: 'Call mandi desk',
        description: '+91-9899262264',
        href: 'tel:+919899262264',
        external: true,
      },
      {
        id: 'call-secondary',
        label: 'Alternate line',
        description: '+91-9711269346',
        href: 'tel:+919711269346',
        external: true,
      },
      {
        id: 'email',
        label: 'Email us',
        description: 'supersalesagro@gmail.com',
        href: 'mailto:supersalesagro@gmail.com',
        external: true,
      },
    ],
  },
  {
    id: 'locations',
    title: 'Visit us',
    links: [
      {
        id: 'head-office',
        label: 'Head office · Azadpur',
        description: 'A-285, New Subzi Mandi, Delhi-110034',
        href: 'https://www.google.com/maps/place/Super+Sales+Agro+(SSA)/@28.7116913,77.1662854,17z',
        external: true,
      },
      {
        id: 'auction-site',
        label: 'Auction site',
        description: 'Licence B-4881, Azadpur mandi',
        href: 'https://www.google.com/maps/place/Super+sales+agro+(SSA)+Auction+Site/@28.8331576,77.1288924,17z',
        external: true,
      },
    ],
  },
]
