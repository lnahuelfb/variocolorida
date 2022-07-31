import nodemailer from 'nodemailer'
require("dotenv").config();

const mail = (name, email, message, telephone) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.SECURE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: name,
    to: 'lnahuelfernandezb@gmail.com',
    subject: 'Consulta',
    html: `
      <h1>Datos: </h1>
        <ul>
          <li>
          <bold>Nombre:</bold> ${name}
          </li>
          <li>
            <bold>Telefono:</bold> ${telephone || 'No ha sido ingresado'}
          </li>
          <li>
            <bold>Email:</bold> ${email}
          </li>
        </ul>
      <h2>Mensaje:</h2>
        ${message}
      `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res
        .status(500)
        .send(error.message)
    }
    console.log('Email enviado!')
    res.status(201).json(req.body)
  })
}

export default mail