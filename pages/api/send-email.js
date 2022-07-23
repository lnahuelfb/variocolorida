import nodemailer from 'nodemailer'
require("dotenv").config();

const emails = []

async function handler(req, res) {

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

export default handler