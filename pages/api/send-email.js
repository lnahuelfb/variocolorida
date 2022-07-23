import nodemailer from 'nodemailer'
import Cors from 'cors'
require("dotenv").config();

const emails = []

const allowOrigins = ['https://variocolorida.vercel.app']

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
  allowOrigins: allowOrigins,
  AccessControlAllowOrigin: '*'
})

function runMiddleware(req, res, fn) {
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

  if (req.method === 'POST') {
    const { name, email, message } = req.body

    const telephone = parseInt(req.body.telephone)

    if (!name || !email || !message) {
      return res.status(401).send('No ingresaron todos los datos')
    }

    if (!telephone || typeof telephone === NaN) {

      console.log(`
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
        `)

      const newEmail = {
        name,
        email,
        message
      }

      emails.push(newEmail)
      return res.status(201).send('Email envíado!')
    }

    console.log(`
      Nombre: ${name}
      Email: ${email}
      Telefono: ${parseInt(telephone)}
      Mensaje: ${message}
      `)

    const newEmail = {
      name,
      email,
      telephone,
      message
    }

    emails.push(newEmail)

    return res.status(201).send('Email envíado!')
  }

  res.send(emails)
}


// async function handler(req, res) {

// }

// export default handler