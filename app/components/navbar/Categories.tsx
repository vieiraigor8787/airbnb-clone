import { usePathname, useSearchParams } from 'next/navigation'
import { TbBeach } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'

import Container from '../Container'
import CategoryBox from '../CategoryBox'

export const categories = [
  {
    label: 'Praia',
    icon: TbBeach,
    description: 'asdasda',
  },
  {
    label: 'Campo',
    icon: GiWindmill,
    description: 'asdasda',
  },
  {
    label: 'Moderno',
    icon: MdOutlineVilla,
    description: 'asdasda',
  },
]

export default function Categories() {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if (!isMainPage) return null

  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflox-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}
