import { dbConnect } from "utils/mongoose"
import trabajos from 'models/trabajos'

dbConnect()

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const job = await trabajos.findOne({ _id: id })

      return res.status(200).json(job)
    } catch (error) {
      return res.status(400).json(error.message)
    }
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