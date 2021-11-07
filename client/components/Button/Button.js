import PropTypes from 'prop-types'

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  extra: PropTypes.string,
  onClick: PropTypes.func,
}

export default function Button({ children, icon, type, extraClass, onClick }) {
  let classToUse = null
  let pathToUse = null

  switch (type) {
    case 'primary':
      classToUse = `bg-yellow-500 px-6 py-2 rounded-xl text-white block hover:bg-yellow-600`
      break
    case 'secondary':
      classToUse = `bg-gray-500 px-6 py-2 rounded-xl text-white block hover:bg-gray-600`
      break
    default:
      break
  }

switch (icon) {
    case 'done':
      pathToUse = 'M5 13l4 4L19 7'
      break
    case 'error':
      pathToUse = 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      break
    case 'loading':
      pathToUse = 'M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'
      break
    default:
      break
  }

  return (
    <button className={`transition-all flex gap-3 justify-between ${classToUse && classToUse} ${extraClass}`} onClick={onClick}>
      {children}
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={pathToUse}
          />
        </svg>
      )}
    </button>
  )
}