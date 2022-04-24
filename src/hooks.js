import * as cookie from 'cookie'

import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export async function getSession({ request }) {
  const cookies = cookie.parse(request.headers.get('cookie') || '')

  if (!cookies.session_id) {
    return {
      authenticated: false,
    }
  }

  const userSession = await prisma.user.findFirst({
    where: {
      verified: true,
      session_id: cookies.session_id,
    },
  })

  if (userSession) {
    return {
      authenticated: true,
      email: userSession.email,
      name: userSession.name,
    }
  } else {
    return {
      authenticated: false,
    }
  }
}