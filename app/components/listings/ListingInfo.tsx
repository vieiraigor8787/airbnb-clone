'use client'

import { IconType } from 'react-icons'

import useCountries from '@/app/hooks/useCountries'
import { SafeUser } from '@/app/types'
import Avatar from '../Avatar'
import ListingCategory from './ListingCategory'

interface ListingInfoProps {
  user: SafeUser
  category:
    | {
        icon: IconType
        label: string
        description: string
      }
    | undefined
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  locationValue: string
}

export default function ListingInfo({
  user,
  roomCount,
  locationValue,
  guestCount,
  description,
  category,
  bathroomCount,
}: ListingInfoProps) {
  const { getByValue } = useCountries()

  const coordinates = getByValue(locationValue)?.latlng

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex items-center gap-2">
          <div className="">postado por {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} lugares</div>
          <div>{roomCount} quartos</div>
          <div>{bathroomCount} banheiros</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
    </div>
  )
}
