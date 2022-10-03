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
        <title>{`Admin/${seccion.charAt(0).toUpperCase() + seccion.slice(1)}`}</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div className={styles.container}>
        {
          secciones && secciones.map(({ link, name }) => {
            if (seccion === link) return (<h1 key={name}>{name}</h1>)
          })
        }
        <div className={styles.cardContainer}>
          {
            trabajos && trabajos.map((trabajo) => {
              if (seccion === trabajo.seccion) return (<AdminCard name={trabajo.name} image={trabajo.image} link={`${seccion}/${trabajo._id}`} key={trabajo._id} />)
            })
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