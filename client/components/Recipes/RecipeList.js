import RecipeCard from './RecipeCard'
import Button from '../Button/Button'
import Link from 'next/link'

export default function RecipeList({ recipes }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
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
            <div className="recipe-cta">
              <Link href={`/recipes/${recipe.id}`}>
                <Button
                  classType="primary"
                  extraClass="w-48 py-8 text-center mt-4 block"
                >
                  <span className="text-center font-extrabold">View more</span>
                </Button>
              </Link>
            </div>
          </RecipeCard>
        ))}
    </div>
  )
}
