# Super Sales Agro

Marketing site for **Super Sales Agro** — fruit wholesalers in Delhi & Himachal mandis since 1982.

**Live site:** [supersalesagro.com](https://supersalesagro.com)

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, products, partners, supply chain, testimonials, contact |
| `/todays-mandi-rates` | Daily wholesale fruit rates from Azadpur & Himachal |
| `/wholesale` | Processors, exporters & wholesale suppliers (Indian & imported fruit) |
| `/hospitality` | Hotels, restaurants, caterers, banquets, retail chains |
| `/export` | Export programme — U.K., Europe, Australia, Middle East, SE Asia |
| `/links` | Mobile link hub — WhatsApp channel, call, shipping address |

## Features

- **Brand** — fruit logo in header, hero, footer, and `/links`
- **Google Translate** — language selector in header / mobile menu; preference stored in `googtrans` cookie
- **Floating WhatsApp** — quick chat CTA on all pages except `/links`
- **Editable content** — rates, export copy, wholesale/hospitality copy live in `lib/`

## Project structure

```
app/
  (default)/          # Public marketing routes
  layout.tsx          # Root layout, fonts, Google Translate boot
components/
  hero.tsx            # Homepage hero
  LinksPage.tsx       # /links hub
  WholesalePage.tsx   # /wholesale
  HospitalityPage.tsx # /hospitality
  ExportPage.tsx      # /export
  MandiRatesPage.tsx  # /todays-mandi-rates
  ui/                 # Header, footer, buttons, translate control
lib/
  mandi-rates.ts      # Daily rate data (edit here)
  export-content.ts   # Export page copy
  wholesale-content.ts
  hospitality-content.ts
  site-links.ts       # /links hub URLs & shipping details
public/images/        # Logos, product icons, photos
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run production server locally
npm run lint    # ESLint
```

## Editing content

| What to change | File |
|----------------|------|
| Mandi rates | `lib/mandi-rates.ts` |
| Export markets & products | `lib/export-content.ts` |
| Wholesale copy | `lib/wholesale-content.ts` |
| Hospitality copy | `lib/hospitality-content.ts` |
| Link hub buttons & shipping | `lib/site-links.ts` |
| Contact / office details | `components/testimonials.tsx` (contact section) |

## Google Translate notes

- Language selection is handled by `components/ui/TranslateButton.tsx` and `app/utils/googleTranslateHelper.js`.
- Translation loads **after** React hydration (`components/GoogleTranslateBoot.tsx`) to avoid DOM conflicts.
- Selecting **English** clears all `googtrans` cookies and reloads the page.
- If a language appears stuck after testing, clear site cookies for `googtrans` or pick English from the language menu again.

## Deploy

Standard Next.js deployment (e.g. Vercel):

```bash
npm run build
```

Set the production domain in your host; no extra env vars required for the marketing site.

## Repository

[github.com/absurdfounder/supersales](https://github.com/absurdfounder/supersales)

## Contact

- **Phone:** +91-9899262264
- **Email:** supersalesagro@gmail.com
- **WhatsApp channel:** linked from `/links` and site footer
