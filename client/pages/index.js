import Head from 'next/head'
import Container from 'components/Grid/Container/Container'
import RecipeList from 'components/Recipes/RecipeList'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import Heading from 'components/Typography/Heading'

export default function Home({ recipes }) {
  console.log(recipes)
  return (
    <div>
      <Container extraClass="py-8">
        <Heading type="h1">What are you <span className="text-primary text-5xl">cooking</span> today?</Heading>
        <RecipeList recipes={recipes.recipes} />
      </Container>
    </div>
  )
}

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         getUsers {
//           id
//           email
//           username
//         }
//       }
//     `,
//   })
//   return {
//     props: {
//       users: data.getUsers,
//     },
//   }
// }

export async function getStaticProps(context) {
  const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=10`)
  const recipes = await res.json()
  return {
    props: { recipes }
  }
}
