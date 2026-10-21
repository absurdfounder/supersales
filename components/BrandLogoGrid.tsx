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
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex min-h-[104px] w-[calc(50%-0.375rem)] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 transition-colors hover:border-agro-300 sm:min-h-[112px] sm:w-[calc(33.3333%-0.6667rem)] sm:px-5 sm:py-6 lg:min-h-[120px] lg:w-[calc(25%-0.75rem)]"
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              className="h-12 w-[72%] max-w-[148px] object-contain sm:h-14 md:h-16"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
