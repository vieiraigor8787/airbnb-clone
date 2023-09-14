'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import { SafeListing, SafeUser } from '../types'

import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listings/ListingCard'

interface PropertiesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

export default function PropertiesClient({
  listings,
  currentUser,
}: PropertiesClientProps) {
  const router = useRouter()
  const [deletingId, setDelitingId] = useState('')

  const onCancel = useCallback(
    (id: string) => {
      setDelitingId(id)

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Propriedade excluída')
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
      <Heading title="Propriedades" subtitle="Suas propriedades cadastradas" />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Excluir propriedade"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}
