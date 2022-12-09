import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'
import {MongoClient} from 'mongodb'

async function connectToDatabase(uri: string) {

  
  
  const client = await MongoClient.connect(uri)

  const db = client.db('newsletter')
  return db
}

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

const {email, nome} = req.body
const uri = process.env.MONGODB_URI
console.log(typeof uri)
const db = await connectToDatabase(uri)


db.collection('subscribers').indexExists(
  email
)

const collection = db.collection('subscribers')
await collection.insertOne(
  {
    nome,
    email
  }
  
)

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
  user: process.env.EMAIL,
  pass: process.env.PASSWORD
}});

transporter.sendMail({
  from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
  to: email,
  subject:  `boas vindas, ${nome}`,
  text: `exemplo de texto sem html`, 
  html: `<style>
  
  h1, p {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 500;
  }

</style>
<body>
  <h3>é um prazer ter você aqui, ${req.body.nome}</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur adipisci quis quod, architecto quasi itaque vero dolore similique eius corporis, pariatur perferendis quas eaque cupiditate repellendus consequatur hic voluptatibus?</p>
</body> `

})

.catch((error) => console.log(error))
return res.status(201).json({"message": "ok"})
}