import Head from "next/head"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import styles from 'styles/newJob.module.css'

const newJob = () => {

  const router = useRouter()
  const { seccion } = router.query

  const [newJob, setNewJob] = useState({
    name: '',
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/trabajos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify({
          ...newJob,
          seccion
        })
      })

      if (res.status === 200 || res.status === 201) return window.alert('¡Trabajo creado con exito!')

      throw new Error('Algo salió mal')
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {

    console.log(newJob.image)

    if (newJob.image.length > 1) {
      const image = newJob.image.split("\\") || ""

      console.log(image[2])
      return () => setNewJob({ image: image[2] })
    }

    return;
  }, [newJob.image])

  return (
    <>
      <Head>
        <title>Admin/Nuevo trabajo</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div className={styles.container}>
        <h1>Creando un nuevo trabajo en {seccion}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="name"
            type="text"
            value={newJob.name}
            placeholder='Nombre del trabajo'
            className={styles.input}
            onChange={handleChange}
            required
          />
          <input
            name="description"
            type="text"
            value={newJob.description}
            placeholder='Descripcion del trabajo'
            className={styles.input}
            onChange={handleChange}
            required />
          <input
            name="image"
            type="file"
            accept="image/png, .jpeg, .jpg, image/gif"
            value={newJob.image}
            placeholder='Imagen del trabajo'
            className={styles.input}
            onChange={handleChange}
            required
          />
        </form>
        <button type="submit" className={styles.button}>Crear</button>
      </div>
    </>
  )
}

export default newJob