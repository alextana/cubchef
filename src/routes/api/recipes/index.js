export async function get({ url }) {
  let take = url.searchParams.get('take')

  if (!take) {
    take = 20
  }

  const res = await fetch(
    `${process.env.API_SITE}/api/recipes/random?take=${take}`,
  )

  const recipes = await res.json()

  return {
    status: 200,
    body: recipes,
  }
}