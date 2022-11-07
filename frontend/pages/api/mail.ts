// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'

export default function handler(req: any, res: any) {

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
 secure: true, 
  auth: {
  user: process.env.EMAIL,
  pass: process.env.PASSWORD
 },
});

transporter.sendMail({
  from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
  to: req.body.email,
  subject:  `boas vindas, ${req.body.nome}!`,
  text: `mensagem enviada com fetch para, ${req.body.nome}! `, 
  html: `<b>mensagem enviada com fetch para ${req.body.nome}!</b>`, 
}).then((response) => res.send(response))
.then((response) => res.status(200))
.catch((error) => console.log(error))
}