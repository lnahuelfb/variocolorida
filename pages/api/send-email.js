require('dotenv').config()

import NextCors from 'nextjs-cors'
import mail from './_utils'


export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", '*')
  res.setHeader('Content-Type', 'application/json')

  await NextCors(req, res, {
    methods: ['POST', 'GET']
  })

  switch (req.method) {
    case ('POST'):

      const { name, email, message } = req.body

      const telephone = parseInt(req.body.telephone)

      if (!name || !email || !message) {
        return res.status(403).json({ message: 'No se han ingresado todos los datos' })
      }

      if (!telephone || typeof telephone === NaN) {

        mail(res, name, email, message)

        return res.status(201).send('Email envíado!')
      }

      mail(res, name, email, message, telephone)

      return res.status(201).send('Email envíado!')

    case ('GET'):
      return res.send('<h1>Hola Mundo!</h1>')

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}