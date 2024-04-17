
import { Resend } from 'resend';

import connectToDatabase, { uri } from '../connect-to-database'

import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest , res: NextResponse) {

const vercelEnv = process.env.VERCEL_ENV

let collectionData: string

if (vercelEnv === 'development') {
  collectionData = 'development_subscribers'
}
else collectionData = 'subscribers'


const data = await req.json()
const {inputTextArea, inputTitle} = await data



let emails: any = []
async function getEmails() {
  const db = await connectToDatabase(uri)
  const collection = db.collection(collectionData)
  const cursor = collection.find({});

  await cursor.forEach((doc) => {
    emails.push(doc.email)
    
  })
}

await getEmails()
  

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  
  from: 'a tempestadeque sou <newsletter@atempestadequesou.com>',
  to: emails,
  bcc: emails,
  subject: inputTitle,
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  </head>
  <body>
      <style>
          div {
            max-width: 550px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            line-height: normal;
            font-weight: 400;
            font-size: large;
          }
      </style>
      <div>${inputTextArea}</div>
  </body>
  </html>`,
} ).catch((error) => console.log(error));
return NextResponse.json({"status": "ok"})
  }
  