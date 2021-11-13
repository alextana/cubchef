function Recipe({ recipe }) {
  console.log(recipe)
  return <div>this is article</div>
}

export default Recipe

export async function getServerSideProps(context) {
  console.log(process.env.API_KEY)
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${context.params.id}/information?apiKey=${process.env.API_KEY}`
  )
  const recipe = await res.json()
  return {
    props: { recipe },
  }
}
