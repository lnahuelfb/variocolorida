import Image from 'next/image'
import styles from '/styles/card.module.css'

const Card = ({ name, image, link, description }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image src={image} alt={name} width={225} height={200} objectFit='scale-down' />
      </figure>

      <h2 className={styles.title}>
        {
          link
            ? <a href={link} className={styles.link}>{name}</a>
            : name
        }
      </h2>

      <div className={styles.overlay}>
        <div className={styles.content}>
          {description}
        </div>
      </div>

    </div>
  )
}

export default Card