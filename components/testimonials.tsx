import Image from 'next/image'
import familyteam from '@/public/images/familyteam.png'
import ContactClipSequence from '@/components/ContactClipSequence'
import SectionShell from '@/components/ui/SectionShell'

const testimonials = [
  {
    name: 'Aman',
    role: 'Farmer',
    company: 'GC Orchards',
    testimonial:
      'Good service, trustworthy fruit sales. Sushil sir is the best. I have been sending my fruits to them for 17 years. Their advice has helped me save a lot of money, best agents I have done business with.',
    image: '/images/testimonials/aman.png',
  },
  {
    name: 'Hui Nam',
    role: 'Farmer',
    company: 'Haitan Orchards',
    testimonial: 'I sent my harvested fruits and I was happy with the rates and good service.',
    image: '/images/testimonials/hui-nam.png',
  },
  {
    name: 'Sanjay Verma',
    role: 'Farmer',
    company: 'Virat Orchards',
    testimonial:
      "I have been taking my fruits there since 10 years ago, they give me good price for it, thank you for your service. Let's hope our business keeps going up and growing.",
    image: '/images/testimonials/tom.png',
  },
  {
    name: 'Smt. KamlaDevi',
    role: 'Farmer',
    company: 'Jatin Orchards',
    testimonial:
      'Super excellence service... they are really good at handling the fruit freshly and carefully. Have a good relation with them, so satisfied and happy with their service so far.',
    image: '/images/testimonials/kamla-devi.png',
  },
  {
    name: 'Rajesh Thakur',
    role: 'Farmer',
    company: 'Vijay Thakur Orchards',
    testimonial:
      'They suggested me to put my apple produce in cold store, I received good rates for my apples due to their suggestions and help. They even tested my apples before suggesting. Very Good experience.',
    image: '/images/testimonials/adam.png',
  },
  {
    name: 'Smt. Meena Kaith',
    role: 'Farmer',
    company: 'Kaith Orchards',
    testimonial:
      'The best thing is they are polite and provide same day payment for my goods , I find them really helpful.',
    image: '/images/testimonials/darya.png',
  },
]

