import nodemailer from 'nodemailer'
require("dotenv").config();
// import Cors from 'cors'

// const cors = Cors({
//   methods: ['GET', 'POST', 'HEAD'],
//   origin: '*'
// })

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }
//       return resolve(result)
//     })
//   })
// }

const emails = []

async function handler(req, res) {

  // await runMiddleware(req, res, cors)

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

// const handler = async (req, res) => {

//   await nextCors(req, res, {
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     origin: '*',
//     optionsSuccessStatus: 200,
//   });

// if (req.method === 'POST') {


// }

export default handler