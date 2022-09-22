import { useRouter } from 'next/router'

import AdminCard from 'components/adminCard'

import styles from 'styles/secciones.module.css'
import Head from 'next/head'

const Seccion = ({ secciones, trabajos }) => {

  const router = useRouter()
  const { seccion } = router.query

  return (
    <>
      <Head>
        <title>{`Admin/${secciones.name}`}</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div className={styles.container}>
        <h1>{secciones.name}</h1>
        <div className={styles.cardContainer}>
          {
            trabajos && trabajos.map(({ name, image, _id }) => (
              <AdminCard name={name} image={image} link={`${seccion}/${_id}`} key={_id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
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
    console.log(error)
  }
}

export async function getStaticPaths() {
  require('dotenv').config()

  const API = process.env.API || 'http://localhost:3000/api/'

  try {
    const res = await fetch(`${API}secciones`)
    const secciones = await res.json()

    const paths = secciones.map(({ link }) => ({ params: { seccion: link } }))

    console.log(paths)

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.log(error)
    return { paths: [], fallback: false }
  }
}

export default Seccion