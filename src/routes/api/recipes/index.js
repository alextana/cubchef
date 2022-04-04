export async function get() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_SPOONACULAR_API
    }&number=10`
  );

  const recipes = await res.json();

  return {
    status: 200,
    body: recipes,
  }
}