import React from 'react'
import Dish from 'components/Icons/Dish/Dish'

export default function SaveToCupboard() {
  return (
    <div className="transition-all rounded-2xl p-3 bg-white border mt-4 hover:bg-blue-600 hover:text-white cursor-pointer">
      <Dish extraClass="w-6 h-6"/>
    </div>
  )
}