export default function Testimonials() {
  return (
    <>
      <SectionShell id="about_us" eyebrowNumber="07" eyebrow="About" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <h2 className="type-h2 mb-8 text-center">We are not a business, we are a family.</h2>
          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden bg-white lg:min-h-[480px]">
              <Image src={familyteam} unoptimized alt="Super Sales Agro family team" fill className="object-cover object-center" />
              <div className="pointer-events-none absolute inset-0 hero-checker-grid" aria-hidden />
              <div className="pointer-events-none absolute inset-0 pixel-flicker-grid opacity-60" aria-hidden />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-white/10"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-3 border border-white/45 sm:inset-4" aria-hidden />
              <div
                className="pointer-events-none absolute left-3 top-3 z-10 h-4 w-4 border-l-2 border-t-2 border-agro-500/85 sm:left-4 sm:top-4"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute right-3 top-3 z-10 h-4 w-4 border-r-2 border-t-2 border-agro-500/85 sm:right-4 sm:top-4"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-agro-500/85 sm:bottom-4 sm:left-4"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-3 right-3 z-10 h-4 w-4 border-b-2 border-r-2 border-agro-500/85 sm:bottom-4 sm:right-4"
                aria-hidden
              />
            </div>
            <div className="space-y-4 bg-white p-6 text-sm leading-relaxed text-slate-600 sm:p-8 md:p-10 sm:text-base">
              <p>
                SSA was founded as a small business in 1982 with produce distribution which later made them leading
                distributors in Delhi, Himachal, and Gujarat.
              </p>
              <p className="font-semibold text-slate-900">
                Today, our loyal customer base extends beyond national barriers to the U.K, Europe, Australia, Middle
                East, and South East Asia.
              </p>
              <p>
                Super Sales Agro is one of the pioneering entities in the agricultural sector, committed to delivering{' '}
                <strong className="text-slate-900">the best rates</strong> with solutions that revolutionize farming
                practices.
              </p>
              <p>
                Founded with a vision to address the challenges in the agricultural industry,{' '}
                <strong className="text-slate-900">SSA DELHI</strong> has embarked on a journey to establish itself as a
                leader in the field.
              </p>
              <p>
                Our dedication to sustainable growth and prices ensures that we not only meet the demands of our
                farmers/suppliers but exceed the expectations of our buyers.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="testimonials" eyebrowNumber="08" eyebrow="Testimonials" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 max-w-3xl">
            <h2 className="type-h2 mb-4">Trusted by 250+ farmers &amp; businesses</h2>
            <p className="type-body">We have happy vendors and suppliers all around India.</p>
          </div>

          <div className="grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ name, role, company, testimonial, image }) => (
              <figure key={name} className="flex flex-col bg-white p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                    src={image}
                    unoptimized
                    width={44}
                    height={44}
                    alt={`Testimonial from ${name}`}
                  />
                  <figcaption>
                    <p className="font-funneldisplay font-bold text-slate-900">{name}</p>
                    <p className="text-sm text-slate-500">
                      {role} · <span className="text-agro">{company}</span>
                    </p>
                  </figcaption>
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  &ldquo;{testimonial}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact_us" eyebrowNumber="09" eyebrow="Contact" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 text-center">
            <h2 className="type-h2 mb-2">Ready to ship?</h2>
            <p className="type-body mx-auto max-w-2xl">Come see how well we sell.</p>
          </div>

          <div className="rounded-[2rem] bg-amber-300 p-3 shadow-xl shadow-amber-900/10 sm:p-4 md:rounded-[2.5rem] md:p-6">
            <ContactClipSequence />

            <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm sm:rounded-3xl">
                <div className="h-[230px] sm:h-[300px] lg:h-[320px]">
                  <iframe
                    title="Map to Super Sales Agro head office in Azadpur, Delhi"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.155%2C28.704%2C77.178%2C28.719&layer=mapnik&marker=28.7116913%2C77.1662854"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-4 border-t border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <p className="text-lg font-bold tracking-tight text-slate-900">Super Sales Agro</p>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-600">
                      A-285, 1st and 2nd floor, New Subzi Mandi, Azadpur, Delhi-110034
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Super+Sales+Agro+(SSA)/@28.7116913,77.1662854,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-agro-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro focus-visible:ring-offset-2"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                      <path d="M14 4h6v6M20 4 10 14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Directions
                  </a>
                </div>
              </div>

              <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6 lg:p-7">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-agro-700">
                    Get in touch
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    Your mandi desk is one call away.
                  </h3>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <a
                    href="tel:+919899262264"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro focus-visible:ring-offset-2"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                      <path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.7.5-3 2-3Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Call
                  </a>
                  <a
                    href="https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-800 transition hover:border-agro-300 hover:bg-agro-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro focus-visible:ring-offset-2"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="mt-6 space-y-4 border-t border-slate-100 pt-5 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Phone</p>
                    <a href="tel:+919899262264" className="block text-slate-700 hover:text-agro-700">
                      +91 98992 62264
                    </a>
                    <a href="tel:+919711269346" className="mt-0.5 block text-slate-700 hover:text-agro-700">
                      +91 97112 69346
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Email</p>
                    <a href="mailto:supersalesagro@gmail.com" className="break-words text-slate-700 hover:text-agro-700">
                      supersalesagro@gmail.com
                    </a>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Auction site · Licence B-4881
                    </p>
                    <p className="leading-relaxed text-slate-600">
                      A-1022 New Subzi Mandi, Azadpur, Delhi-110034
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Super+sales+agro+(SSA)+Auction+Site/@28.8331576,77.1288924,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-semibold text-agro-700 hover:text-agro-900"
                    >
                      Visit auction site
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
