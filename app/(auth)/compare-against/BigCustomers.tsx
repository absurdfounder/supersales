import BrandLogoGrid from '@/components/BrandLogoGrid'
import { buyerLogos } from '@/lib/brand-logos'

export default function BigCustomers() {
  return <BrandLogoGrid logos={buyerLogos} label="Our buyers" />
}
