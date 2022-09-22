import Card from 'components/card'

import styles from '/styles/trabajos.module.css'
import Imagenes from 'components/trabajos-imagenes'

const Trabajos = ({ secciones, trabajos }) => {

  return (
    <div className={styles.container}>
      <h1 id='trabajos' className={styles.title}>
        Trabajos
      </h1>

      <div className={styles.cardsContainer}>
        {
          secciones && secciones.map(({ name, image, link, description, _id }) => (
            <Card name={name} image={image} link={`#${link}`} description={description} key={_id} />
          ))
        }
      </div>

      {
        secciones && secciones.map(({ name, description, _id, link }) => (
          <div key={_id}>
            <h2 id={link} className={styles.subtitle}>{name === 'Ilustracion' ? 'Ilustración' : name}</h2>
            <p>{description}</p>

            <div className={styles.trabajosContainer}>
              {
                trabajos && trabajos.map((trabajo) => {
                  if (trabajo.seccion === link) return (<Imagenes name={trabajo.name} image={trabajo.image} key={trabajo._id} />)
                })
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Trabajos
