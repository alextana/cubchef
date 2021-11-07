import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes }) {
  return (
    <div className="w-full grid grid-cols-4 gap-6">
      {recipes &&
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            vegetarian={recipe.vegetarian}
            vegan={recipe.vegan}
            cheap={recipe.cheap}
          >
            <img src={recipe.image} className="rounded-xl mb-4"/>
            <h3 className="font-extrabold text-xl text-gray-700">
              {recipe.title}
            </h3>
            <div className="recipe-info">
              <p>
                Serves
                <span className="font-extrabold">
                  {' ' + recipe.servings}
                  {recipe.servings === 1 ? ' person' : ' people'}
                </span>
              </p>
              <p>Ready in: <span className="font-extrabold">{recipe.readyInMinutes}m</span></p>
            </div>
          </RecipeCard>
        ))
      }
    </div>
  )
}
