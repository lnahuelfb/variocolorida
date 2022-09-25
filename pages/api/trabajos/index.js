import { dbConnect } from "utils/mongoose";
import trabajos from "models/trabajos";

dbConnect()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const jobs = await trabajos.find()
    return res.status(200).json(jobs)
  }

  if (req.method === 'POST') {
    const { name, seccion, image, description = null } = req.body

    if (!name || !seccion || !image) return res.status(400).json({
      message: 'No se introdujeron todos los datos.'
    })

    try {
      const newJob = new trabajos({
        name,
        seccion,
        image,
        description
      })

      const jobSaved = await newJob.save()
      return res.status(201).json(jobSaved)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json(error.message)
    }
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}