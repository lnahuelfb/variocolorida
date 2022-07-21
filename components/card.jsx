import styles from '/styles/card.module.css'

const Card = ({ name, image, link }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </figure>

      <h2 className={styles.title}>
        <a href={`#${link}`} className={styles.link}>{name}</a>
      </h2>

    </div>
  )
}

export default Card