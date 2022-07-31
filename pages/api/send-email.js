// import Cors from 'cors'
// import NextCors from 'nextjs-cors'
require('dotenv').config()

import mail from './_utils'
// import runMiddleware from '/cors'

// const corsOptions = {
//   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
// origin: '*',
// origin: 'https://variocolorida.vercel.app/',
// optionsSuccessStatus: 200,
// }

// const cors = Cors(corsOptions)

export default async function handler(req, res) {

  // await runMiddleware(req, res, cors)
  // await NextCors(req, res, {
  //   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //   origin: '*'
  // })

  switch (req.method) {
    case ('OPTIONS'):
      return res.status(200).json((headers, { body: "OK" }))

    case ('POST'):

      try {
        const { name, email, message } = req.body

        const telephone = parseInt(req.body.telephone)

        if (!name || !email || !message) {
          return res.status(403).json({message: 'No se han ingresado todos los datos'})
        }

        if (!telephone || typeof telephone === NaN) {

          mail(name, email, message)

          return res.status(201).send('Email envíado!')
        }

        mail(name, email, message, telephone)

        return res.status(201).send('Email envíado!')
      } catch (error) {
        return res.status(500).json({message: error.message})
      }

    case ('GET'):
      return res.send('<h1>Hola Mundo!</h1>')

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}