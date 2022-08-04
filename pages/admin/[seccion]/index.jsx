import { useRouter } from 'next/router'

const Seccion = ({ data }) => {

  return (
    <div>
      <h1>Hola Seccion {data.seccion}</h1>
    </div>
  )
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:3000/api/${params.seccion}`)
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

  try {
    const res = await fetch(`http://localhost:3000/api/data`)
    const data = await res.json()
    const paths = data.map(({ seccion }) => ({
      params: { seccion: seccion.toLowerCase() }
    }))

    return {
      paths,
      fallback: false
      // props: {
      //   data
      // }
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