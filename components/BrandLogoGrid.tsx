import Image from 'next/image'
import type { BrandLogo } from '@/lib/brand-logos'

export default function BrandLogoGrid({
  logos,
  label,
}: {
  logos: BrandLogo[]
  label: string
}) {
  return (
    <div>
      <p className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-4">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex min-h-[120px] items-center justify-center bg-white px-6 py-8 sm:min-h-[132px] sm:px-8 sm:py-10"
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              className="max-h-16 w-auto max-w-[85%] object-contain sm:max-h-20 md:max-h-24"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
