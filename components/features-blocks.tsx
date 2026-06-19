import Image from 'next/image'
import ConnectingTogether from '@/public/images/connectingtogether.png'
import TrustedBy from '@/app/(auth)/compare-against/TrustedBy'
import BigCustomers from '@/app/(auth)/compare-against/BigCustomers'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'

const products = [
  { name: 'Apples', icon: '/images/appleicon.png' },
  { name: 'Mangoes', icon: '/images/mangoicon.png' },
  { name: 'Kinnow', icon: '/images/kinnowicon.png' },
  { name: 'Pears', icon: '/images/pearicon.png' },
  { name: 'Pomegranate', icon: '/images/pomogranateicon.png' },
  { name: 'Guavas', icon: '/images/guavaicon.png' },
]

export default function FeaturesBlocks() {
  return (
    <>
      <SectionShell id="products" eyebrowNumber="02" eyebrow="Products" bgClass="bg-slate-50">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 max-w-3xl">
            <h2 className="type-h2 mb-4">We deal in various produce.</h2>
            <p className="type-body">
              Super Sales Agro Private Limited is one of the best distributors and importers of fresh produce in India,
              handling over 65,000 MT of fruits and other produce every year and leading the Indian fresh produce sector
              through innovation, technology and sustainable growth.
            </p>
          </div>

          <div className="-mx-3 mb-8 grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-3 sm:-mx-4 md:-mx-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex min-h-[180px] flex-col items-center justify-center bg-white px-4 py-8 text-center sm:min-h-[200px] sm:px-6 sm:py-10"
              >
                <Image
                  alt={product.name}
                  src={product.icon}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="mb-5 h-28 w-28 object-contain sm:h-32 sm:w-32"
                  unoptimized
                />
                <h4 className="font-funneldisplay text-lg font-bold text-slate-900">{product.name}</h4>
              </div>
            ))}
          </div>

          <PixelButton href="#contact_us">Get in Touch</PixelButton>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="03" eyebrow="Partners" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <TrustedBy />
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="04" eyebrow="Supply chain" bgClass="bg-slate-50">
        <div className="pb-10 pt-2 md:pb-14">
          <div className="mb-8 max-w-3xl">
            <h2 className="type-h2 mb-4">
              We bridge the gap between <span className="text-agro">farmers</span> and{' '}
              <span className="text-agro">buyers</span>
            </h2>
            <p className="type-body mb-6">
              We provide a transparent bridge by providing 30 day payment credits to buyers who are willing to buy the
              produce from the farmer. Provide them with services like cold store facilities, packaging and supply and
              quality commitments to scale up client business and provide the best rates to farmers by setting up a
              huge channel.
            </p>
            <PixelButton href="#contact_us">Get in Touch</PixelButton>
          </div>
          <div className="relative -mx-3 flex min-h-[400px] items-center justify-center bg-white p-4 sm:-mx-4 md:-mx-6 md:min-h-[480px]">
            <Image
              src={ConnectingTogether}
              unoptimized
              alt="Connecting farmers and buyers"
              width={2926}
              height={1052}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrowNumber="05" eyebrow="Buyers" bgClass="bg-white">
        <div className="pb-10 pt-2 md:pb-14">
          <BigCustomers />
        </div>
      </SectionShell>
    </>
  )
}
