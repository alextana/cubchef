import nodemailer from 'nodemailer'

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
      <a href="${process.env.APP_SITE}/user/verify?code=${verificationCode}">this link</a></b>
    `, // html body
  })

  console.log("Message sent: %s", info.messageId)

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export async function post({ request }) {
  const formBody = await request.json()
  let email = formBody.email

  // check if the user is already verified
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (user.verified) {
    return {
      status: 401,
      body: 'User is already verified',
    }
  }

  main(user.name, email, user.verificationCode)
  return {
    status: 200,
    body: 'Verification email sent',
  }
}