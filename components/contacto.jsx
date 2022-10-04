import { useState } from 'react'

import styles from '/styles/contacto.module.css'

const Contacto = () => {

  const [message, setMessage] = useState({
    name: '',
    telephone: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const API = '/api/send-email'

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify(message),
      })

      setLoading(false)

      if (res.status === 201 || res.status === 200) return window.alert('Email enviado!')

      throw new Error('Algo salió mal')

    } catch (error) {
      console.log(error.message)

      window.alert(error.message)
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
          pattern="^[0-9]+"
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
          placeholder='Consulta'
          className={styles.input}
          onChange={handleChange}
          required
        />
        <button type="submit" onSubmit={handleSubmit} className={loading ? styles.buttonLoading : styles.button}>
          {
            loading
              ? 'Enviando'
              : 'Enviar!'
          }
        </button>
      </form>

    </div>
  )
}

export default Contacto