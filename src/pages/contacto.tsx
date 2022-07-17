import React, { useState } from 'react'

import { message } from '../interfaces'

import styles from './styles/contacto.module.css'

const Contacto = () => {

  const [message, setMessage] = useState<message>({
    name: '',
    telephone: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <h1 id='contacto' className={styles.title}>
        Contacto
      </h1>
      <p className={styles.description}>
        Póngase en contacto para hablar más acerca de su proyecto o idea. Puede comunicarse directamente por email o teléfono, o completando el formulario.
      </p>
    </div>
  )
}

export default Contacto