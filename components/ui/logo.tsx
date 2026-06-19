import Link from 'next/link'
import Image from 'next/image' // Import the Image component from Next.js
import logo from '../../public/images/logo-super-sales-agro.png';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Super Sales Agro">
      <Image
        src={logo}
        unoptimized
        alt=""
        width={274}
        height={148}
        className="h-10 w-auto"
        aria-hidden
      />
      <span className="font-funneldisplay text-lg font-extrabold text-slate-900">Super Sales Agro</span>
    </Link>
  )
}
