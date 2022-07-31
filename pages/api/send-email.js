require('dotenv').config()

import mail from './_utils'


export default async function handler(req, res) {

  switch (req.method) {
    case ('OPTIONS'):
      return res.status(200).json((headers, { body: "OK" })).end()

    case ('POST'):

      try {
        const { name, email, message } = req.body

        const telephone = parseInt(req.body.telephone)

        if (!name || !email || !message) {
          return res.status(403).json({ message: 'No se han ingresado todos los datos' }).end()
        }

        if (!telephone || typeof telephone === NaN) {

          mail(name, email, message)

          return res.status(201).send('Email envíado!')
        }

        mail(name, email, message, telephone)

        return res.status(201).send('Email envíado!').end()
      } catch (error) {
        return res.status(500).json({ message: error }).end()
      }

    case ('GET'):
      return res.send('<h1>Hola Mundo!</h1>')

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' }).end()
  }
}