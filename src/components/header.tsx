import styles from './styles/header.module.css'
import logo from '/images/logo.png'

const Header = () => {
  return (
    <header className={styles.container}>
      <figure className={styles.imageContainer}>
        <img src={logo} alt="Logo de variocolorida" className={styles.logoImage} />
      </figure>

      <nav>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="#inicio" className={styles.links}>
              Inicio
            </a>
          </li>

          <li className={styles.item}>
            <a href="#SobreMi" className={styles.links}>
              Sobre mi
            </a>
          </li>

          <li className={styles.item}>
            <a href="#Trabajos" className={styles.links}>
              Trabajos
            </a>
          </li>

          <li className={styles.item}>
            <a href="#contacto" className={styles.links}>
              Contacto
            </a>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header