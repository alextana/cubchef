import propTypes from 'prop-types'

RecipeCard.propTypes = {
  vegetarian: propTypes.bool,
  vegan: propTypes.bool,
}

export default function RecipeCard({ children }) {
  return (
    <div className="transition-all rounded-3xl bg-white p-4 transform hover:scale-105 hover:shadow-2xl">
      {children}
    </div>
  )
}
