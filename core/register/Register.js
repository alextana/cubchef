import express from 'express'
import argon2 from 'argon2'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()

import pkg from '@prisma/client';
const { PrismaClient } = pkg
const prisma = new PrismaClient()

router.post('/', async (req, res) => {
  const { name, email, password } = req.body
  let hash = null
  try {
    hash = await argon2.hash(password)
  } catch (error) {
    return res.status(500).send('Unexpected error')
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
      registered_at: new Date(),
      verificationCode: uuidv4(),
    },
  })
  if (!user) {
    return res.status(500).send('Could not create user')
  } else {
    res.status(200).send('User created')
    return res.json(user)
  }
})

export default router