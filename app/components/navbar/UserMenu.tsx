'use client'

import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/Ai'

import Avatar from '../Avatar'

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState()

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Home
        </div>
        <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}
