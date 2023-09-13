import getCurrentUser from '@/app/actions/getCurrentUser'
import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'

interface IParams {
  listingId?: string
}

export async function POST(req: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) return NextResponse.error()

  const { listingId } = params

  if (!listingId || typeof listingId !== 'string') throw new Error('invalid ID')

  let favorideIds = [...(currentUser.favorideIds || [])]

  favorideIds.push(listingId)

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favorideIds,
    },
  })

  return NextResponse.json(user)
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) return NextResponse.error()

  const { listingId } = params

  if (!listingId || typeof listingId !== 'string') throw new Error('invalid ID')

  let favorideIds = [...(currentUser.favorideIds || [])]

  favorideIds = favorideIds.filter((id) => id !== listingId)

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favorideIds,
    },
  })

  return NextResponse.json(user)
}
