import React from 'react'

function Heading({ children, type, extraClass = '' }) {
  return (
    <>
      {type === 'h1' && (
        <h1 className={`text-gray-600 text-4xl font-extrabold mb-4 tracking-tighter ${extraClass}`}>
          {children}
        </h1>
      )}
      {type === 'h2' && <h2>{children}</h2>}
      {type === 'h3' && (
        <h3 className="text-gray-600 font-extrabold text-2xl mb-3">{children}</h3>
      )}
      {type === 'h4' && <h4>{children}</h4>}
      {type === 'recipe-h2' && <h2 className="text-gray-600 text-xl font-normal tracking-tighter">{children}</h2>}
    </>
  )
}

export default Heading
