require('dotenv').config()

import NextCors from 'nextjs-cors'
import mail from './_utils'


export default async function handler(req, res) {

  await NextCors(req, res, {
    methods: ['POST', 'GET']
  })

  switch (req.method) {
    case ('POST'):

      const { name, email, message } = req.body

      const telephone = parseInt(req.body.telephone)

      if (!name || !email || !message) {
        return res.status(403).json({ message: 'No se han ingresado todos los datos' }).end()
      }

      if (!telephone || typeof telephone === NaN) {

        mail(name, email, message)

        return res.status(201).send('Email envíado!').end()
      }

      mail(name, email, message, telephone)

      return res.status(201).send('Email envíado!').end()

    case ('GET'):
      return res.send('<h1>Hola Mundo!</h1>')

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' }).end()
  }
}