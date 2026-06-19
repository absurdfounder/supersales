import Image from 'next/image'
import familyteam from '@/public/images/familyteam.png'
import addresspart from '@/public/images/contactustogether.png'
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
      <SectionShell id="about_us" eyebrowNumber="06" eyebrow="About" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <h2 className="type-h2 mb-8 text-center">We are not a business, we are a family.</h2>
          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <div className="relative min-h-[320px] bg-white lg:min-h-[480px]">
              <Image src={familyteam} unoptimized alt="Super Sales Agro family team" fill className="object-cover object-center" />
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

      <SectionShell id="testimonials" eyebrowNumber="07" eyebrow="Testimonials" bgClass="bg-white">
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

      <SectionShell id="contact_us" eyebrowNumber="08" eyebrow="Contact" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 text-center">
            <h2 className="type-h2 mb-2">Ready to ship?</h2>
            <p className="type-body mx-auto max-w-2xl">Come see how well we sell.</p>
          </div>

          <div className="grid gap-px bg-slate-200 lg:grid-cols-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=28.7074,77.1723"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex min-h-[360px] items-center justify-center bg-white p-4 sm:min-h-[420px] lg:min-h-[520px]"
            >
              <Image
                src={addresspart}
                unoptimized
                alt="Super Sales Agro location"
                width={572}
                height={640}
                className="h-auto w-full max-w-full object-contain"
              />
            </a>

            <div className="grid gap-px bg-slate-200">
              <div className="flex flex-wrap gap-3 bg-white p-5 sm:p-6">
                <PixelButton
                  href="https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T"
                  external
                  size="sm"
                >
                  WhatsApp Channel
                </PixelButton>
                <PixelButton href="tel:+919899262264" variant="outline" tone="dark" size="sm">
                  Call Now
                </PixelButton>
              </div>

              <a
                href="https://www.google.com/maps/place/Super+Sales+Agro+(SSA)/@28.7116913,77.1662854,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 transition hover:bg-agro-50 sm:p-6"
              >
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">
                  Head Office
                </p>
                <p className="text-sm text-slate-600">
                  A-285, 1st and 2nd floor, New Subzi Mandi, Azadpur, Delhi-110034
                </p>
              </a>

              <div className="bg-white p-5 sm:p-6">
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">
                  Phone
                </p>
                <a href="tel:+919899262264" className="block text-sm text-slate-600 hover:text-agro-700">
                  +91-9899262264
                </a>
                <a href="tel:+919711269346" className="block text-sm text-slate-600 hover:text-agro-700">
                  +91-9711269346
                </a>
              </div>

              <a href="mailto:supersalesagro@gmail.com" className="bg-white p-5 transition hover:bg-agro-50 sm:p-6">
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">Email</p>
                <p className="text-sm text-slate-600">supersalesagro@gmail.com</p>
              </a>

              <div className="bg-white p-5 sm:p-6">
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-agro-700">
                  Shipping Address
                </p>
                <p className="mb-4 text-sm text-slate-600">
                  Licence No.: B-4881, A-1022 New Subzi Mandi, Azadpur, Delhi-110034
                </p>
                <PixelButton
                  href="https://www.google.com/maps/place/Super+sales+agro+(SSA)+Auction+Site/@28.8331576,77.1288924,17z"
                  external
                  tone="dark"
                  size="sm"
                >
                  Visit Auction Site
                </PixelButton>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
