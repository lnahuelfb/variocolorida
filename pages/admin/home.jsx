import Head from 'next/head'
import Link from 'next/link'

import AdminCard from 'components/adminCard'

import styles from '/styles/admin.module.css'

const Admin = ({ secciones, trabajos }) => {

  const user = {
    name: 'Variocolorida',
    isConected: true
  }

  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div className={styles.container}>
        <h1>¡Bienvenida {user.name}!</h1>
        {
          secciones && secciones.map(({_id, link, name}) => {
            return (
              <div key={_id}>
                <h2>
                  <Link href={link.toLowerCase()}>
                    <a>
                      {name}
                    </a>
                  </Link>
                </h2>
                <div className={styles.cardContainer}>
                  {
                    trabajos && trabajos.map((trabajo) => {
                      if (link === trabajo.seccion) return (<AdminCard name={trabajo.name} image={trabajo.image} link={`${link}/${trabajo._id}`} key={trabajo._id} />)
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  require('dotenv').config()

  const API = process.env.API || 'http://localhost:3000/api/'

  try {
    const seccionesRes = await fetch(`${API}secciones`)
    const secciones = await seccionesRes.json()
    const trabajosRes = await fetch(`${API}trabajos`)
    const trabajos = await trabajosRes.json()

    return {
      props: {
        secciones,
        trabajos
      }
    }

  } catch (error) {
    console.error(error)
    return {
      props: {
        error: true
      }
    }
  }
}

export default Admin