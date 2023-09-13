'use client'

import Calendar from '../inputs/Calendar'

interface ListingReservationProps {
  price: number
  dateRange: Range
  totalPrice: number
  onChangeDate: (value: Range) => void
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
}

export default function ListingReservation({
  disabled,
  totalPrice,
  price,
  onSubmit,
  onChangeDate,
  disabledDates,
  dateRange,
}: ListingReservationProps) {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">R$ {price}</div>
        <div className="font-light text-neutral-600">/diária</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
    </div>
  )
}
