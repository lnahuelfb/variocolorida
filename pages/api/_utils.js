import nodemailer from 'nodemailer'
require("dotenv").config();

const sendEmail = async (name, email, message, telephone) => {

  const transporter = nodemailer.createTransport({
    port: process.env.NODEMAILER_PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
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

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((res, rej) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`
          name: ${name}
          tel: ${telephone}
          email: ${email}
          message: ${message}
        `)
        console.log('Email enviado!')
        return res.status(201).json(req.body)
      }
    })
  })

  res.status(200).json({ status: 'OK' })
}

export default sendEmail