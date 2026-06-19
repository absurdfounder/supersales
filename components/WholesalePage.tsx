import Image from 'next/image'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import Footer from '@/components/ui/footer'
import {
  WHOLESALE_CONTACT_EMAIL,
  WHOLESALE_WHATSAPP,
  wholesaleBuyerTypes,
  wholesaleCapabilities,
  wholesaleProducts,
} from '@/lib/wholesale-content'

export default function WholesalePage() {
  return (
    <div className="bg-white pt-16 md:pt-[4.5rem]">
      <SectionShell eyebrowNumber="01" eyebrow="Wholesale" bgClass="bg-white" noBorder>
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 max-w-3xl">
            <h1 className="type-h2 mb-4">
              Processors, exporters &amp; wholesale suppliers of Indian &amp; imported fresh fruits
            </h1>
            <p className="type-body">
              Super Sales Agro supplies bulk fresh fruit to processors, export consolidators, and wholesale buyers
              across India. From Azadpur and Himachal mandis to cold-store dispatch — one family-run desk for domestic
              and imported lines since 1982.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <PixelButton href={WHOLESALE_WHATSAPP} external>
              Discuss wholesale supply
            </PixelButton>
            <PixelButton href={`mailto:${WHOLESALE_CONTACT_EMAIL}`} external tone="dark" variant="outline">
              Email wholesale desk
            </PixelButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="02" eyebrow="Who we supply" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 md:grid-cols-3">
            {wholesaleBuyerTypes.map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8">
                <h2 className="font-funneldisplay text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="03" eyebrow="Produce" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <p className="type-body mb-8 max-w-3xl">
            Indian mandi fruit and imported arrivals — apples, citrus, stone fruit, and seasonal specials. Share your
            variety, grade, and volume for a lot-specific quote.
          </p>

          <div className="-mx-3 grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-3 sm:-mx-4 md:-mx-6">
            {wholesaleProducts.map((product) => (
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

      <SectionShell eyebrowNumber="04" eyebrow="Capabilities" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 md:grid-cols-2">
            {wholesaleCapabilities.map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8">
                <h3 className="font-funneldisplay text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="05" eyebrow="Get started" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <h2 className="font-funneldisplay text-2xl font-bold text-slate-900">Request a wholesale quote</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Send variety, grade, carton count, and delivery city. Our mandi desk responds with availability from
                Delhi and Himachal sourcing.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PixelButton href={WHOLESALE_WHATSAPP} external>
                  WhatsApp wholesale desk
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
                <a
                  href={`mailto:${WHOLESALE_CONTACT_EMAIL}`}
                  className="mt-2 block text-sm text-slate-600 hover:text-agro-700"
                >
                  {WHOLESALE_CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">Also see</p>
                <a href="/export" className="mt-2 block text-sm text-slate-600 hover:text-agro-700">
                  Export programme →
                </a>
                <a href="/hospitality" className="mt-1 block text-sm text-slate-600 hover:text-agro-700">
                  Hotels, restaurants &amp; retail →
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </div>
  )
}
