import { secciones, ilustraciones, Identidad, Rapport } from '../data'
import Card from '../components/card'

import styles from './styles/trabajos.module.css'
import Imagenes from '../components/trabajos-imagenes'

const Trabajos = () => {

  return (
    <div className={styles.container}>
      <h1 id='trabajos' className={styles.title}>
        Trabajos
      </h1>

      <div className={styles.cardsContainer}>
        {
          secciones.map(seccion => <Card name={seccion.name} image={seccion.image} link={seccion.link} description={seccion.description} key={seccion.name} />)
        }
      </div>

      <h2 id='ilustracion' className={styles.subtitle}>Ilustración</h2>

      <div className={styles.trabajosContainer}>
        {
          ilustraciones.map(ilustracion => <Imagenes name={ilustracion.name} image={ilustracion.image} key={ilustracion.name} />)
        }
      </div>

      <h2 id='identidad' className={styles.subtitle}>Identidad</h2>

      <div className={styles.trabajosContainer}>
        {
          Identidad.map(identidad => <Imagenes name={identidad.name} image={identidad.image} key={identidad.name} />)
        }
      </div>

      <h2 id='rapport' className={styles.subtitle}>Rapport</h2>

      <div className={styles.trabajosContainer}>
        {
          Rapport.map(rapport => <Imagenes name={rapport.name} image={rapport.image} key={rapport.name} />)
        }
      </div>

    </div>
  )
}

export default Trabajos
