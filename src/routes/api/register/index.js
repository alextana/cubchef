import argon2 from 'argon2'
import { v4 as uuidv4 } from 'uuid'
import nodemailer from 'nodemailer'
import * as cookie from 'cookie'

import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

async function main(name, email, verificationCode) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  })
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Cubchef" <cubchefweb@gmail.com>', // sender address
    to: email, // list of receivers
    subject: `Hello ${name}`, // Subject line
    text: "Hello, this email is used to verify your account", // plain text body
    html: `
      <b>Hello ${name}, please verify your email by clicking on
      <a href="http://localhost:3000/user/verify?code=${verificationCode}">this link</a></b>
    `, // html body
  })

  console.log("Message sent: %s", info.messageId)

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export async function post({ request }) {
  let verificationCode = uuidv4()
  const formBody = await request.json()
  let name = formBody.name
  let email = formBody.email
  let password = formBody.password

  let hash = null
  try {
    hash = await argon2.hash(password)
  } catch (error) {
    return {
      status: 500,
      body: 'Unexpected error',
    }
  }

  let user = null
  let cookieId = null

  try {
    user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        registered_at: new Date(),
        verificationCode,
      },
    })
  } catch (error) {
    return {
      status: 500,
      body: 'Unexpected error',
    }
  }

  if (!user) {
    return {
      status: 500,
      body: 'Could not create user',
    }
  } else {
    // user created, set cookie
    try {
      cookieId = uuidv4()
      await prisma.user.update({
        where: {
          id: user.id,
        }, data: {
          session_id: cookieId,
        }
      })
    } catch (error) {
      console.error('Could not set cookie for session')
    }

    // cookie created, set header
    const headers = {
      'Set-Cookie': cookie.serialize('session_id', cookieId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        sameSite: 'lax',
      })
    }

    // user created, send email
    main(name, email, verificationCode).catch(console.error)
    return {
      headers,
      status: 200,
      body: user,
    }
  }
}
