import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'
import connectToDatabase, { uri } from './connect-to-database'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

  const vercelEnv = process.env.VERCEL_ENV

  let collectionData: string

  if (vercelEnv === 'development') {
    collectionData = 'development_subscribers'
  }
  else collectionData = 'subscribers'
  
  const mailpostTitle = req.body.inputTitle
  const mailPostText =  req.body.inputTextArea.replace(/\n/g,"<br>")

  let emails: any = []
  async function getEmails() {
    const db = await connectToDatabase(uri)
    const collection = db.collection(collectionData)
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
      bcc: emails,
      replyTo: "atempestadequesou@gmail.com",
      subject: mailpostTitle,
      text: mailPostText,
      html: mailPostText
   
   } )
    
   .catch((error) => {
    console.log(error)
   })
  return res.json("ok")
  }
  