import styles from './styles/trabajos-imagenes.module.css'

interface props {
  name: string,
  image: string
}

const Imagenes = ({ name, image }: props) => {
  return (
    <figure className={styles.container}>
      <img className={styles.imagen} src={image} alt={name} />
    </figure>
  )
}

export default Imagenes