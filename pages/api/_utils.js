import nodemailer from 'nodemailer'
require("dotenv").config();

const sendEmail = (name, email, message, telephone) => {

  const transporter = nodemailer.createTransport({
    port: process.env.NODEMAILER_PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: process.env.SECURE,
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
    if (error) return console.log(error)
    console.log(`
      name: ${name}
      tel: ${telephone}
      email: ${email}
      message: ${message}
    `)
  })
}

export default sendEmail