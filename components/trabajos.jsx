import Card from './card'

import styles from '/styles/trabajos.module.css'
import Imagenes from './trabajos-imagenes'

const Trabajos = ({props}) => {

  const { secciones, ilustraciones, identidad, rapport } = props

  return (
    <div className={styles.container}>
      <h1 id='trabajos' className={styles.title}>
        Trabajos
      </h1>

      <div className={styles.cardsContainer}>
        {
          secciones.map(({ name, image, link, description }) => (
            <Card name={name} image={image} link={link} description={description} key={name} />
          ))
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
          identidad.map(identidad => <Imagenes name={identidad.name} image={identidad.image} key={identidad.name} />)
        }
      </div>

      <h2 id='rapport' className={styles.subtitle}>Rapport</h2>

      <div className={styles.trabajosContainer}>
        {
          rapport.map(rapport => <Imagenes name={rapport.name} image={rapport.image} key={rapport.name} />)
        }
      </div>

    </div>
  )
}

export default Trabajos
