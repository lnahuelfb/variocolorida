import Cors from 'cors'

import mail from './_utils'
import runMiddleware from '/cors'

const allowOrigins = [
  'http://localhost:3000/',
  'https://variocolorida.vercel.app/',
  'https://variocolorida-7i6udbt8h-lnahuelfb.vercel.app/',
]

const corsOptions = {
  origin: allowOrigins
}

const cors = Cors(corsOptions)

export default async function handler(req, res) {

  req.body=JSON.parse(req.body);

  res.setHeader("Access-Control-Allow-Origin", allowOrigins);
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  await runMiddleware(req, res, cors)

  if (req.method === 'OPTIONS') { return res.status(200).json((headers, { body: "OK" })) }

  if (req.method === 'POST') {
    const { name, email, message } = req.body

    const telephone = parseInt(req.body.telephone)

    if (!name || !email || !message) {
      return res.status(403).send('No ingresaron todos los datos')
    }

    if (!telephone || typeof telephone === NaN) {

      mail(name, email, message)

      return res.status(201).send('Email envíado!')
    }

    mail(name, email, message, telephone)

    return res.status(201).send('Email envíado!')
  }

  return res.send('<h1>Hola Mundo!</h1>')
}