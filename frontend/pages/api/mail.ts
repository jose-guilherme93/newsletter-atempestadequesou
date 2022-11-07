// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'

export default function handler() {

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "17cf6e8189d6b7",
    pass: "a35bd2ee747fc2"

  },
});

// send mail with defined transport object
transporter.sendMail({
  from: '"a tempestade que sou" <atempestadequesou@gmail.com>', // sender address
  to: "jose-guilherme93@hotmail.com", // list of receivers
  subject: "boas vindas a você!", // Subject line
  text: "mensagem enviada com fetch", // plain text body
  html: "<b>mensagem enviada com fetch do navegador</b>", // html body
}).catch((error) => console.log(error))
}