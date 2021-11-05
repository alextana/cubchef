import RecipeCard from '../../grid/cards/Card'

const recipes = [
  { id: 'haau23908128', name: 'Kimchi fried rice' },
  { id: '123sfdasdfasgva', name: 'Egg fried rice' },
  { id: '34234davfsdvasvf', name: 'Ramen noodles' },
]

export default function Main() {
  const recipesToRender = recipes.map((recipe) => (
    <RecipeCard key={recipe.id}>
      {recipe.name}
    </RecipeCard>
  ))

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">{recipesToRender}</div>
    </div>
  )
}
