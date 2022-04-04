import express from 'express'
const router = express.Router()

import pkg from '@prisma/client';
const { PrismaClient } = pkg
const prisma = new PrismaClient()

router.get('/users', async (req, res, next) => {
  const users = await prisma.user.findMany()
  res.json(users)
  next()
})

export default router