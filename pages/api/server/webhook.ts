import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

  const mailPostText =  req.body.inputTextArea.replace(/\n/g,"<br>")

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }})
 
 
   res.status(200)

   await transporter.sendMail({
      from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
      to: 'jose-guilherme93@hotmail.com',
      replyTo: "atempestadequesou@gmail.com",
      subject: "excerto de mim",
      text: mailPostText,
      html: mailPostText

   })

  }