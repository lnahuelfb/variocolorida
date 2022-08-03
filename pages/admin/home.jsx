import Head from 'next/head'
import Link from 'next/link'

import AdminCard from 'components/adminCard'

import styles from '/styles/admin.module.css'

const Admin = ({ data }) => {

  const user = {
    name: 'Variocolorida'
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
                  <Link href={seccion}>
                    <a>
                      {seccion}
                    </a>
                  </Link>
                </h2>
                <div className={styles.cardContainer}>
                  {
                    trabajos && trabajos.map(({ name, image, id }) => (
                      <AdminCard name={name} image={image} link={`${seccion}/${id}`} />
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

  const fetchData = async () => {

    // const API = 'http://localhost:3000/api/data'
    const API = 'https://variocolorida.vercel.app/api/data'
    const res = await fetch(API)
    const data = await res.json()

    return data
  }

  try {
    const data = await fetchData()

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