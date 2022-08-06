import Image from 'next/image'
import styles from '/styles/trabajos-imagenes.module.css'

const Imagenes = ({ name, image }) => {
  return (
    <figure className={styles.container}>
      <Image objectFit='scale-down' src={image} alt={name} width={350} height={350} />
    </figure>
  )
}

export default Imagenes