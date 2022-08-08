import Head from 'next/head'
import Header from '/components/header'
import Inicio from '/components/inicio'
import SobreMi from '/components/sobreMi'
import Trabajos from '/components/trabajos'
import Contacto from '/components/contacto'
import Footer from '/components/footer'

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Variocolorida</title>
        <link rel='icon' href='/logo.ico' />
        <meta name="description"
          content="Me llamo Agustina, soy diseñadora y ofrezco soluciones gráficas de diferentes nichos. Fundamento mi trabajo en la creatividad y en la responsabilidad de cumplir con los requerimientos solicitados en tiempo y forma e involucrándome en cada proyecto para aportar lo mejor, tanto en la imagen como en la comunicación y los conocimientos relacionados que he adquirido con mi experiencia. Te invito a conocer mi trabajo!" />
        <meta name="theme-color" content="#f9f4ea" />
      </Head>

      <div id='inicio'>
        <Header />
        <Inicio />
        <SobreMi />
        <Trabajos data={data} />
        <Contacto />
        <Footer />
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

    console.log(data)

    return {
      props: {
        data
      }
    }

  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      error: true
    }
  }
}
