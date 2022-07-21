import Head from 'next/head'
import Header from '../components/header'
import Inicio from '../components/inicio'
import SobreMi from '../components/sobreMi'
import Trabajos from '../components/trabajos'
import Contacto from '../components/contacto'
import Footer from '../components/footer'

export default function Home({ secciones, ilustraciones, identidad, rapport }) {

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
        <Trabajos secciones={secciones} ilustraciones={ilustraciones} identidad={identidad} rapport={rapport} />
        <Contacto />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  
  const fetchData = async (seccion) => {

    // const api = 'http://localhost:3000/api/'
    const api = 'https://variocolorida-next-3u2hy7lsj-lnahuelfb.vercel.app/api/'
    const data = await fetch(`${api}${seccion}`)
    const finalData = await data.json()

    return JSON.parse(JSON.stringify(finalData))
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
    console.log(error)
  }

  return {
    props: {
      error: true
    }
  }
}
