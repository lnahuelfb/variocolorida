import { secciones } from '../data'
import Card from '../components/card'

import styles from './styles/trabajos.module.css'

const Trabajos = () => {
  return (
    <div className={styles.container}>
      <h1 id='trabajos' className={styles.title}>
        Trabajos
      </h1>

      <div className={styles.cardContainer}>
        {
          secciones.map(seccion => <Card name={seccion.name} image={seccion.image} key={seccion.name} />)
        }
      </div>


    </div>
  )
}

export default Trabajos
