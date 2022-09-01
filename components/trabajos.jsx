import Card from 'components/card'

import styles from '/styles/trabajos.module.css'
import Imagenes from 'components/trabajos-imagenes'

const Trabajos = ({ data }) => {

  return (
    <div className={styles.container}>
      <h1 id='trabajos' className={styles.title}>
        Trabajos
      </h1>

      <div className={styles.cardsContainer}>
        {
          data && data.map(({ seccion, image, link, description, id }) => (
            <Card name={seccion} image={image} link={`#${link}`} description={description} key={id} />
          ))
        }
      </div>

      {
        data && data.map(({ seccion, trabajos, id, link }) => (
          <div key={id}>
            <h2 id={link} className={styles.subtitle}>{seccion === 'Ilustracion' ? 'Ilustración' : seccion}</h2>

            <div className={styles.trabajosContainer}>
              {
                trabajos && trabajos.map(({ name, image, id }) => <Imagenes name={name} image={image} key={id} />)
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Trabajos
