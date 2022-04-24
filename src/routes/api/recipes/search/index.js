export async function get({ url }) {
  const searchTerms = url.searchParams.get('searchTerms')

  if (!searchTerms) {
    return
  }

  const res = await fetch(`${process.env.API_SITE}/api/recipes/search?searchTerms=${searchTerms}`)

  const recipes = await res.json()

  return {
    status: 200,
    body: recipes,
  }
}