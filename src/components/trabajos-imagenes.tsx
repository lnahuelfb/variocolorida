import { trabajos } from '../interfaces'
import styles from './styles/trabajos-imagenes.module.css'


const Imagenes = ({ name, image }: trabajos) => {
  return (
    <figure className={styles.container}>
      <img className={styles.imagen} src={image} alt={name} />
    </figure>
  )
}

export default Imagenes