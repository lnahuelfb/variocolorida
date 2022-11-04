import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { useState } from 'react'

import styles from 'styles/newJob.module.css'

const newJob = () => {

  const router = useRouter()
  const { seccion } = router.query

  const [newJob, setNewJob] = useState({
    name: '',
    image: '',
    description: ''
  })

  const [file, setFile] = useState()
  const [pathImage, setPathImage] = useState('')

  const handleChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.name]: e.target.value
    })
  }

  const sendImage = () => {
    e.preventDefault()
    try {



      setNewJob({
        name: '',
        image: '',
        description: ''
      })
      setFile()
      setPathImage('')
    } catch (error) {

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(file)
      const sendImage = await fetch('/api/uploader', {
        method: 'POST',
        body: JSON.stringify({
          file
        }),
        headers: {
          'Content-type': 'multipart'
        }
      })

      if (sendImage.status === 200) {
        console.log(sendImage)
        /*         const res = await fetch('/api/trabajos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify({
                  ...newJob,
                  seccion,
                  file
                })
              })
        
              if (res.status === 200 || res.status === 201) return window.alert('¡Trabajo creado con exito!')
        
              throw new Error('Algo salió mal') */
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onFileChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.name]: e.target.value
    })

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      if (file.type.includes('image')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
          setPathImage(reader.result)
        }

        setFile(file)
      } else console.log('No es una imagen.')
    }
  }

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
            name='name'
            type='text'
            value={newJob.name}
            placeholder='Nombre del trabajo'
            className={styles.input}
            onChange={handleChange}
            required
          />
          <input
            name='description'
            type='text'
            value={newJob.description}
            placeholder='Descripcion del trabajo'
            className={styles.input}
            onChange={handleChange}
            required />
          <div className={styles.imageContainer}>
            <figure>
              {
                pathImage && <Image src={pathImage} className={styles.image} width={550} height={265} alt={newJob.image} objectFit='scale-down' />
              }
            </figure>
            <input
              name='image'
              type='file'
              accept='image/png, .jpeg, .jpg, image/gif'
              placeholder='Imagen del trabajo'
              value={newJob.image}
              className={styles.input}
              onChange={onFileChange}
              id='img-upload'
              required
            />
          </div>
          <button type='submit' className={styles.button}>Crear</button>
        </form>
      </div>
    </>
  )
}

export default newJob