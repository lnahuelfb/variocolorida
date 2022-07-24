import Cors from 'cors'
import mail from './_utils'

const allowOrigins = ['http://localhost:3000', 'https://variocolorida.vercel.app', 'variocolorida-g6fqlm56e-lnahuelfb.vercel.app', 'http://192.168.1.33:3000']

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
  origin: allowOrigins
})

function runMiddleware(req, res, fn) {
  console.log('Entró al middleware')

  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req, res) {

  await runMiddleware(req, res, cors)

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

  return res.send()
}