import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListings'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import PropertiesClient from './PropertiesClient'

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Não autorizado" subtitle="Login necessario" />
      </ClientOnly>
    )
  }

  const listings = await getListings({
    userId: currentUser.id,
  })

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Nenhuma propriedade encontrada"
          subtitle="Parece que você não tem nenhuma propriedade cadastrada"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}
