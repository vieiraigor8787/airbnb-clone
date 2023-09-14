import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import TripsClient from './TripsClient'

export default async function TripsPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Não autorizado" subtitle="Login necessario" />
      </ClientOnly>
    )
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Nenhuma viagem encontrada"
          subtitle="Parece que você não tem nada reservado"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  )
}
