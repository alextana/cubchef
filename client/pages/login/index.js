import React from 'react'
import LoginForm from 'components/LoginForm/LoginForm'
import Container from 'components/Grid/Container/Container'
import Heading from 'components/Typography/Heading'

function Login() {
  return (
    <Container extraClass="py-8 lg:py-24">
      <Heading type="h1">Login</Heading>
      <LoginForm/>
    </Container>
  )
}

export default Login
