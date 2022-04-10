import argon2 from 'argon2'
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer'

import pkg from '@prisma/client';
const { PrismaClient } = pkg
const prisma = new PrismaClient()

async function main(name, email, verificationCode) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: `Hello ${name}`, // Subject line
    text: "Hello world?", // plain text body
    html: `
      <b>Hello ${name}, please verify your email by clicking on
      <a href="http://localhost:3000/user/verify?code=${verificationCode}">this link</a></b>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
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

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
      registered_at: new Date(),
      verificationCode,
    },
  })

  if (!user) {
    return {
      status: 500,
      body: 'Could not create user',
    }
  } else {
    // user created, send email
    main(name, email, verificationCode).catch(console.error);
    return {
      status: 200,
      body: user,
    }
  }
}