import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer'


export default function handler(req: NextApiRequest , res: NextApiResponse) {


let transporter = nodemailer.createTransport({
host: "smtp.mailtrap.io",
port: 2525,
auth: {
    user: "17cf6e8189d6b7",
    pass: "a35bd2ee747fc2"
}
});

transporter.sendMail({
  from: '"a tempestade que sou" <atempestadequesou@gmail.com>', 
  to: 'guiiih99@gmail.com',
  subject:  `boas vindas`,
  text: `exemplo de texto sem html`, 
  html: `<style>
  
  h1, p {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 500;
  }

</style>
<body>
  ${req.body.data}
</body>`

}).then(() => res.status(200))

.catch((error) => console.log(error))
}