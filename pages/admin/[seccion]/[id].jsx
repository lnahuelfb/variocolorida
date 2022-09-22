import { useRouter } from 'next/router'
import { useState } from 'react'

import Head from 'next/head'
import Card from 'components/card'

import styles from '/styles/adminName.module.css'

const Trabajo = ({ trabajos }) => {

  const router = useRouter()
  const { seccion, id } = router.query

  const [trabajo, setTrabajo] = useState({
    name: data.name,
    oldName: data.name,
  })

  const handleDelete = (e) => {
    const response = window.confirm(`¿Desea eliminar ${nombre} de sus proyectos?`)

    if (response) {
      window.alert('Eliminado con exito!')
    }
  }

  const handleChange = async (e) => {
    const API = `/api/trabajos/${id}`

    try {
      const response = window.prompt('Ingrese el nuevo nombre:')
      setTrabajo({ ...trabajo, name: response })

      console.log(trabajo)

      const res = await fetch(API, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify(trabajo),
      })

      if (res.status === 200 || res.status === 201) return window.alert('Nombre cambiado con exito!')

      throw new Error('Algo salió mal :c')
    } catch (error) {
      console.log(error.message)
      window.alert(error.message)
    }
  }

  return (
    <>
      <Head>
        <title>{`Admin/${data.name}`}</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div className={styles.container}>
        <Card name={trabajo.name} image={data.image} width={400} height={350} />
        <div className={styles.buttonsContainer}>
          <button onClick={() => handleChange()}>Cambiar nombre</button>
          <button className={styles.deleteButton} onClick={() => handleDelete()}>Eliminar</button>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params: { seccion, id } }) {
  require('dotenv').config()

  const API = process.env.API || 'http://localhost:3000/api/'

  try {
    const res = await fetch(`${API}trabajos/${id}`)
    const trabajos = await res.json()

    console.log(data)

    return {
      props: {
        trabajos
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticPaths() {
  require('dotenv').config()

  const API = process.env.API || 'http://localhost:3000/api/'

  try {
    const paths = []

    const trabajosRes = await fetch(`${API}trabajos`)
    const trabajos = await trabajosRes.json()

    trabajos.map(({ _id }) => (paths.push({
      params: {
        id: _id,
        seccion
      }
    })))

    console.log(paths)

    return {
      paths,
      fallback: false
    }

  } catch (error) {
    console.log(error)
    return { paths: [], fallback: false }
  }
}

export default Trabajo