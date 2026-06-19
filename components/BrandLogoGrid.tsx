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
            className="flex min-h-[132px] items-center justify-center bg-white px-3 py-4 sm:min-h-[148px] sm:px-4 sm:py-5 md:min-h-[156px]"
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              className="h-auto w-[88%] max-w-[220px] object-contain sm:max-h-28 md:max-h-32"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
