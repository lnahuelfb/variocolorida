import { useState } from 'react'
import Link from 'next/link'

import styles from '/styles/login.module.css'

const Login = () => {

  const [form, setForm] = useState({
    user: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="text" placeholder='Usuario' name='user' value={form.user} onChange={handleChange} required />
      <input type="password" placeholder='Contraseña' name='password' value={form.password} onChange={handleChange} required />
      <Link href='/admin/new-password'><a>¿Olvidaste tu contraseña?</a></Link>
      <button>Entrar</button>
    </form>
  )
}

export default Login