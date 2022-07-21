import styles from '/styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <figure className={styles.imageContainer}>
          <img className={styles.image} src='/images/logo.png' alt="Logo de Variocolorida" />
        </figure>

        <div className={styles.social}>

          <figure className={styles.socialContainer}>
            <a href="https://www.instagram.com/variocolorida/" target='_blank' rel="noopener noreferrer">
              <img className={styles.image} src='/images/instagramlogo.svg' alt='Ir al perfíl de Instagram' />
            </a>
          </figure>

          <figure className={styles.socialContainer}>
            <a href="https://www.behance.net/aguspedem" target='_blank' rel="noopener noreferrer">
              <img className={styles.image} src='/images/behancelogo.svg' alt='Ir al perfíl de Behance' />
            </a>
          </figure>

        </div>
      </div>
      <div className={styles.pie}>
        <p>
          Diseñado por Agustina Pedemonte.
        </p>
        <p>
          Desarrollado por <a href="https://nahuelfb.vercel.app" target='_blank' rel="noopener noreferrer">Nahuel Beschtedt</a>. 
        </p>
      </div>
    </footer>
  )
}

export default Footer