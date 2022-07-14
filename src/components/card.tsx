import styles from './styles/card.module.css'

interface props {
  name: string,
  image: string
}

const Card = ({ name, image }: props) => {
  return (
    <div className={styles.container}>

      <figure className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </figure>
      
      <h2>{name}</h2>
    </div>
  )
}

export default Card