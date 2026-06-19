'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import Footer from '@/components/ui/footer'
import {
  formatRateRange,
  formatRateTrend,
  formatUpdatedDate,
  mandiLocations,
  mandiRates,
  mandiRatesMeta,
  type MandiRate,
  type MandiTrend,
} from '@/lib/mandi-rates'

const WHATSAPP_URL = 'https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T'

function TrendBadge({ trend }: { trend: MandiTrend | null }) {
  if (!trend) {
    return (
      <span className="inline-flex rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 bg-slate-100">
        —
      </span>
    )
  }

  const styles = {
    up: 'text-agro-700 bg-agro-50',
    down: 'text-rose-700 bg-rose-50',
    stable: 'text-slate-600 bg-slate-100',
  } as const

  const labels = {
    up: '↑ Up',
    down: '↓ Down',
    stable: '→ Stable',
  } as const

  return (
    <span className={`inline-flex rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${styles[trend]}`}>
      {labels[trend]}
    </span>
  )
}

function RateCard({ rate }: { rate: MandiRate }) {
  return (
    <article className="flex flex-col bg-white p-5 sm:p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="font-funneldisplay text-lg font-bold text-slate-900">
            <span aria-hidden className="mr-1.5">
              {rate.emoji}
            </span>
            {rate.fruit}
          </p>
          <p className="mt-1 text-sm text-slate-500">{rate.variety}</p>
        </div>
        <TrendBadge trend={formatRateTrend(rate)} />
      </div>

      <div className="mt-auto space-y-2 border-t border-slate-100 pt-4">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{rate.mandi}</p>
        <p className="font-funneldisplay text-2xl font-bold text-slate-400">
          {formatRateRange(rate)}
          {mandiRatesMeta.ratesPublished ? (
            <span className="ml-1 text-sm font-medium text-slate-500">{rate.unit}</span>
          ) : null}
        </p>
        {rate.note ? <p className="text-xs text-slate-500">{rate.note}</p> : null}
      </div>
    </article>
  )
}

export default function MandiRatesPage() {
  const [activeMandi, setActiveMandi] = useState<(typeof mandiLocations)[number]>('All mandis')

  const filteredRates = useMemo(() => {
    if (activeMandi === 'All mandis') return mandiRates
    return mandiRates.filter((rate) => rate.mandi === activeMandi)
  }, [activeMandi])

  return (
    <div className="bg-white pt-16 md:pt-[4.5rem]">
      <SectionShell eyebrowNumber="01" eyebrow="Daily updates" bgClass="bg-white" noBorder>
        <div className="pb-8 pt-2 md:pb-10">
          <div className="mb-8 max-w-3xl">
            <h1 className="type-h2 mb-4">Today&apos;s mandi rates</h1>
            <p className="type-body">
              {mandiRatesMeta.ratesPublished
                ? 'Indicative wholesale rates from Azadpur and Himachal mandis — updated each trading morning by our floor team. Call or WhatsApp for lot-specific quotes, cold-store holds, and export packing.'
                : 'Daily rates are posted each trading morning on our WhatsApp channel. The table below lists fruits we track — call or WhatsApp for today’s confirmed quote.'}
            </p>
          </div>

          <div className="mb-8 grid gap-px bg-slate-200 sm:grid-cols-3">
            <div className="bg-white px-5 py-4 sm:px-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Last updated</p>
              <p className="mt-1 font-funneldisplay text-lg font-bold text-slate-900">
                {mandiRatesMeta.ratesPublished ? formatUpdatedDate(mandiRatesMeta.lastUpdated) : '—'}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {mandiRatesMeta.ratesPublished ? `${mandiRatesMeta.session} session` : 'Rates not posted yet'}
              </p>
            </div>
            <div className="bg-white px-5 py-4 sm:px-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Source</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{mandiRatesMeta.source}</p>
            </div>
            <div className="flex flex-col justify-center bg-white px-5 py-4 sm:px-6">
              <PixelButton href={WHATSAPP_URL} external size="sm" className="w-full sm:w-auto">
                Get live quote
              </PixelButton>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {mandiLocations.map((mandi) => (
              <button
                key={mandi}
                type="button"
                onClick={() => setActiveMandi(mandi)}
                className={`border px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] transition ${
                  activeMandi === mandi
                    ? 'border-agro bg-agro text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-agro-300 hover:text-agro-700'
                }`}
              >
                {mandi}
              </button>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <div className="min-w-[720px] border border-slate-200">
              <div className="grid gap-px bg-slate-200">
                <div className="grid grid-cols-[1.1fr_1.4fr_1.1fr_0.9fr_0.7fr] gap-px bg-slate-200">
                  {['Fruit', 'Variety', 'Mandi', 'Rate', 'Trend'].map((heading) => (
                    <div
                      key={heading}
                      className="bg-slate-50 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500"
                    >
                      {heading}
                    </div>
                  ))}
                </div>
                {filteredRates.map((rate) => (
                  <div
                    key={rate.id}
                    className="grid grid-cols-[1.1fr_1.4fr_1.1fr_0.9fr_0.7fr] gap-px bg-slate-200"
                  >
                    <div className="bg-white px-4 py-4 text-sm font-semibold text-slate-900">
                      <span aria-hidden className="mr-1.5">
                        {rate.emoji}
                      </span>
                      {rate.fruit}
                    </div>
                    <div className="bg-white px-4 py-4 text-sm text-slate-600">
                      {rate.variety}
                      {rate.note ? <span className="mt-1 block text-xs text-slate-400">{rate.note}</span> : null}
                    </div>
                    <div className="bg-white px-4 py-4 text-sm text-slate-600">{rate.mandi}</div>
                    <div className="bg-white px-4 py-4 font-funneldisplay text-lg font-bold text-slate-400">
                      {formatRateRange(rate)}
                      {mandiRatesMeta.ratesPublished ? (
                        <span className="ml-1 text-xs font-medium text-slate-500">{rate.unit}</span>
                      ) : null}
                    </div>
                    <div className="bg-white px-4 py-4">
                      <TrendBadge trend={formatRateTrend(rate)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-slate-200 md:hidden">
            {filteredRates.map((rate) => (
              <RateCard key={rate.id} rate={rate} />
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">
            Rates are indicative and vary by lot size, grade, packaging, and payment terms. For confirmed booking rates,
            speak with our mandi desk on{' '}
            <a href="tel:+919899262264" className="font-medium text-agro-700 hover:underline">
              +91-9899262264
            </a>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="02" eyebrow="Need a quote?" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <h2 className="font-funneldisplay text-2xl font-bold text-slate-900">Book today&apos;s rate</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Share fruit, quantity, and delivery window — we&apos;ll hold the best available rate and arrange cold
                chain dispatch from Azadpur or Himachal.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PixelButton href="tel:+919899262264">Call mandi desk</PixelButton>
                <PixelButton href={WHATSAPP_URL} external tone="dark">
                  WhatsApp channel
                </PixelButton>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Head office</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A-285, 1st and 2nd floor, New Subzi Mandi, Azadpur, Delhi-110034
              </p>
              <Link href="/#contact_us" className="mt-4 inline-flex text-sm font-medium text-agro-700 hover:underline">
                View all contact details →
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </div>
  )
}
