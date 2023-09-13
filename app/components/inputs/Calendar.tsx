'use client'

import { DateRange, Range, RangeKeyDict } from 'react-date-range'

interface CalendarProps {
  value: Range
  onChange: (value: RangeKeyDict) => void
  disabledDate?: Date[]
}

export default function Calendar({
  disabledDate,
  value,
  onChange,
}: CalendarProps) {
  return <DateRange />
}
