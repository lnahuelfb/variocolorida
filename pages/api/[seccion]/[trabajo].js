import { secciones } from "../data"
import { uuid } from "uuidv4"

export default function handler(req, res) {
  const { seccion, trabajo } = req.query

  if (req.method === 'GET') {
    secciones.map((sec) => {
      if (sec.seccion.toLowerCase() === seccion.toLowerCase()) {
        sec.trabajos.map(t => {
          if (t.name.toLowerCase() === trabajo.toLowerCase()) {
            return res.status(200).send(t)
          }
        })
      }
    })
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

    secciones.map((sec) => {
      if (sec.seccion.toLowerCase() === seccion.toLowerCase()) {
        sec.trabajos.push(newPost)
        return res.status(201).send('Nuevo post creado!')
      }
    })
  }

  if (req.method === 'PATCH') {
    const { name, image, id } = req.body

    if (!name && !image) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

    secciones.map((sec) => {
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

    secciones.trabajos.filter(trabajo => trabajo.id !== id)

    return res.status(200).json({ message: 'Trabajo eliminado con exito!' })
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}