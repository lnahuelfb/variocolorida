import { dbConnect } from "utils/mongoose"
import secciones from 'models/secciones'

dbConnect()

export default async function handler(req, res) {
  const { seccion, id } = req.query

  if (req.method === 'GET') {
    try {
      console.log(secciones, seccion)
      const data = await secciones.findOne({
        link: seccion
      })

      const response = data.trabajos.filter(({ _id }) => _id.toString() === id)

      console.log(response)

      return res.status(200).json(response[0])
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  if (req.method === 'POST') {
    const { name, image } = req.body

    if (!name || !image) {
      return res.status(403).json({ message: 'No se han ingresado todos los datos' })
    }

    const newPost = {
      name,
      image,
    }

    data.map(({ name, trabajos }) => {
      if (name.toLowerCase() === seccion.toLowerCase()) {
        trabajos.push(newPost)
        return res.status(201).send('Nuevo post creado!')
      }
    })
  }

  if (req.method === 'PATCH') {
    const { name, oldName } = req.body

    if (!name) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

    const filteredData = data.filter(({ name }) => name.toLowerCase() === seccion.toLowerCase())
    const work = filteredData[0].trabajos.filter((trabajo) => trabajo.name === oldName)

    if (name) {
      work[0].name = name
      console.log(work[0])
      return res.status(200).json({ message: 'Trabajo actualizado correctamente!' })
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body

    data.trabajos.filter(trabajo => trabajo.id !== id)

    return res.status(200).json({ message: 'Trabajo eliminado con exito!' })
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}