import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/adminCard.module.css'

const AdminCard = ({ name, image, link }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image src={image} alt={name} className={styles.image} width={225} height={200} />
      </figure>

      <Link href={link} >
        <a className={styles.title}>{name}</a>
      </Link>
    </div>
  )
}

export default AdminCard