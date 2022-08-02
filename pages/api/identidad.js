const { uuid } = require('uuidv4')

const identidad = [
  {
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
]

const handler = (req, res) => {

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

      return res.status(201).send('Post agregado a identidad!')

    case 'GET':
      res.status(200).json(identidad)

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}

export default handler