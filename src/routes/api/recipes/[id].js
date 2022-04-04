export async function get({ params }) {
  const id = params.id
  const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API}`)
  const recipe = await res.json()

  return {
    status: 200,
    body: recipe,
  }
}