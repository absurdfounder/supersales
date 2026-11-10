export const metadata = {
  title: 'Azadpur Mandi Fruit Wholesaler | Super Sales Agro',
  description:
    'Fruit wholesaler at Azadpur mandi and the Himachal fruit mandis since 1982. Apples, kinnow, mango, nashpati, pomegranate, and guava. Call 9899262264 or 9711269346.',
  alternates: { canonical: 'https://supersalesagro.com' },
}

import Hero from '@/components/hero'
import FloorGallery from '@/components/FloorGallery'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FloorGallery />
      <FeaturesBlocks />
      <Testimonials />
      <FloorGallery
        id="contact-floor-gallery"
        showHeading={false}
        showEyebrow={false}
        compact
        sceneIds={['walk', 'truck', 'circle', 'outside']}
      />
      <Newsletter />
    </div>
  )
}
