import { useState } from 'react'

import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'

import Image from 'next/image'
import styles from '/styles/header.module.css'

function Header ({ data }) {

  const [isOpen, setisOpen] = useState(false)

  return (
    <header className={styles.container}>
      <IconContext.Provider value={{
        style: {
          fontSize: '2.5rem'
        }
      }}>

        <figure className={styles.imageContainer}>
          <Image src='/images/logo.png' alt="Logo de variocolorida" objectFit='scale-down' width={135} height={104} />
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
              {
                data && data.map(({ seccion, link }) => (
                  <li>
                    <a href={`#${link.toLowerCase()}`} className={styles.links} onClick={() => setisOpen(!isOpen)}>{seccion === 'Ilustracion' ? "Ilustración" : seccion}</a>
                  </li>
                ))
              }
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