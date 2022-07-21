import nodemailer from 'nodemailer'
require("dotenv").config();

const emails = []

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { name, telephone, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(401).send('No ingresó todos los datos')
    }

    if (!telephone) {
      const newEmail = {
        name,
        email,
        message
      }

      emails.push(newEmail)
      return res.status(201).send('Email envíado!')
    }

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