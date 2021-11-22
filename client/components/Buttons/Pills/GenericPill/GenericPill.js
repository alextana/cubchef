import React from 'react'

export default function GenericPill({ children, onClick, extraClass }) {
  return (
    <div className={`rounded-full border px-4 py-2 hover:bg-blue-600 hover:text-white ${extraClass}`} onClick={onClick}>
      {children}
    </div>
  )
}
