import PropTypes from 'prop-types'

RecipeCard.propTypes = {
  vegetarian: PropTypes.bool,
  vegan: PropTypes.bool,
}

export default function RecipeCard({ children, vegetarian, vegan }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      {children}
    </div>
  )
}
