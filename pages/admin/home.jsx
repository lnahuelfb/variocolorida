import Head from 'next/head'
import Link from 'next/link'

import AdminCard from 'components/adminCard'

import styles from '/styles/admin.module.css'

const Admin = ({ data }) => {

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
          data && data.map((seccion) => {
            return (
              <div key={seccion.id}>
                <h2>
                  <Link href={seccion.link.toLowerCase()}>
                    <a>
                      {seccion.name}
                    </a>
                  </Link>
                </h2>
                <div className={styles.cardContainer}>
                  {
                    seccion.trabajos && seccion.trabajos.map(({ name, image, id }) => (
                      <AdminCard name={name} image={image} link={`${seccion.name.toLowerCase()}/${name.toLowerCase()}`} key={id} />
                    ))
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
    const res = await fetch(`${API}data`)
    const data = await res.json()

    return {
      props: {
        data,
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