import { dbConnect } from 'utils/mongoose'
import secciones from "models/secciones"

// export const data = [{
//   "name": "Ilustracion",
//   "image": "/images/ilustracion.jpeg",
//   "link": "ilustracion",
//   "description": "Diseño e ilustración de personajes, escenografías, paisajes, bocetos solos o combinados con texto.",
//   "trabajos": [{
//     "name": "Autorretrato",
//     "image": "/images/yo.jpg",
//   },
//   {
//     "name": "Catradiys",
//     "image": "/images/catradiys.jpeg",
//   },
//   {
//     "name": "Toto",
//     "image": "/images/toto.jpeg",
//   },
//   {
//     "name": "Tsukki",
//     "image": "/images/tsukki.jpeg",
//   },
//   {
//     "name": "Ilustracion",
//     "image": "/images/ilustracion.jpeg",   
//   },
//   {
//     "name": "Peridot",
//     "image": "/images/peridot.jpeg",
//   }
//   ],
// },
// {
//   "name": "Identidad",
//   "image": "/images/omnitype.jpg",
//   "link": "identidad",
//   "description": "Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.",
//   "trabajos": [{
//     "name": "Uniques",
//     "image": "/images/uniques.jpg",
//   },
//   {
//     "name": "Omnitype",
//     "image": "/images/omnitype.jpg",
//   },
//   {
//     "name": "Lost in",
//     "image": "/images/lostin.jpg",
//   },
//   {
//     "name": "Detective's Coffee",
//     "image": "/images/pikachu.jpg",
//   },
//   {
//     "name": "INADI",
//     "image": "/images/inadi.jpg",
//   },
//   {
//     "name": "Monograma",
//     "image": "/images/monograma.jpg",
//   }
//   ],
// },
// {
//   "name": "Rapport",
//   "image": "/images/r2.jpg",
//   "link": "rapport",
//   "description": "Diseños de estampas, módulos enfocados en potenciar la identidad de cada cliente.",
//   trabajos: [{
//     "name": "Ravenclaw",
//     "image": "/images/r1.jpg",

//   },
//   {
//     "name": "Slytherin",
//     "image": "/images/r2.jpg",

//   },
//   {
//     "name": "Gryffindor",
//     "image": "/images/r3.jpg",
//   }
//   ],
// }]

dbConnect()

export default async function handler(req, res) {

  const data = await secciones.find()

  switch (req.method) {
    case 'GET':
      return res.status(200).json(data)

    case 'POST':
      const { name, image, description, trabajos } = req.body

      console.log(req.body)

      if (!name || !image || !description) {
        return res.status(401).json({ message: 'No ingresó todos los datos' })
      }

      const newSection = new secciones({
        name,
        image: image || `/images/${name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}`,
        description,
        link: name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(),
        trabajos: trabajos || [],
      })

      console.log(newSection._id)

      const savedSection = await newSection.save()

      return res.status(201).json(savedSection)

    case 'PATCH':
      

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}
