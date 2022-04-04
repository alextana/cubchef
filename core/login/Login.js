import express from 'express'
const router = express.Router()

import pkg from '@prisma/client';
const { PrismaClient } = pkg
const prisma = new PrismaClient()

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  })

  if (!user) {
    return res.status(401).send('Invalid credentials')
  } else {
    return res.json('Logged in')
  }
})

export default router