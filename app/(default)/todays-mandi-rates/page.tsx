import MandiRatesPage from '@/components/MandiRatesPage'

export const metadata = {
  title: 'Azadpur Mandi Prices Today | Apple, Kinnow, Mango',
  description:
    'Today’s Azadpur mandi fruit rates from Super Sales Agro. Apple, kinnow, mango, nashpati, pomegranate, and guava — Delhi and Himachal, updated each trading morning.',
  alternates: { canonical: 'https://supersalesagro.com/todays-mandi-rates' },
}

export default function TodaysMandiRatesPage() {
  return <MandiRatesPage />
}
