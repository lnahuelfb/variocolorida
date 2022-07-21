const rapport = [
  {
    name: 'Ravenclaw',
    image: '/images/r1.jpg'
  },
  {
    name: 'Slytherin',
    image: '/images/r2.jpg'
  },
  {
    name: 'Gryffindor',
    image: '/images/r3.jpg'
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

    return res.status(201).send('Post agregado a Rapport!')
  }
  res.status(200).json(rapport)
}

export default handler