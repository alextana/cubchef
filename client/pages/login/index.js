import { AuthContext } from 'context/auth'
import React, { useContext } from 'react'
import LoginForm from 'components/LoginForm/LoginForm'
import Container from 'components/Grid/Container/Container'
import Heading from 'components/Typography/Heading'

function Login() {
  const context = useContext(AuthContext)
  console.log('c', context)
  return (
    <Container extraClass="py-8 lg:py-24">
      <Heading type="h1">Login</Heading>
      <LoginForm context={context}/>
    </Container>
  )
}

export default Login
