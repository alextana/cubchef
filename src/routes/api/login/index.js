import argon2 from 'argon2'
// import cookie from 'cookie'

import pkg from '@prisma/client';
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export async function post({ request }) {
  const req = await request.json()
  let email = req.email
  let password = req.password

  // get user by email
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })
  // try to match password
  try {
    if (await argon2.verify(user.password, password)) {
      // password match
      // check if user is verified
      if (!user.verified) {
        return {
          status: 401,
          body: 'User is not verified',
        }
      } else {
        // create token
        return {
          status: 200,
          body: user,
        }
      }
    } else {
      // password did not match
      return {
        status: 401,
        body: 'Invalid credentials',
      }
    }
  } catch (err) {
    // internal failure
    return {
      status: 500,
      body: 'Unexpected error',
    }
  }

  // if (!user) {
  //   return res.status(401).send('Invalid credentials')
  // } else if (!user.verified) {
  //   return res.status(401).send('Please verify your email first')
  // } else {
  //   return res.json('Logged in')
  // }
}