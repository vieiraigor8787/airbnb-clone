'use client'

import { useRouter } from 'next/navigation'

import Heading from './Heading'
import Button from './Button'

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export default function EmptyState({
  title = 'Nenhum resultado encontrado',
  subtitle = 'Tente mudar ou remover alguns de seus filtros',
  showReset,
}: EmptyStateProps) {
  const router = useRouter()

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remova todos os filtros"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  )
}
