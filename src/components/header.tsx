import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import logo from '/images/logo.png'

import styles from './styles/header.module.css'

const Header = () => {

  return (
    <header className={styles.container}>
      <IconContext.Provider value={{
        style: {
          fontSize: '2.5rem'
        }
      }}>
        
        <figure className={styles.imageContainer}>
          <img src={logo} alt="Logo de variocolorida" className={styles.logoImage} />
        </figure>

        <label htmlFor='menu' className={styles.burgerContainer}>
          <FaBars/>
        </label>
        <input type="checkbox" id="menu" className={styles.input}/>

        <ul className={styles.items}>
          <li className={styles.item} >
            <a href="#inicio" className={styles.links}>
              Inicio
            </a>
          </li>

          <li className={styles.item}>
            <a href="#sobreMi" className={styles.links}>
              Sobre mi
            </a>
          </li>

          <li className={styles.item} id={styles.trabajos}>
            <a href="#trabajos" className={styles.links}>
              Trabajos
            </a>
          
            <ul className={styles.menuTrabajos}>
              <li>
                <a href="#identidad" className={styles.links}>Identidad</a>
              </li>
              <li>
                <a href="#ilustracion" className={styles.links}>Ilustracion</a>
              </li>
              <li>
                <a href="#rapport" className={styles.links}>Rapport</a>
              </li>
            </ul>
          </li>

            <li className={styles.item}>
              <a href="#contacto" className={styles.links}>
                Contacto
              </a>
            </li>

          </ul>
      </IconContext.Provider>
    </header>
  )
}

export default Header