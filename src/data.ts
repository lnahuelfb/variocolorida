import yo from '/images/yo.jpg'
import catradiys from '/images/catradiys.jpeg'
import toto from '/images/toto.jpeg'
import tsukki from '/images/tsukki.jpeg'
import ilustracion from '/images/ilustracion.jpeg'
import peridot from '/images/peridot.jpeg'

import uniques from '/images/uniques.jpg'
import omnitype from '/images/omnitype.jpg'
import lostin from '/images/lostin.jpg'
import pikachu from '/images/pikachu.jpg'
import inadi from '/images/inadi.jpg'
import monograma from '/images/monograma.jpg'

import r1 from '/images/r1.jpg'
import r2 from '/images/r2.jpg'
import r3 from '/images/r3.jpg'

interface secciones {
  name: string,
  image: string
}

export const secciones: secciones[] = [
  {
    name: 'Ilustración',
    image: ilustracion,
  },
  {
    name: 'Rapport',
    image: r2
  },
  {
    name: 'Identidad',
    image: omnitype
  }
]

export const ilustraciones: secciones[] = [
  {
    name: "autorretrato",
    image: yo
  },
  {
    name: 'Catradiys',
    image: catradiys
  },
  {
    name: 'Toto',
    image: toto
  },
  {
    name: 'Tsukki',
    image: tsukki
  },
  {
    name: 'Ilustracion',
    image: ilustracion
  },
  {
    name: 'Peridot',
    image: peridot
  }
]

export const Identidad: secciones[] = [
  {
    name: 'Uniques',
    image: uniques
  },
  {
    name: 'Omnitype',
    image: omnitype
  },
  {
    name: 'Lost in',
    image: lostin
  },
  {
    name: "Detective's Coffee",
    image: pikachu
  },
  {
    name: 'INADI',
    image: inadi
  },
  {
    name: 'Monograma',
    image: monograma
  }
]

export const Rapport: secciones[] = [
  {
    name: 'Ravenclaw',
    image: r1
  },
  {
    name: 'Slytherin',
    image: r2
  },
  {
    name: 'Gryffindor',
    image: r3
  }
]