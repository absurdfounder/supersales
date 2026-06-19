import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import Footer from '@/components/ui/footer'
import BrandLogoGrid from '@/components/BrandLogoGrid'
import { buyerLogos } from '@/lib/brand-logos'
import {
  HOSPITALITY_CONTACT_EMAIL,
  HOSPITALITY_WHATSAPP,
  hospitalitySegments,
  specialArrangements,
} from '@/lib/hospitality-content'

export default function HospitalityPage() {
  return (
    <div className="bg-white pt-16 md:pt-[4.5rem]">
      <SectionShell eyebrowNumber="01" eyebrow="Hospitality" bgClass="bg-white" noBorder>
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 max-w-3xl">
            <h1 className="type-h2 mb-4">
              Special arrangement for hotels, restaurants, caterers, banquets, retail chains &amp; many more
            </h1>
            <p className="type-body">
              Super Sales Agro runs dedicated supply programs for food-service and retail buyers — standing orders,
              graded fruit for kitchen prep, and reliable early-morning dispatch from Azadpur mandi.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <PixelButton href={HOSPITALITY_WHATSAPP} external>
              Discuss your account
            </PixelButton>
            <PixelButton href={`mailto:${HOSPITALITY_CONTACT_EMAIL}`} external tone="dark" variant="outline">
              Email us
            </PixelButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="02" eyebrow="Who we serve" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {hospitalitySegments.map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8">
                <h2 className="font-funneldisplay text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="03" eyebrow="Special arrangements" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <p className="type-body mb-8 max-w-3xl">
            Every account is different — share your weekly consumption, delivery window, and grading needs. We build a
            program around your kitchen or store floor.
          </p>

          <div className="grid gap-px bg-slate-200 md:grid-cols-2">
            {specialArrangements.map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8">
                <h3 className="font-funneldisplay text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="04" eyebrow="Retail partners" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <BrandLogoGrid logos={buyerLogos} label="Trusted by retail & institutional buyers" />
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="05" eyebrow="Get started" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <h2 className="font-funneldisplay text-2xl font-bold text-slate-900">Set up your fruit program</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Tell us your property type, weekly volumes, and preferred varieties. We&apos;ll propose a standing order
                or on-call supply plan with mandi-linked pricing.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PixelButton href={HOSPITALITY_WHATSAPP} external>
                  WhatsApp us
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
                  href={`mailto:${HOSPITALITY_CONTACT_EMAIL}`}
                  className="mt-2 block text-sm text-slate-600 hover:text-agro-700"
                >
                  {HOSPITALITY_CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">Also see</p>
                <a href="/wholesale" className="mt-2 block text-sm text-slate-600 hover:text-agro-700">
                  Wholesale &amp; processors →
                </a>
                <a href="/export" className="mt-1 block text-sm text-slate-600 hover:text-agro-700">
                  Export programme →
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
