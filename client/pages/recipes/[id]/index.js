import Container from 'components/Grid/Container/Container'
import Heading from 'components/Typography/Heading'

function Recipe({ recipe }) {
  console.log(recipe)
  return (
    <Container extraClass="py-8">
      {recipe && (
        <div className="flex flex-col">
          <div className="heading-container mb-4">
            <Heading type="h1">{recipe.title}</Heading>
            <div className="additional-title-info flex gap-3 text-gray-500">
              <span>
                Ready in: <b>{recipe.readyInMinutes}m</b>
              </span>
              <span>
                Serves: <b>{recipe.servings}</b>
              </span>
              <span>
                Source:{' '}
                <a
                  className="text-primary hover:text-blue-600 font-bold"
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {recipe.sourceName}
                </a>
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="image-ingredients" style={{ minWidth: '556px' }}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-3xl mb-4"
              />
              <div className="ingredients bg-gradient-to-t from-blue-300 to-blue-400 shadow-2xl p-6 rounded-3xl w-full">
                <Heading type="h3">
                  <span className="text-white">Ingredients:</span>
                </Heading>
                {recipe.extendedIngredients.map((ingredient, i) => (
                  <div
                    key={ingredient.id}
                    className="flex gap-2 items-center mb-2 bg-blue-500 text-white rounded-full py-2 pl-2 pr-4 w-max"
                  >
                    <div className="border rounded-full w-8 h-8 relative bg-white text-black font-bold">
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {i + 1}
                      </span>
                    </div>
                    <span className="font-bold">
                      {Math.round(ingredient.measures.metric.amount)}
                      {' ' + ingredient.measures.metric.unitShort}
                    </span>
                    {' ' + ingredient.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="instructions bg-white shadow-xl rounded-3xl p-6 border border-gray-100">
              <Heading type="h3">How to prepare:</Heading>
              {recipe.analyzedInstructions[0].steps.map((instruction, i) => (
                <div key={instruction.number} className="mb-4">
                  {instruction.step}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default Recipe

export async function getServerSideProps(context) {
  console.log(process.env.API_KEY)
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${context.params.id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
  )
  const recipe = await res.json()
  return {
    props: { recipe },
  }
}
