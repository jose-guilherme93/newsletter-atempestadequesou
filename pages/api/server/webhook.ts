import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }})

  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == process.env.WEBHOOK_TOKEN
  ) {
    res.send(req.query['hub.challenge'])
  } else {
  
    res.status(200)

   await transporter.sendMail({
      from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
      to: 'jose-guilherme93@hotmail.com',
      replyTo: "atempestadequesou@gmail.com",
      subject: "excerto de mim",
      text: `${req.body.entry[0].changes[0].value?.message}`,
      html: `${req.body.entry[0].changes[0].value?.message}`
  })
}

}