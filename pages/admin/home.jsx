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
          data && data.map(({ id, seccion, trabajos }) => {
            return (
              <div key={id}>
                <h2>
                  <Link href={seccion.toLowerCase()}>
                    <a>
                      {seccion}
                    </a>
                  </Link>
                </h2>
                <div className={styles.cardContainer}>
                  {
                    trabajos && trabajos.map(({ name, image, id }) => (
                      <AdminCard name={name} image={image} link={`${seccion.toLowerCase()}/${id}`} key={id} />
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

  const API = 'http://localhost:3000/api/data'
  // const API = 'https://variocolorida.vercel.app/api/data'

  try {
    const res = await fetch(API)
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