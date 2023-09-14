import Container from '../components/Container'
import Heading from '../components/Heading'
import { SafeListing, SafeUser } from '../types'

interface FavoritesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

export default function FavoritesClient({
  currentUser,
  listings,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favoritos" subtitle="Onde você esteve e onde você vai" />
    </Container>
  )
}
