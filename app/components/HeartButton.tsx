'use client'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/Ai'

import { SafeUser } from '../types'
import useFavorite from '../hooks/useFavorite'
import ClientOnly from './ClientOnly'

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}

export default function HeartButton({
  currentUser,
  listingId,
}: HeartButtonProps) {
  const { toggleFavorite, hasFavorited } = useFavorite({
    listingId,
    currentUser,
  })

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  )
}
