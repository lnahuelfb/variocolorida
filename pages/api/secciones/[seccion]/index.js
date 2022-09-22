import { dbConnect } from "utils/mongoose"
import secciones from "models/secciones"
import trabajos from 'models/trabajos'

dbConnect()

export default async function handler(req, res) {

  const { seccion } = req.query

  if (req.method === 'GET') {
    const section = await secciones.findOne({ link: seccion })
    const jobs = await trabajos.find({ seccion })
    console.log(jobs)
    return res.status(200).json([section, jobs])
  }

  if (req.method === 'POST') {
    const { name, image, description = null } = req.body

    if (!name || !image) return res.status(400).json({
      message: 'No ingresaste todos los datos necesarios'
    })

    const newJob = new trabajos({
      name,
      image,
      seccion,
      description
    })

    const savedJob = newJob.save()
    return res.status(201).json(savedJob)
  }

  if (req.method === 'PATCH') {
    const { seccion } = req.query

    return res.status(200).json({ message: "Vas bien pibe", seccion })
  }
  return res.status(400).json({ message: 'Este metodo no está soportado' })
}