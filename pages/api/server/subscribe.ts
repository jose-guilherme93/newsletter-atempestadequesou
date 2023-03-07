import type { 
  NextApiRequest, 
  NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

import connectToDatabase from './connect-to-database'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

  const uri = process.env.MONGODB_URI

  const {email, nome} = req.body
  
  const db = await connectToDatabase(uri)
  const collection = db.collection('subscribers')

  const duplicateEmail = await collection.findOne({ email })
    if(duplicateEmail?.email !== email) {

      await collection.insertOne(
        {
          nome,
          email
        }
      )
    }

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
  user: process.env.EMAIL,
  pass: process.env.PASSWORD
}});

await transporter.sendMail({
  from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
  to: email,
  replyTo: "atempestadequesou@gmail.com",
  subject:  `boas vindas, ${nome}!`,
  text: `<h3>é um prazer ter você aqui, no meu cantinho.</h3>

  <p>Sempre que um texto novo for publicado no @atempestadequesou, irei mandar para você, por aqui. sem spam, e sem links chatos.</p>

  <p>geralmente publico uma vez a cada duas semanas. mas outras, dois textos por semana. depende do ritmo dos meus sentimentos, dos pensamentos(que são muitos), e da disponibilidade. </p>

  <p>ah, eu queria poder compartilhar mais do que meus textos por aqui. como livros que me inspiram, séries que despertam coisas muito boas e qualquer outra coisa que caiba nos assuntos dos meus textos.</p>

  <p>tente marcar esse email como confiável, assim nunca chegará na caixa de spam. no mais, obrigada por ler.</p>
  <br/>
  <p>atempestadequesou</p>
  <br/>
  <a href="https://atempestadequesou.com/delete-email">descadastrar seu email</a>`, 
  html: `<style>
  
  h1, p {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 500;
  }

</style>
<body>
  <h3>é um prazer ter você aqui, no meu cantinho.</h3>

  <p>Sempre que um texto novo for publicado no @atempestadequesou, irei mandar para você, por aqui. sem spam, e sem links chatos.</p>

  <p>geralmente publico uma vez a cada duas semanas. mas outras, dois textos por semana. depende do ritmo dos meus sentimentos, dos pensamentos(que são muitos), e da disponibilidade. </p>

  <p>ah, eu queria poder compartilhar mais do que meus textos por aqui. como livros que me inspiram, séries que despertam coisas muito boas e qualquer outra coisa que caiba nos assuntos dos meus textos.</p>

  <p>tente marcar esse email como confiável, assim nunca chegará na caixa de spam. no mais, obrigada por ler.</p>
  <br/>
  <p>atempestadequesou</p>
  <br/>
  <a href="https://atempestadequesou.com/delete-email">descadastrar seu email</a>
</body> `

})

.catch((error) => console.log(error))
return res.status(201).json({"message": "ok"})
}