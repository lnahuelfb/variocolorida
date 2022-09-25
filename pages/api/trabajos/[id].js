import { dbConnect } from "utils/mongoose"
import trabajos from 'models/trabajos'

dbConnect()

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const jobs = await trabajos.findById(id)

      return res.status(200).json(jobs)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  if (req.method === 'PUT') {
    const { id } = req.query
    const { name, description } = req.body

    if (!name) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

    try {
      const editedJob = await trabajos.updateOne({ _id: id }, {
        $set: {
          name,
          description
        }
      })
      return res.status(200).json(editedJob)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body

    const deletedUser = await trabajos.findByIdAndRemove(id)

    return res.status(200).json(deletedUser)
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}