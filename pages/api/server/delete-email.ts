import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

console.log(req.statusMessage)
res.status(200).json({"message": "email apagado"})

}