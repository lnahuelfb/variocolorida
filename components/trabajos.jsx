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
          data && data.map(({ name, image, link, description, _id }) => (
            <Card name={name} image={image} link={`#${link}`} description={description} key={_id} />
          ))
        }
      </div>

      {
        data && data.map(({ name, trabajos, _id, link }) => (
          <div key={_id}>
            <h2 id={link} className={styles.subtitle}>{name === 'Ilustracion' ? 'Ilustración' : name}</h2>

            <div className={styles.trabajosContainer}>
              {
                trabajos && trabajos.map(({ name, image, _id }) => <Imagenes name={name} image={image} key={_id} />)
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Trabajos
