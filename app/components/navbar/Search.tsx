'use client'

import { BiSearch } from 'react-icons/Bi'

import useSearchModal from '@/app/hooks/useSearchModal'

export default function Search() {
  const search = useSearchModal()
  return (
    <div
      onClick={search.onOpen}
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6">anyyyw</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          any week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3">
          <div className="hidden sm:block">add guess</div>
          <div className="p-2 bg-rose-600 rounded-full text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}
