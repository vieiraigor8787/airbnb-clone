'use client'

import { useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/Ai'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

import { SafeUser } from '@/app/types'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRentModal from '@/app/hooks/useRentModal'

import Avatar from '../Avatar'
import MenuItem from './MenuItem'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

export default function UserMenu({ currentUser }: UserMenuProps) {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const rentModal = useRentModal()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) return rentModal.onOpen()

    rentModal.onOpen()
  }, [currentUser, loginModal, rentModal])

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar
              src={`${
                currentUser
                  ? 'https://avatars.githubusercontent.com/u/40477878'
                  : ''
              }`}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push('/trips')}
                  label="Minhas viagens"
                />
                <MenuItem
                  onClick={() => router.push('/favorites')}
                  label="Favoritos"
                />
                <MenuItem
                  onClick={() => router.push('/reservations')}
                  label="Minhas reservas"
                />
                <MenuItem onClick={() => {}} label="Minhas propriedades" />
                <MenuItem onClick={rentModal.onOpen} label="Minha home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Sair" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Novo usuário" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
