import Image from 'next/image'
import familyteam from '@/public/images/familyteam.png'
import ContactLocationCard from '@/components/ContactLocationCard'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'

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

      <SectionShell
        id="contact_us"
        eyebrowNumber="09"
        eyebrow="Contact"
        bgClass="bg-slate-100"
        className="bg-[radial-gradient(circle,rgba(100,116,139,0.2)_1px,transparent_1.2px)] [background-size:18px_18px] [&>div]:border-slate-200"
      >
        <div className="pb-8 pt-2 sm:pb-10 md:pb-12">
          <div className="mb-5 max-w-3xl sm:mb-7">
            <h2 className="type-h2 mb-2">
              Find us &amp; get in touch
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Visit our Azadpur head office or Narela unloading dock. Call our team for rates and availability.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <ContactLocationCard
              title="Head office"
              address="A-285, New Subzi Mandi, Azadpur, Delhi 110034"
              locationType="office"
              mapImageSrc="/images/locations/head-office-map.jpg"
              mapImageAlt="Street map centered on the Super Sales Agro head office in Azadpur, Delhi"
              directionsUrl="https://www.google.com/maps/place/Super+Sales+Agro+(SSA)/@28.7116867,77.1685761,17z/data=!4m16!1m9!3m8!1s0x390d018ab1597a2b:0xdc519286f2b52396!2sSuper+Sales+Agro+(SSA)!8m2!3d28.7116867!4d77.171151!9m1!1b1!16s%2Fg%2F11b5vqhxx4!3m5!1s0x390d018ab1597a2b:0xdc519286f2b52396!8m2!3d28.7116867!4d77.171151!16s%2Fg%2F11b5vqhxx4?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D"
            />
            <ContactLocationCard
              title="Unloading dock"
              address="Super Sales Agro Auction Site, Narela, Delhi"
              locationType="dock"
              mapImageSrc="/images/locations/unloading-dock-map.jpg"
              mapImageAlt="Street map centered on the Super Sales Agro unloading dock and auction site in Narela, Delhi"
              directionsUrl="https://www.google.com/maps/place/Super+sales+agro+(SSA)+Auction+Site/@28.7680451,77.1107049,13z/data=!4m10!1m2!2m1!1sSuper+Sales+Agro+narela!3m6!1s0x390dab01ee292731:0x84ec2713731edec0!8m2!3d28.824416!4d77.1326581!15sChdTdXBlciBTYWxlcyBBZ3JvIG5hcmVsYVoZIhdzdXBlciBzYWxlcyBhZ3JvIG5hcmVsYZIBH2FncmljdWx0dXJhbF9wcm9kdWN0X3dob2xlc2FsZXLgAQA!16s%2Fg%2F11v43r08t3?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D"
            />
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-sm sm:mt-5 sm:rounded-3xl sm:p-5">
            <div className="mb-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">Talk to our team</h3>
              <p className="text-xs text-slate-500 sm:text-sm">Choose the quickest way to reach us.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
              <PixelButton
                href="tel:+919899262264"
                size="sm"
                className="w-full min-h-[76px]"
                ariaLabel="Call Super Sales Agro at +91 98992 62264"
              >
                <span className="flex flex-col items-center gap-1.5 whitespace-normal">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
                      <path d="M5.7 3.2h2.2l1.2 3.3-1.7 1.4a12.5 12.5 0 0 0 4.7 4.7l1.4-1.7 3.3 1.2v2.2a1.5 1.5 0 0 1-1.6 1.5A12.8 12.8 0 0 1 4.2 4.8a1.5 1.5 0 0 1 1.5-1.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Call now
                  </span>
                  <span className="font-sans text-xs font-bold normal-case tracking-normal whitespace-nowrap">+91 98992 62264</span>
                </span>
              </PixelButton>
              <PixelButton
                href="tel:+919711269346"
                variant="outline"
                size="sm"
                className="w-full min-h-[76px]"
                ariaLabel="Call the alternate number +91 97112 69346"
              >
                <span className="flex flex-col items-center gap-1.5 whitespace-normal">
                  <span className="flex items-center gap-1 whitespace-nowrap text-[9px] tracking-[0.08em]">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
                      <path d="M5.7 3.2h2.2l1.2 3.3-1.7 1.4a12.5 12.5 0 0 0 4.7 4.7l1.4-1.7 3.3 1.2v2.2a1.5 1.5 0 0 1-1.6 1.5A12.8 12.8 0 0 1 4.2 4.8a1.5 1.5 0 0 1 1.5-1.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Alternate number
                  </span>
                  <span className="font-sans text-xs font-bold normal-case tracking-normal whitespace-nowrap">+91 97112 69346</span>
                </span>
              </PixelButton>
              <PixelButton
                href="mailto:supersalesagro@gmail.com"
                variant="outline"
                size="sm"
                className="col-span-2 w-full min-h-[64px] lg:col-span-1"
                ariaLabel="Email Super Sales Agro at supersalesagro@gmail.com"
              >
                <span className="flex flex-col items-center gap-1.5 whitespace-normal">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
                      <rect x="3" y="4.5" width="14" height="11" rx="1.7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m4 6 6 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Email us
                  </span>
                  <span className="font-sans text-xs font-bold normal-case tracking-normal whitespace-nowrap">supersalesagro@gmail.com</span>
                </span>
              </PixelButton>
              <PixelButton
                href="https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T"
                variant="outline"
                size="sm"
                className="col-span-2 w-full min-h-[64px] lg:col-span-1"
                ariaLabel="Message Super Sales Agro on WhatsApp"
              >
                <span className="flex flex-col items-center gap-1.5 whitespace-normal">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
                      <path d="M16.6 9.7a6.4 6.4 0 0 1-9.3 5.7L4 16l.7-3.2a6.4 6.4 0 1 1 11.9-3.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M7.4 7.1c.3-.4.6-.3.8 0l.7 1.3c.1.2.1.4-.1.6l-.4.5c.5 1 1.2 1.7 2.2 2.2l.5-.4c.2-.2.4-.2.6-.1l1.3.7c.3.2.4.5 0 .8-.4.4-.9.7-1.5.6-2.2-.4-4.5-2.7-4.8-4.9-.1-.5.2-1 .7-1.3Z" fill="currentColor" />
                    </svg>
                    WhatsApp
                  </span>
                  <span className="font-sans text-xs font-bold normal-case tracking-normal whitespace-nowrap">Message us ↗</span>
                </span>
              </PixelButton>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
