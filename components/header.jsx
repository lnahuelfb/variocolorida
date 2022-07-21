import { useState } from 'react'

import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'

import styles from '/styles/header.module.css'

const Header = () => {

  const [isOpen, setisOpen] = useState(false)

  return (
    <header className={styles.container}>
      <IconContext.Provider value={{
        style: {
          fontSize: '2.5rem'
        }
      }}>

        <figure className={styles.imageContainer}>
          <img src='/images/logo.png' alt="Logo de variocolorida" className={styles.logoImage} />
        </figure>

        <label htmlFor='menu' className={styles.burgerContainer} onClick={() => setisOpen(!isOpen)}>
          <FaBars />
        </label>

        <ul className={isOpen ? styles.itemsOpen : styles.items}>
          <li className={styles.item} >
            <a href="#inicio" className={styles.links} onClick={() => setisOpen(!isOpen)}>
              Inicio
            </a>
          </li>

          <li className={styles.item}>
            <a href="#sobreMi" className={styles.links} onClick={() => setisOpen(!isOpen)}>
              Sobre mi
            </a>
          </li>

          <li className={styles.item} id={styles.trabajos}>
            <a href="#trabajos" className={styles.links} onClick={() => setisOpen(!isOpen)}>
              Trabajos
            </a>

            <ul className={styles.menuTrabajos}>
              <li>
                <a href="#ilustracion" className={styles.links} onClick={() => setisOpen(!isOpen)}>Ilustracion</a>
              </li>
              <li>
                <a href="#identidad" className={styles.links} onClick={() => setisOpen(!isOpen)}>Identidad</a>
              </li>
              <li>
                <a href="#rapport" className={styles.links} onClick={() => setisOpen(!isOpen)}>Rapport</a>
              </li>
            </ul>
          </li>

          <li className={styles.item}>
            <a href="#contacto" className={styles.links} onClick={() => setisOpen(!isOpen)}>
              Contacto
            </a>
          </li>

        </ul>
      </IconContext.Provider>
    </header>
  )
}

export default Header