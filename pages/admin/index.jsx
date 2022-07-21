import Head from 'next/head'

import styles from '/styles/admin.module.css'

const Admin = ({ secciones, ilustraciones, identidad, rapport }) => {

  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div className={styles.container}>
        {
          secciones.map(seccion => {
            return (
              <div key={seccion.name}>
                <h1>{seccion.name}</h1>
                {
                  seccion.name === "Ilustración"
                    ? ilustraciones.map(({ name }) => name + " ")
                    : seccion.name === 'Identidad'
                      ? identidad.map(({ name }) => name + " ")
                      : rapport.map(({name}) => name + " ")
                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  const fetchData = async (seccion) => {

    const api = 'http://localhost:3000/api/'
    const data = await fetch(`${api}${seccion}`)
    const finalData = await data.json()

    return finalData
  }

  try {
    const secciones = await fetchData('secciones')
    const ilustraciones = await fetchData('ilustraciones')
    const identidad = await fetchData('identidad')
    const rapport = await fetchData('rapport')

    return {
      props: {
        secciones,
        ilustraciones,
        identidad,
        rapport
      }
    }

  } catch (error) {
    console.error(error.status)
    return {
      props: {
        error
      }
    }
  }
}

export default Admin