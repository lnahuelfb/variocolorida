const { uuid } = require('uuidv4')

const rapport = [
  {
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
]

export default function handler(req, res) {

  switch (req.method) {
    case 'POST':
      const { name, image } = req.body

      if (!name || !image) {
        return res.sendStatus(401).send('No ingresó todos los datos')
      }

      const newPost = {
        name,
        image,
        id: uuid()
      }

      identidad.push(newPost)

      return res.status(201).send('Post agregado a Rapport!')

    case 'GET':
      return res.status(200).json(rapport)

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}