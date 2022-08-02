import Card from './card'

import styles from '/styles/trabajos.module.css'
import Imagenes from './trabajos-imagenes'

const Trabajos = ({ secciones, ilustraciones, identidad, rapport }) => {

  return (
    <div className={styles.container}>
      <h1 id='trabajos' className={styles.title}>
        Trabajos
      </h1>

      <div className={styles.cardsContainer}>
        {
          secciones && secciones.map(({ name, image, link, description, id }) => (
            <Card name={name} image={image} link={link} description={description} key={id} />
          ))
        }
      </div>

      <h2 id='ilustracion' className={styles.subtitle}>Ilustración</h2>

      <div className={styles.trabajosContainer}>
        {
          ilustraciones && ilustraciones.map(({ name, image, id }) => <Imagenes name={name} image={image} key={id} />)
        }
      </div>

      <h2 id='identidad' className={styles.subtitle}>Identidad</h2>

      <div className={styles.trabajosContainer}>
        {
          identidad && identidad.map(({ name, image, id }) => <Imagenes name={name} image={image} key={id} />)
        }
      </div>

      <h2 id='rapport' className={styles.subtitle}>Rapport</h2>

      <div className={styles.trabajosContainer}>
        {
          rapport && rapport.map(({ name, image, id }) => <Imagenes name={name} image={image} key={id} />)
        }
      </div>

    </div>
  )
}

export default Trabajos
