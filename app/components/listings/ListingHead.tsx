'use client'

import useCountries from '@/app/hooks/useCountries'
import { SafeUser } from '@/app/types'
import Heading from '../Heading'

interface ListingHeadProps {
  title: string
  locationValue: string
  imageSrc: string
  id: string
  currentUser?: SafeUser | null
}

export default function ListingHead({
  currentUser,
  title,
  locationValue,
  imageSrc,
  id,
}: ListingHeadProps) {
  const { getByValue } = useCountries()

  const location = getByValue(locationValue)

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
    </>
  )
}
