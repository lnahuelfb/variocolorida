require('dotenv').config()

import sendEmail from './_utils'

export default async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Methods', 'POST')

  switch (req.method) {
    case ('POST'):

      const { name, email, message } = req.body

      const telephone = parseInt(req.body.telephone)

      if (!name || !email || !message) {
        return res.status(403).json({ message: 'No se han ingresado todos los datos' })
      }

      if (!telephone || typeof telephone === NaN) {
        sendEmail(name, email, message)
      }
      
      sendEmail(name, email, message, telephone)

    case ('GET'):
      return res.send('<h1>Hola Mundo!</h1>')

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}