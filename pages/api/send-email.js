import Cors from 'cors'

import mail from './_utils'
import runMiddleware from '/cors'

export default async function handler(req, res) {

  await runMiddleware(req, res, Cors('*'))

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

  return res.send('Hola mundo')
}