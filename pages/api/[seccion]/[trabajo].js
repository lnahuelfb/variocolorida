import { data } from "../data"
import { uuid } from "uuidv4"

export default async function handler(req, res) {
  const { seccion, trabajo } = req.query

  if (req.method === 'GET') {
    const sec = data.filter(data => data.seccion.toLowerCase() === seccion.toLowerCase())
    const response = sec[0].trabajos.filter(t => t.name.toLowerCase() === trabajo.toLowerCase())

    return res.status(200).json(response[0])
  }

  if (req.method === 'POST') {
    const { name, image } = req.body


    if (!name || !image) {
      return res.status(403).json({ message: 'No se han ingresado todos los datos' })
    }

    const newPost = {
      name,
      image,
      id: uuid()
    }

    data.map((sec) => {
      if (sec.seccion.toLowerCase() === seccion.toLowerCase()) {
        sec.trabajos.push(newPost)
        return res.status(201).send('Nuevo post creado!')
      }
    })
  }

  if (req.method === 'PATCH') {
    const { name, image, id } = req.body

    if (!name && !image) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

    data.map((sec) => {
      if (sec.seccion.toLowerCase() === seccion.toLowerCase()) {
        sec.trabajos.map(trabajo => {

          if (trabajo.id === id) {
            name
              ? trabajo.name = name
              : null
            image
              ? trabajo.image = image
              : null
            return res.status(200).json({ message: 'Trabajo actualizado correctamente!' })
          }
        })
        return res.status(201).send('Nuevo post creado!')
      }
    })
  }

  if (req.method === 'DELETE') {
    const { id } = req.body

    data.trabajos.filter(trabajo => trabajo.id !== id)

    return res.status(200).json({ message: 'Trabajo eliminado con exito!' })
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}