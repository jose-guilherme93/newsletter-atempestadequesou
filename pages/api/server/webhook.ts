import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios'
import nodemailer from 'nodemailer'

import { EmailProps } from '../DTO';

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

    res.send(req.query['hub.challenge'])
       
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
    const fields = 'media_url, caption, picture, permalink'
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&caption={caption} `

    const {data}: EmailProps = await axios.get(url)
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }});
  
  transporter.sendMail({
    from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
    to: 'jose-guilherme93@hotmail.com',
    subject: `boas vindas, ${req.body.nome}`,
    text: `exemplo de texto sem html`,
    html: `${data.data[0].caption}`
})


}