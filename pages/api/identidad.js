const identidad = [
  {
    name: 'Uniques',
    image: '/images/uniques.jpg'
  },
  {
    name: 'Omnitype',
    image: '/images/omnitype.jpg'
  },
  {
    name: 'Lost in',
    image: '/images/lostin.jpg'
  },
  {
    name: "Detective's Coffee",
    image: '/images/pikachu.jpg'
  },
  {
    name: 'INADI',
    image: '/images/inadi.jpg'
  },
  {
    name: 'Monograma',
    image: '/images/monograma.jpg'
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
    
    return res.status(201).send('Post agregado a identidad!')
  }

  res.status(200).json(identidad)
}

export default handler