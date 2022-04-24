import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export async function get({ url }) {
  const code = url.searchParams.get('code')

  const user = await prisma.user.findFirst({
    where: {
      verificationCode: code,
    },
  })

  if (!user) {
    return {
      status: 401,
      body: 'Invalid verification code',
    }
  }

  if (!user.verified) {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        verified: true,
      }
    })
    return {
      status: 200,
      body: user,
    }
  }

  else {
    return {
      status: 401,
      body: 'User is already verified',
      message: 'User is already verified',
    }
  }
}