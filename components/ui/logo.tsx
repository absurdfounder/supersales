import Link from 'next/link'
import Image from 'next/image' // Import the Image component from Next.js
import logo from '../../public/images/logo-super-sales-agro.png';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="supersalesagro">
      <Image
        src={logo}
        unoptimized
        alt="Super Sales Agro"
        width={274}
        height={148}
        className="h-10 w-auto rounded-md"
      />
    </Link>
  )
}
