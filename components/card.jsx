import Image from 'next/image'
import styles from '/styles/card.module.css'

const Card = ({ name, image, link }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image src={image} alt={name} className={styles.image} width={225} height={200} />
      </figure>

      <h2 className={styles.title}>
        <a href={`#${link}`} className={styles.link}>{name}</a>
      </h2>

    </div>
  )
}

export default Card