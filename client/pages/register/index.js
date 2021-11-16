import React from 'react'
import Container from 'components/Grid/Container/Container'
import Heading from 'components/Typography/Heading'
import RegisterForm from 'components/RegisterForm/RegisterForm'
import BreakfastSVG from './assets/BreakfastSVG'

function Register() {
  return (
    <Container extraClass="py-8 lg:py-24">
      <div className="grid rounded-2xl overflow-hidden w-2/3 mx-auto grid-cols-1 lg:grid-cols-2 shadow-2xl">
        <div className="w-full h-full self-center bg-gradient-to-b from-yellow-300 to-yellow-200">
          <BreakfastSVG />
        </div>
        <div className="w-full h-full register-form self-center bg-white p-6">
          <Heading type="h1">Register</Heading>
          <RegisterForm />
        </div>
      </div>
    </Container>
  )
}

export default Register
