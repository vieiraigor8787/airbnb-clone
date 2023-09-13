'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useCallback, useMemo } from 'react'
import { format } from 'date-fns'
import { Reservation } from '@prisma/client'

import { SafeUser, SafeListing } from '@/app/types'
import useCountries from '@/app/hooks/useCountries'
import HeartButton from '../HeartButton'
import Button from '../Button'

interface ListingCardProps {
  data: SafeListing
  reservation?: Reservation
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser?: SafeUser | null
}

export default function ListingCard({
  reservation,
  onAction,
  disabled,
  currentUser,
  actionLabel,
  actionId = '',
  data,
}: ListingCardProps) {
  const router = useRouter()
  const { getByValue } = useCountries()

  const location = getByValue(data.locationValue)
  const price = useMemo(() => {
    if (reservation) return reservation.totalPrice

    return data.price
  }, [reservation, data.price])

  const reservationDate = useMemo(() => {
    if (!reservation) return null

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation])

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      if (disabled) return

      onAction?.(actionId)
    },
    [onAction, actionId, disabled]
  )

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <Image
          alt="listings"
          src={data.imageSrc}
          fill
          className="object-cover h-full w-full group-hover:scale-110 transition"
        />
        <div className="absolute top-3 right-3">
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </div>
      </div>
      <div className="font-semibold text-lg">
        {location?.region}, {location?.label}
      </div>
      <div className="font-light text-neutral-500">
        {reservationDate || data.category}
      </div>
      <div className="flex items-center gap-1">
        <div className="font-semibold">R$ {price}</div>
        {!reservation && <div className="font-light">diária</div>}
      </div>
      {onAction && actionLabel && (
        <Button disabled small label={actionLabel} onClick={handleCancel} />
      )}
    </div>
  )
}
