'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import { SafeReservation, SafeUser } from '../types'

import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listings/ListingCard'

interface TripsClientProps {
  reservations: SafeReservation[]
  currentUser?: SafeUser | null
}

export default function TripsClient({
  reservations,
  currentUser,
}: TripsClientProps) {
  const router = useRouter()
  const [deletingId, setDelitingId] = useState('')

  const onCancel = useCallback(
    (id: string) => {
      setDelitingId(id)

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Viagem cancelada')
          router.refresh()
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error)
        })
        .finally(() => {
          setDelitingId('')
        })
    },
    [router]
  )

  return (
    <Container>
      <Heading title="Viagem" subtitle="Onde você esteve e onde você vai" />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancelar reserva"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}
