import React, { useState } from 'react'

import styles from '/styles/contacto.module.css'

const Contacto = () => {

  const [message, setMessage] = useState({
    name: '',
    telephone: '',
    email: '',
    message: ''
  })

  const API = 'http//localhost:3000/api/send-email'

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const res = await fetch(API, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
          'Acept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (res.ok) {
        return window.alert('Email enviado!')
      } else {
        throw new Error('Algo salió mal')
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <h1 id='contacto' className={styles.title}>
        Contacto
      </h1>
      <p className={styles.description}>
        Póngase en contacto para hablar más acerca de su proyecto o idea. Puede comunicarse directamente por email o teléfono, o completando el formulario.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name='name'
          value={message.name}
          type="text"
          placeholder='Nombre'
          className={styles.input}
          onChange={handleChange}
          required
        />
        <input
          name='telephone'
          value={message.telephone}
          type="tel"
          placeholder='Telefono'
          className={styles.input}
          onChange={handleChange}
        />
        <input
          name='email'
          value={message.email}
          type="email"
          placeholder='Email'
          className={styles.input}
          onChange={handleChange}
          required
        />
        <input
          name='message'
          value={message.message}
          type='texta'
          placeholder='Consulta'
          className={styles.input}
          onChange={handleChange}
          required
        />
        <button type="submit" onSubmit={handleSubmit} className={styles.button}>
          Enviar!
        </button>
      </form>

    </div>
  )
}

export default Contacto