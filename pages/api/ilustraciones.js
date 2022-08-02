const { uuid } = require('uuidv4')

const ilustraciones = [
  {
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

      return res.status(201).send('Post agregado a ilustraciones!')

    case 'GET':
      res.status(200).json(ilustraciones)

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}

export default handler