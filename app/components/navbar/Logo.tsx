'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Logo() {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.push('/')}
      src="/images/Logo.png"
      height="100"
      width="100"
      alt="logo"
      className="hidden md:block  cursor-pointer"
    />
  )
}
