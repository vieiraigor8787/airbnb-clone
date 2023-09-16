'use client'

import { useEffect } from 'react'
import EmptyState from './components/EmptyState'

interface ErrorStateProps {
  error: Error
}

export default function ErrorState({ error }: ErrorStateProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <EmptyState
      title="Deu ruim"
      subtitle="parece que há algum problema, tente novamente"
    />
  )
}
