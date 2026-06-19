import Image from 'next/image'

const buyers = [
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2020/08/Big-Basket.png',
    alt: 'Big Basket',
    width: 144,
    height: 42,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2020/08/Walmart.png',
    alt: 'Walmart',
    width: 200,
    height: 34,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/11/Ratnadeep-super-market.png',
    alt: 'Ratnadeep Super Market',
    width: 120,
    height: 35,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2020/08/Google.png',
    alt: 'Google',
    width: 144,
    height: 39,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2021/11/Nature-Basket.png',
    alt: 'Nature Basket',
    width: 192,
    height: 31,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2020/08/More.png',
    alt: 'More',
    width: 144,
    height: 73,
  },
  {
    src: 'https://suriagrofresh.com/wp-content/uploads/2020/08/Reliance-Fresh.png',
    alt: 'Reliance Fresh',
    width: 240,
    height: 48,
  },
]

export default function BigCustomers() {
  return (
    <div>
      <p className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Our buyers</p>
      <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-4">
        {buyers.map((buyer) => (
          <div key={buyer.alt} className="flex items-center justify-center bg-white px-4 py-8">
            <Image
              alt={buyer.alt}
              loading="lazy"
              width={buyer.width}
              height={buyer.height}
              decoding="async"
              className="max-h-12 w-auto object-contain"
              unoptimized
              src={buyer.src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
