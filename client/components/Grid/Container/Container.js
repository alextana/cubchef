import PropTypes from 'prop-types'

Container.propTypes = {
  extraClass: PropTypes.string,
}

export default function Container({ children, extraClass }) {
  return (
    <div className={`container mx-auto ${extraClass}`}>
      {children}
    </div>
  )
}

