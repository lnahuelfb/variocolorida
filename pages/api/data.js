const { uuid } = require('uuidv4')

export const secciones = [{
  seccion: 'Ilustracion',
  image: '/images/ilustracion.jpeg',
  link: 'ilustracion',
  description: 'Diseño e ilustración de personajes, escenografías, paisajes, bocetos solos o combinados con texto.',
  trabajos: [{
    name: "Autorretrato",
    image: '/images/yo.jpg',
    id: uuid()
  },
  {
    name: 'Catradiys',
    image: '/images/catradiys.jpeg',
    id: uuid()
  },
  {
    name: 'Toto',
    image: '/images/toto.jpeg',
    id: uuid()
  },
  {
    name: 'Tsukki',
    image: '/images/tsukki.jpeg',
    id: uuid()
  },
  {
    name: 'Ilustracion',
    image: '/images/ilustracion.jpeg',
    id: uuid()
  },
  {
    name: 'Peridot',
    image: '/images/peridot.jpeg',
    id: uuid()
  }
  ],
  id: uuid()
},
{
  seccion: 'Identidad',
  image: '/images/omnitype.jpg',
  link: 'identidad',
  description: 'Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.',
  trabajos: [{
    name: 'Uniques',
    image: '/images/uniques.jpg',
    id: uuid()
  },
  {
    name: 'Omnitype',
    image: '/images/omnitype.jpg',
    id: uuid()
  },
  {
    name: 'Lost in',
    image: '/images/lostin.jpg',
    id: uuid()
  },
  {
    name: "Detective's Coffee",
    image: '/images/pikachu.jpg',
    id: uuid()
  },
  {
    name: 'INADI',
    image: '/images/inadi.jpg',
    id: uuid()
  },
  {
    name: 'Monograma',
    image: '/images/monograma.jpg',
    id: uuid()
  }
  ],
  id: uuid()
},
{
  seccion: 'Rapport',
  image: '/images/r2.jpg',
  link: 'rapport',
  description: 'Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.',
  trabajos: [{
    name: 'Ravenclaw',
    image: '/images/r1.jpg',
    id: uuid()
  },
  {
    name: 'Slytherin',
    image: '/images/r2.jpg',
    id: uuid()
  },
  {
    name: 'Gryffindor',
    image: '/images/r3.jpg',
    id: uuid()
  }
  ],
  id: uuid()
}]

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(secciones)

    case 'POST':
      const { name, image, description } = req.body

      if (!name || !image || !description) {
        return res.status(401).json({ message: 'No ingresó todos los datos' })
      }

      const newSection = {
        seccion: name,
        image: `images/${name}`,
        description,
        link: name,
        trabajos: [],
        id: uuid()
      }

      secciones.push(newSection)

      return res.status(201).json({ message: `Seccion: ${newSection.seccion} agregada con exito!` })
    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}
