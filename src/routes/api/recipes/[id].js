export async function get({ params }) {
  const id = params.id
  const res = await fetch(`${process.env.API_SITE}/api/recipe/?id=${id}`)
  const recipe = await res.json()

  return {
    status: 200,
    body: recipe,
  }
}