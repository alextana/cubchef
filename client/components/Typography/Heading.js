import React from 'react'

function Heading({ children, type }) {
  return (
    <>
      {type === 'h1' && (
        <h1 className="text-gray-800 text-3xl font-extrabold mb-4">
          {children}
        </h1>
      )}
      {type === 'h2' && <h2>{children}</h2>}
      {type === 'h3' && <h3>{children}</h3>}
      {type === 'h4' && <h4>{children}</h4>}
    </>
  )
}

export default Heading
