'use client'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import getFavoriteListings from '../actions/getFavoriteListings'
import getCurrentUser from '../actions/getCurrentUser'
import FavoritesClient from './FavoritesClient'

export default async function FavoritePage() {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Nenhum lugar favorito"
          subtitle="Parece que você ainda não salvou seus lugares favoritos"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}
