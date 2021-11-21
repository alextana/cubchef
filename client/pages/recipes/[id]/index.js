import Container from 'components/Grid/Container/Container'
import RecipeList from 'components/Recipes/RecipeList'
import Heading from 'components/Typography/Heading'

function Recipe({ recipe }) {
  console.log(recipe)
  return (
    <Container extraClass="py-8">
      {recipe && (
        <div className="flex flex-col">
          <div className="heading-container mx-auto mb-4">
          </div>
          <div className="mx-auto flex gap-3 items-start w-max">
          <img src={recipe.image} alt={recipe.title}/>
          <div className="additional-info p-4">
              <Heading type="h1">{recipe.title}</Heading>
              <Heading type="recipe-h2">Ready in: {recipe.readyInMinutes}m</Heading>
              <Heading type="recipe-h2">Serves: {recipe.servings}</Heading>
              <Heading type="recipe-h2">Source: <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">{recipe.sourceName}</a></Heading>
            </div>
          </div>
        </div>
      )}
    </Container>)
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
