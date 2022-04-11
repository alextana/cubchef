import { v4 as uuidv4 } from 'uuid';

import pkg from '@prisma/client';
const { PrismaClient } = pkg
const prisma = new PrismaClient()

// to log out a user we can just
// update the session_id to a new value
// this way it won't match

export async function post ({ request }) {
  const req = await request.json()
  let email = req.email

  // get user by email
  await prisma.user.update({
    where: {
      email,
    }, data: {
      session_id: uuidv4(),
    }
  })

  return {
    status: 200,
    body: {
      message: 'Logged out',
    }
  }
}