import argon2 from 'argon2'
import { v4 as uuidv4 } from 'uuid';
import * as cookie from 'cookie'

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
        const cookieId = uuidv4()
        await prisma.user.update({
          where: {
            id: user.id,
          }, data: {
            session_id: cookieId,
          }
        })
        // cookie created, set header
        const headers = {
          'Set-Cookie': cookie.serialize('session_id', cookieId, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            sameSite: 'lax',
          })
        }
        return {
          status: 200,
          headers,
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
    console.error(err)
    return {
      status: 500,
      body: 'Unexpected error',
    }
  }
}