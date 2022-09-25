import { dbConnect } from "utils/mongoose"
import trabajos from 'models/trabajos'

dbConnect()

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const jobs = await trabajos.findOne({ _id: id })

      return res.status(200).json(jobs)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  if (req.method === 'PATCH') {
    const { name } = req.body

    if (!name) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

    work[0].name = name
    console.log(work[0])
    return res.status(200).json({ message: 'Trabajo actualizado correctamente!' })

  }

  if (req.method === 'DELETE') {
    const { id } = req.body

    data.trabajos.filter(trabajo => trabajo.id !== id)

    return res.status(200).json({ message: 'Trabajo eliminado con exito!' })
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}