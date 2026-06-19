export type MandiTrend = 'up' | 'down' | 'stable'

export type MandiRate = {
  id: string
  fruit: string
  emoji: string
  variety: string
  mandi: string
  rateMin: number
  rateMax: number
  unit: string
  trend: MandiTrend
  note?: string
}

/** Update this date whenever rates are refreshed for the day. */
export const mandiRatesMeta = {
  lastUpdated: '2026-06-19',
  session: 'Morning',
  source: 'Azadpur & Himachal mandi floor checks',
  /** Set true when daily rates are confirmed and entered below. */
  ratesPublished: false,
}

export const mandiLocations = ['All mandis', 'Azadpur, Delhi', 'Shimla, HP', 'Solan, HP'] as const

export const mandiRates: MandiRate[] = [
  {
    id: 'apple-azadpur',
    fruit: 'Apple',
    emoji: '🍎',
    variety: 'Royal Delicious · A-grade',
    mandi: 'Azadpur, Delhi',
    rateMin: 92,
    rateMax: 108,
    unit: '₹/kg',
    trend: 'stable',
  },
  {
    id: 'apple-shimla',
    fruit: 'Apple',
    emoji: '🍎',
    variety: 'Royal Delicious · A-grade',
    mandi: 'Shimla, HP',
    rateMin: 78,
    rateMax: 94,
    unit: '₹/kg',
    trend: 'up',
  },
  {
    id: 'kinnow-azadpur',
    fruit: 'Kinnow',
    emoji: '🍊',
    variety: 'Premium · 48+ count',
    mandi: 'Azadpur, Delhi',
    rateMin: 34,
    rateMax: 42,
    unit: '₹/kg',
    trend: 'down',
  },
  {
    id: 'orange-azadpur',
    fruit: 'Orange',
    emoji: '🍊',
    variety: 'Nagpur · medium',
    mandi: 'Azadpur, Delhi',
    rateMin: 38,
    rateMax: 46,
    unit: '₹/kg',
    trend: 'stable',
  },
  {
    id: 'mango-azadpur',
    fruit: 'Mango',
    emoji: '🥭',
    variety: 'Dasheri · ripe',
    mandi: 'Azadpur, Delhi',
    rateMin: 52,
    rateMax: 68,
    unit: '₹/kg',
    trend: 'up',
    note: 'Seasonal peak',
  },
  {
    id: 'pear-shimla',
    fruit: 'Pear',
    emoji: '🍐',
    variety: 'Baggi Gola',
    mandi: 'Shimla, HP',
    rateMin: 64,
    rateMax: 76,
    unit: '₹/kg',
    trend: 'stable',
  },
  {
    id: 'pomegranate-azadpur',
    fruit: 'Pomegranate',
    emoji: '🫐',
    variety: 'Bhagwa · large',
    mandi: 'Azadpur, Delhi',
    rateMin: 118,
    rateMax: 142,
    unit: '₹/kg',
    trend: 'up',
  },
  {
    id: 'guava-azadpur',
    fruit: 'Guava',
    emoji: '🍈',
    variety: 'Lucknow · green',
    mandi: 'Azadpur, Delhi',
    rateMin: 28,
    rateMax: 36,
    unit: '₹/kg',
    trend: 'stable',
  },
  {
    id: 'apple-solan',
    fruit: 'Apple',
    emoji: '🍎',
    variety: 'Red Gold · B-grade',
    mandi: 'Solan, HP',
    rateMin: 58,
    rateMax: 72,
    unit: '₹/kg',
    trend: 'down',
  },
  {
    id: 'pear-azadpur',
    fruit: 'Pear',
    emoji: '🍐',
    variety: 'Williams · import',
    mandi: 'Azadpur, Delhi',
    rateMin: 88,
    rateMax: 104,
    unit: '₹/kg',
    trend: 'stable',
  },
]

export function formatRateRange(rate: MandiRate) {
  if (!mandiRatesMeta.ratesPublished) return '--'
  if (rate.rateMin === rate.rateMax) return `₹${rate.rateMin}`
  return `₹${rate.rateMin}–${rate.rateMax}`
}

export function formatRateTrend(rate: MandiRate) {
  if (!mandiRatesMeta.ratesPublished) return null
  return rate.trend
}

export function formatUpdatedDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`)
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
