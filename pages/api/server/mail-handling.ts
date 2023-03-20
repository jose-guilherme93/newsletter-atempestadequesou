import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'
import connectToDatabase, { uri } from './connect-to-database'


export default async function handler(req: NextApiRequest , res: NextApiResponse) {
  
  const mailPostText =  req.body.inputTextArea.replace(/\n/g,"<br>")

  let emails: any = []
  async function getEmails() {
    const db = await connectToDatabase(uri)
    const collection = db.collection('subscribers')
    const cursor = collection.find({});
    await cursor.forEach((doc) => {
      emails.push(doc.email)
     return emails
      
    })
    return emails
  }

getEmails()
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD

    
  }}) 
  
   await transporter.sendMail({
      from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
      to: emails,
      replyTo: "atempestadequesou@gmail.com",
      subject: "excerto de mim",
      text: mailPostText,
      html: mailPostText
   
   } )
    
   .catch((error) => {
    console.log(error)
   })
  return res.json("ok")
  }
  