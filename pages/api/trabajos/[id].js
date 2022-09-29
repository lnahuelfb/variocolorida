import { dbConnect } from "utils/mongoose"
import { deleteJob, editJob, getOneJob } from "utils/apiFunctions"

dbConnect()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query

    try {
      const jobs = await getOneJob(id)

      return res.status(200).json(jobs)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  if (req.method === 'PATCH') {
    const { id } = req.query
    const { name, description, section } = req.body

    try {
      if (!name) return res.status(403).json({ message: 'No se han ingresado todos los datos' })

      const editedJob = await editJob(id, name, description, section)

      return res.status(200).json(editedJob)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.query || req.body
    try {
      const deletedJob = await deleteJob(id)

      return res.status(200).json(deletedJob)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}