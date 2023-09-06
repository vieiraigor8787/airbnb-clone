'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { SlDiamond } from 'react-icons/sl'

import Container from '../Container'
import CategoryBox from '../CategoryBox'

export const categories = [
  {
    label: 'Praia',
    icon: TbBeach,
    description: 'asdasda',
  },
  {
    label: 'Fazenda',
    icon: GiWindmill,
    description: 'asdasda',
  },
  {
    label: 'Moderno',
    icon: MdOutlineVilla,
    description: 'asdasda',
  },
  {
    label: 'Interior',
    icon: TbMountain,
    description: 'asdasda',
  },
  {
    label: 'Piscina',
    icon: TbPool,
    description: 'asdasda',
  },
  {
    label: 'Ilha',
    icon: GiIsland,
    description: 'asdasda',
  },
  {
    label: 'Lago',
    icon: GiBoatFishing,
    description: 'asdasda',
  },
  {
    label: 'Ski',
    icon: FaSkiing,
    description: 'asdasda',
  },
  {
    label: 'Castelo',
    icon: GiCastle,
    description: 'asdasda',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'asdasda',
  },
  {
    label: 'Neve',
    icon: BsSnow,
    description: 'asdasda',
  },
  {
    label: 'Caverna',
    icon: GiCaveEntrance,
    description: 'asdasda',
  },
  {
    label: 'Deserto',
    icon: GiCactus,
    description: 'asdasda',
  },
  {
    label: 'Celeiro',
    icon: GiBarn,
    description: 'asdasda',
  },
  {
    label: 'Luxuoso',
    icon: SlDiamond,
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
