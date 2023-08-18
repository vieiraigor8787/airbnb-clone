'use client'

import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/images/Logo.png"
      height="100"
      width="100"
      alt="logo"
      className="hidden md:block  cursor-pointer"
    />
  )
}
