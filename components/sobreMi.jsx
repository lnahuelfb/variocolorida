import styles from '/styles/sobreMi.module.css'

const SobreMi = () => {
  return (
    <div className={styles.container} id='sobreMi'>
      <h2 className={styles.title}>Sobre mi</h2>
      <p className={styles.text}>
        Estudié y me recibí en la Facultad de Arquitectura, Diseño y Urbanismo (FADU) de la UBA en la carrera de Diseño Gráfico.

        Me gusta trabajar de modo personalizado en cada proyecto y para cada cliente, atendiendo a las necesidades particulares de cada caso, por eso mis trabajos son bastante heterogéneos.

        Fundamento mi trabajo en la creatividad y en la responsabilidad de cumplir con los requerimientos solicitados en tiempo y forma e involucrándome en cada proyecto para aportar lo mejor, tanto en la imagen como en la comunicación y los conocimientos relacionados que he adquirido con mi experiencia.</p>

      <section className={styles.herramientas}>
        <h3 className={styles.subtitle}>Manejo de herramientas</h3>

        <p>Illustator</p>
        <div className={styles.programa}> 95%</div>

        <p>Photoshop</p>
        <div className={styles.programa}> 95%</div>

        <p>Indesing</p>
        <div className={styles.programa70}> 70%</div>

        <p>After effects</p>
        <div className={styles.programa50}> 50%</div>

        <p>Premiere</p>
        <div className={styles.programa50}> 50%</div>

        <p>HTML y CSS</p>
        <div className={styles.programa70}> 70%</div>

        <p>Ilustración</p>
        <div className={styles.programa80}> 80%</div>
      </section>


    </div>
  )
}

export default SobreMi
