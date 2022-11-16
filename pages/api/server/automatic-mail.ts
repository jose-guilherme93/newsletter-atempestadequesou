// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer'

export default function handler(req: any, res: any) {

var transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
 
  auth: {
    user: "17cf6e8189d6b7",
    pass: "a35bd2ee747fc2"
 },
});

// var transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true, 
//   auth: {
//   user: process.env.EMAIL,
//   pass: process.env.PASSWORD
// }});


transporter.sendMail({
  from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
  to: req.body.email,
  subject:  `boas vindas, ${req.body.nome}`,
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

}).then(() => res.status(200).send())

.catch((error) => console.log(error))
}