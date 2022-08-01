import nodemailer from 'nodemailer'
require("dotenv").config();

const sendEmail = async (name, email, message, telephone) => {

  const transporter = nodemailer.createTransport({
    port: process.env.NODEMAILER_PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: process.env.SECURE,
    tls: {
      ciphers: 'TLS_AES_128_GCM_SHA256'
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
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) return new Error(error)

    console.log(`
        name: ${name}
        tel: ${telephone}
        email: ${email}
        message: ${message}
      `)
  })
}

export default sendEmail