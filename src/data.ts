import ilustracion from '/images/ilustracion.jpeg'
import rapport from '/images/r2.jpg'
import identidad from '/images/omnitype.jpg'

interface secciones {
  name: string,
  image: string
}

export const secciones: secciones[] = [
  {
    name: 'Ilustracion',
    image: ilustracion,
  },
  {
    name: 'Rapport',
    image: rapport
  },
  {
    name: 'Identidad',
    image: identidad
  }
]