import BrandLogoGrid from '@/components/BrandLogoGrid'
import { partnerLogos } from '@/lib/brand-logos'

export default function TrustedBy() {
  return <BrandLogoGrid logos={partnerLogos} label="Trusted by well-known brands" />
}
