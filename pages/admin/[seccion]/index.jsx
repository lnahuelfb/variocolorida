import { useRouter } from 'next/router'


import AdminCard from 'components/adminCard'

import styles from 'styles/secciones.module.css'

const Seccion = ({ data }) => {

  // console.log(data)

  const router = useRouter()
  const { seccion } = router.query

  return (
    <div className={styles.container}>
      <h1>{data.seccion}</h1>
      <div className={styles.cardContainer}>
        {
          data.trabajos && data.trabajos.map(({ name, image, id }) => (
            <AdminCard name={name} image={image} link={`${seccion}/${id}`} key={id} />
          ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  require('dotenv').config()

  // const API = 'http://localhost:3000/api/'
  // const API = 'https://variocolorida.vercel.app/api/'
  const API = process.env.API || 'http://localhost:3000/api/'

  try {
    const res = await fetch(`${API}${params.seccion}`)
    const data = await res.json()

    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticPaths() {
  require('dotenv').config()

  // const API = 'http://localhost:3000/api/data'
  // const API = 'https://variocolorida.vercel.app/api/'
  const API = process.env.API || 'http://localhost:3000/api/'

  try {
    const res = await fetch(`${API}data`)
    const data = await res.json()

    const paths = data.map(({ link }) => ({ params: { seccion: link } }))

    return {
      paths,
      fallback: false
    }

  } catch (error) {
    console.log(error)
    return {
      props: {
        error: true,
        message: error.message
      }
    }
  }

}

export default Seccion