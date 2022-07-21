const ilustraciones = [
  {
    name: "Autorretrato",
    image: '/images/yo.jpg'
  },
  {
    name: 'Catradiys',
    image: '/images/catradiys.jpeg'
  },
  {
    name: 'Toto',
    image: '/images/toto.jpeg'
  },
  {
    name: 'Tsukki',
    image: '/images/tsukki.jpeg'
  },
  {
    name: 'Ilustracion',
    image: '/images/ilustracion.jpeg'
  },
  {
    name: 'Peridot',
    image: '/images/peridot.jpeg'
  }
]

const handler = (req, res) => {

  if (req.method === 'POST') {
    const { name, image } = req.body

    if (!name || !image) {
      return res.sendStatus(401).send('No ingresó todos los datos')
    }

    const newPost = {
      name,
      image
    }

    identidad.push(newPost)

    return res.status(201).send('Post agregado a ilustraciones!')
  }
  res.status(200).json(ilustraciones)
}

export default handler