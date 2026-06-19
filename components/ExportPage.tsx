import Image from 'next/image'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import Footer from '@/components/ui/footer'
import {
  EXPORT_CONTACT_EMAIL,
  EXPORT_WHATSAPP,
  exportCapabilities,
  exportMarkets,
  exportProducts,
  exportSteps,
} from '@/lib/export-content'

export default function ExportPage() {
  return (
    <div className="bg-white pt-16 md:pt-[4.5rem]">
      <SectionShell eyebrowNumber="01" eyebrow="Export" bgClass="bg-white" noBorder>
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 max-w-3xl">
            <h1 className="type-h2 mb-4">Export-ready fruit from India&apos;s mandis</h1>
            <p className="type-body">
              Super Sales Agro supplies wholesale fruit to buyers across the U.K., Europe, Australia, the Middle East,
              and South East Asia. From Azadpur and Himachal sourcing to cold-chain packing — we handle export volumes
              with the same family-run care we&apos;ve brought since 1982.
            </p>
          </div>

          <div className="mb-10 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">
            {exportMarkets.map((market) => (
              <div key={market.region} className="bg-white px-4 py-5 text-center sm:px-5">
                <span className="text-2xl" aria-hidden>
                  {market.flag}
                </span>
                <p className="mt-2 font-funneldisplay text-sm font-bold text-slate-900 sm:text-base">{market.region}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <PixelButton href={EXPORT_WHATSAPP} external>
              Discuss export order
            </PixelButton>
            <PixelButton href={`mailto:${EXPORT_CONTACT_EMAIL}`} external tone="dark" variant="outline">
              Email export desk
            </PixelButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="02" eyebrow="Export catalogue" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <p className="type-body mb-8 max-w-3xl">
            Core lines available for export packing. Seasonality and grades vary — share your spec sheet for a tailored
            quote.
          </p>

          <div className="-mx-3 grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-3 sm:-mx-4 md:-mx-6">
            {exportProducts.map((product) => (
              <div
                key={product.name}
                className="flex min-h-[200px] flex-col items-center justify-center bg-white px-4 py-8 text-center sm:min-h-[220px] sm:px-6"
              >
                <Image
                  alt={product.name}
                  src={product.icon}
                  width={140}
                  height={140}
                  loading="lazy"
                  className="mb-4 h-24 w-24 object-contain sm:h-28 sm:w-28"
                  unoptimized
                />
                <h3 className="font-funneldisplay text-lg font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{product.note}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="03" eyebrow="Capabilities" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 md:grid-cols-2">
            {exportCapabilities.map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8">
                <h3 className="font-funneldisplay text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="04" eyebrow="How it works" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 md:grid-cols-2">
            {exportSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 sm:p-8">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-agro-700">
                  Step {item.step}
                </p>
                <h3 className="mt-2 font-funneldisplay text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="05" eyebrow="Get started" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <h2 className="font-funneldisplay text-2xl font-bold text-slate-900">Request an export quote</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Send variety, grade, carton count, destination port, and target sailing week. Our export desk responds
                with availability from Delhi and Himachal mandis.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PixelButton href={EXPORT_WHATSAPP} external>
                  WhatsApp export desk
                </PixelButton>
                <PixelButton href="tel:+919899262264" external tone="dark" variant="outline">
                  Call +91-9899262264
                </PixelButton>
              </div>
            </div>
            <div className="space-y-4 bg-white p-6 sm:p-8">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">Head office</p>
                <p className="mt-2 text-sm text-slate-600">
                  A-285, 1st and 2nd floor, New Subzi Mandi, Azadpur, Delhi-110034
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">Email</p>
                <a href={`mailto:${EXPORT_CONTACT_EMAIL}`} className="mt-2 block text-sm text-slate-600 hover:text-agro-700">
                  {EXPORT_CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">Licence</p>
                <p className="mt-2 text-sm text-slate-600">B-4881, A-1022 New Subzi Mandi, Azadpur, Delhi-110034</p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </div>
  )
}
