import nodemailer from 'nodemailer'
import Cors from 'cors'
import initMiddleware from '/middleware'
require("dotenv").config();

const emails = []

const allowOrigins = ['https://variocolorida.vercel.app']


const cors = initMiddleware(
  Cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  await cors(req, res)

  if (req.method === 'OPTIONS') {
    res.status(200).end();
  }

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

  // export default async function handler(req, res) {

  //   }

  return res.send(emails)
}