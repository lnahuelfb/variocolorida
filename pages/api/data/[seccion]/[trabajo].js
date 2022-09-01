import { data } from "pages/api/data/index"
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
    const { name, oldName } = req.body

    if (!name) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

    const filteredData = data.filter((sec) => sec.seccion.toLowerCase() === seccion.toLowerCase())
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