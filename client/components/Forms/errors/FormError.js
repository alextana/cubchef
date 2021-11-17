import React from 'react'

function FormError({ children }) {
  return (
    <div className="text-red bg-red-200 border-red-400 p-3 rounded-lg w-max">
      {children}
    </div>
  )
}

export default FormError
