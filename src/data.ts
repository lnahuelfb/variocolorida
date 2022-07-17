import { trabajos, cards } from './interfaces'

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


export const secciones: cards[] = [
  {
    name: 'Ilustración',
    image: ilustracion,
    link: 'ilustracion',
    description: 'Diseño e ilustración de personajes, escenografías, paisajes, bocetos solos o combinados con texto.'
  },
  {
    name: 'Identidad',
    image: omnitype,
    link: 'identidad',
    description: 'Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.'
  },
  {
    name: 'Rapport',
    image: r2,
    link: 'rapport',
    description: 'Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.'
  }
]

export const ilustraciones: trabajos[] = [
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

export const Identidad: trabajos[] = [
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

export const Rapport: trabajos[] = [
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