import Image from 'next/image'
import familyteam from '@/public/images/familyteam.png'
import ContactClipSequence from '@/components/ContactClipSequence'
import ContactLocationCard from '@/components/ContactLocationCard'
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
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="type-h2 mb-2">Watch Super Sales in Action</h2>
            <p className="type-body mx-auto max-w-3xl">
              Real moments from the mandi floor. Find our head office or unloading dock.
            </p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(250px,0.72fr)_minmax(0,1.5fr)] lg:gap-7">
            <div className="mx-auto w-full max-w-[280px] lg:mx-0">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">From the mandi floor</h3>
              <ContactClipSequence />
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-sm font-semibold text-slate-900">Visit us</h3>
                <p className="text-xs text-slate-500">Choose the location you need.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <ContactLocationCard
                  title="Head office"
                  address="A-285, New Subzi Mandi, Azadpur, Delhi 110034"
                  mapImageSrc="/images/locations/head-office-map.jpg"
                  mapImageAlt="Street map centered on the Super Sales Agro head office in Azadpur, Delhi"
                  directionsUrl="https://www.google.com/maps/place/Super+Sales+Agro+(SSA)/@28.7116867,77.1685761,17z/data=!4m16!1m9!3m8!1s0x390d018ab1597a2b:0xdc519286f2b52396!2sSuper+Sales+Agro+(SSA)!8m2!3d28.7116867!4d77.171151!9m1!1b1!16s%2Fg%2F11b5vqhxx4!3m5!1s0x390d018ab1597a2b:0xdc519286f2b52396!8m2!3d28.7116867!4d77.171151!16s%2Fg%2F11b5vqhxx4?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D"
                />
                <ContactLocationCard
                  title="Unloading dock"
                  address="Super Sales Agro Auction Site, Narela, Delhi"
                  mapImageSrc="/images/locations/unloading-dock-map.jpg"
                  mapImageAlt="Street map centered on the Super Sales Agro unloading dock and auction site in Narela, Delhi"
                  directionsUrl="https://www.google.com/maps/place/Super+sales+agro+(SSA)+Auction+Site/@28.7680451,77.1107049,13z/data=!4m10!1m2!2m1!1sSuper+Sales+Agro+narela!3m6!1s0x390dab01ee292731:0x84ec2713731edec0!8m2!3d28.824416!4d77.1326581!15sChdTdXBlciBTYWxlcyBBZ3JvIG5hcmVsYVoZIhdzdXBlciBzYWxlcyBhZ3JvIG5hcmVsYZIBH2FncmljdWx0dXJhbF9wcm9kdWN0X3dob2xlc2FsZXLgAQA!16s%2Fg%2F11v43r08t3?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:mt-7 sm:rounded-3xl sm:p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-sm font-semibold text-slate-900">Talk to our team</h3>
              <p className="text-xs text-slate-500">Call, email, or message us.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              <a
                href="tel:+919899262264"
                className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-700 transition-colors hover:border-agro-300 hover:text-agro-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-600 focus-visible:ring-offset-2"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">Call</span>
                <span className="mt-0.5 block text-xs font-semibold sm:text-sm">+91 98992 62264</span>
              </a>
              <a
                href="tel:+919711269346"
                className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-700 transition-colors hover:border-agro-300 hover:text-agro-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-600 focus-visible:ring-offset-2"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">Alternate</span>
                <span className="mt-0.5 block text-xs font-semibold sm:text-sm">+91 97112 69346</span>
              </a>
              <a
                href="mailto:supersalesagro@gmail.com"
                className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-700 transition-colors hover:border-agro-300 hover:text-agro-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-600 focus-visible:ring-offset-2"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">Email</span>
                <span className="mt-0.5 block break-all text-xs font-semibold sm:text-sm">supersalesagro@gmail.com</span>
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-700 transition-colors hover:border-agro-300 hover:text-agro-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agro-600 focus-visible:ring-offset-2"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">WhatsApp</span>
                <span className="mt-0.5 block text-xs font-semibold sm:text-sm">Message us ↗</span>
              </a>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
