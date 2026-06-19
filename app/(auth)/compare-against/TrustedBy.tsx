import Image from 'next/image'

const logos = [
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Zespri-250x200.png',
    alt: 'Zespri',
    width: 144,
    height: 42,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Manson-250x200.png',
    alt: 'Manson',
    width: 200,
    height: 34,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/11/Northern-Fruit-250x200.png',
    alt: 'Northern Fruit',
    width: 120,
    height: 35,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Devos-250x200.png',
    alt: 'Devos',
    width: 144,
    height: 39,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Chelan-250x200.png',
    alt: 'Chelan',
    width: 192,
    height: 31,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/01/Evelina-250x200.png',
    alt: 'Evelina',
    width: 144,
    height: 73,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/11/Natcha-250x200.png',
    alt: 'Natcha',
    width: 240,
    height: 48,
  },
]

export default function TrustedBy() {
  return (
    <div>
      <p className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
        Trusted by well-known brands
      </p>
      <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-4">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center bg-white px-4 py-8">
            <Image
              alt={logo.alt}
              loading="lazy"
              width={logo.width}
              height={logo.height}
              decoding="async"
              className="max-h-12 w-auto object-contain"
              unoptimized
              src={logo.src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
