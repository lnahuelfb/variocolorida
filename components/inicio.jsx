import styles from '/styles/inicio.module.css'

const Inicio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bienvenida}>
        <h1 className={styles.title}>Hola!</h1>
        <p>
          Me llamo Agustina, soy <span>diseñadora</span> y ofrezco soluciones gráficas de diferentes nichos. Fundamento mi trabajo en la creatividad y en la responsabilidad de cumplir con los requerimientos solicitados en tiempo y forma e involucrándome en cada proyecto para aportar lo mejor, tanto en la imagen como en la comunicación y los conocimientos relacionados que he adquirido con mi experiencia. Te invito a conocer mi trabajo!
        </p>
      </div>

      <figure className={styles.imageContainer}>
        <img src='/images/yo.jpg' alt="Agustina Pedemonte" className={styles.image} />
      </figure>

    </section>
  )
}

export default Inicio