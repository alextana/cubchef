import RecipeCard from './RecipeCard'
import Button from '../Buttons/Button/Button'
import SaveToCupboard from 'components/Actions/SaveToCupboard/SaveToCupboard'

export default function RecipeList({ recipes }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 mb-8">
      {recipes &&
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            vegetarian={recipe.vegetarian}
            vegan={recipe.vegan}
            cheap={recipe.cheap}
          >
            <img src={recipe.image} className="rounded-3xl mb-4" />
            <h3 className="font-extrabold text-xl text-gray-700">
              {recipe.title}
            </h3>
            <h4 className="text-gray-400 text-lg">{recipe.sourceName}</h4>
            <div className="recipe-info">
              <p>
                Serves
                <span className="font-extrabold">
                  {' ' + recipe.servings}
                  {recipe.servings === 1 ? ' person' : ' people'}
                </span>
              </p>
              <p>
                Ready in:{' '}
                <span className="font-extrabold">{recipe.readyInMinutes}m</span>
              </p>
            </div>
            <div className="recipe-cta flex items-center gap-3">
              <a href={`/recipes/${recipe.id}`}>
                <Button
                  classType="primary"
                  extraClass="w-48 py-8 text-center mt-4 block"
                >
                  <span className="text-center font-extrabold">View more</span>
                </Button>
                </a>
                <SaveToCupboard recipe={recipe} />
            </div>
          </RecipeCard>
        ))}
    </div>
  )
}
