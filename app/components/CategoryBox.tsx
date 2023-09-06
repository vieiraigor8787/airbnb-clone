import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IconType } from 'react-icons'
import qs from 'query-string'

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected?: boolean
}

export default function CategoryBox({
  label,
  icon: Icon,
  selected,
}: CategoryBoxProps) {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    router.push(url)
  }, [label, params, router])

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? 'text-neutral-800 border-b-neutral-800'
          : 'text-neutral-500 border-transparent'
      }`}
    >
      <Icon size={36} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  )
}
