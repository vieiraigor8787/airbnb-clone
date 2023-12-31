'use client'

import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

export default function Button({
  small,
  outline,
  icon: Icon,
  disabled,
  onClick,
  label,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-100 transition w-full ${
        outline
          ? 'bg-white border-black text-black'
          : 'bg-rose-500 border-rose-300 text-white'
      }
        ${
          small
            ? 'py-1 text-sm font-light border-[1px]'
            : 'py-3 font-semibold text-md border-2'
        }
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  )
}
