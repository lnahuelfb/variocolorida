const secciones = [
  {
    name: 'Ilustración',
    image: '/images/ilustracion.jpeg',
    link: 'ilustracion',
    description: 'Diseño e ilustración de personajes, escenografías, paisajes, bocetos solos o combinados con texto.'
  },
  {
    name: 'Identidad',
    image: '/images/omnitype.jpg',
    link: 'identidad',
    description: 'Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.'
  },
  {
    name: 'Rapport',
    image: '/images/r2.jpg',
    link: 'rapport',
    description: 'Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.'
  }
]

export default function handler(req, res) {
  res.status(200).json(secciones)
}