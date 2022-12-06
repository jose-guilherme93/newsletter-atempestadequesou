
import type {NextApiRequest, NextApiResponse} from 'next'
import fs from 'node:fs'
import path from 'path'

import nodemailer from 'nodemailer'

import jsonPreviousMessageFile from '/tmp/jsonPreviousMessage.json'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == process.env.WEBHOOK_TOKEN
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.status(400);
  }
  
  res.status(200).json({"message": "ok"})

  const newMessage = req.body.entry[0].changes[0].value.message
 
  const previousMessage = newMessage
  fs.writeFile('jsonPreviousMessage.json', JSON.stringify({previousMessage}, null, 2), (err) => console.log(err))

  path.resolve('./tpm/', jsonPreviousMessageFile.previousMessage)

    const sendMail = () => {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
      }});
    //req.body.entry[0].changes[0].value.from.name
    transporter.sendMail({
      from: `${'a tempestade que sou'} <atempestadequesou@gmail.com>`, 
      to: 'jose-guilherme93@hotmail.com',
      subject: `excerto de mim`,
      text: `exemplo de texto sem html`,
      html: `${req.body.entry[0].changes[0].value.verb == 'add' && newMessage}`
    })
  }
  

  if(newMessage.valueOf()
      !==
    jsonPreviousMessageFile.previousMessage.valueOf() 
    ) {

      sendMail()
      console.log('email enviado')

    } else console.log('arquivos .json iguais. email duplicado não enviado')
}
  
console.log(jsonPreviousMessageFile.previousMessage)
  

