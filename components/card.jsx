import Image from 'next/image'
import styles from '/styles/card.module.css'

const Card = ({ name, image, link, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <figure className={styles.imageContainer}>
          <Image src={image} alt={name} width={225} height={200} objectFit='scale-down' />
        </figure>

        <h2 className={styles.title}>
          {
            name
          }
        </h2>
      </div>

      <div className={styles.overlay}>
        <p>
          {description}
        </p>
        <button className={styles.button}>
          {
            link
              ? <a href={link} className={styles.link}>{name}</a>
              : name
          }
        </button>
      </div>

    </div>
  )
}

export default Card