import Button from '../../buttons/button/Button'
const { REACT_APP_SPOONACULAR_API_KEY } = process.env

export default function Card({ children }) {

  console.log(REACT_APP_SPOONACULAR_API_KEY)
  return (
    <div class="rounded border p-4 hover:bg-gray-100">
      {children}
      <Button type="primary" extraClass="mt-4">test</Button>
    </div>
  )
}
