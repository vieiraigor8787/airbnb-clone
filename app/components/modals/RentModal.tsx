'use client'

import useRentModal from '@/hooks/useRentModal'
import Modal from './Modal'

export default function RentModal() {
  const rentModal = useRentModal()

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      title="Sua home"
      actionLabel="Enviar"
    />
  )
}
