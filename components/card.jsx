import Image from 'next/image'
import styles from '/styles/card.module.css'

const Card = ({ name, image, link }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image src={image} alt={name} width={225} height={200} objectFit='scale-down'/>
      </figure>

      <h2 className={styles.title}>
        <a href={link} className={styles.link}>{name === 'Ilustracion' ? 'Ilustración' : name}</a>
      </h2>

    </div>
  )
}

export default Card