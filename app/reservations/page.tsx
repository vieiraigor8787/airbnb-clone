import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import ReservationClient from './ReservationClient'

export default async function ReservationPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Não autorizado" subtitle="Por favor faça o login" />
      </ClientOnly>
    )
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Nenhuma reserva encontrada"
          subtitle="Parece que ainda não houve nenhuma reserva em seus estabelecimentos"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ReservationClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}
