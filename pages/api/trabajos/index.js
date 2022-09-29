import { dbConnect } from "utils/mongoose";
import { getAllJobs, postJob } from "utils/apiFunctions";

dbConnect()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const jobs = await getAllJobs()
    return res.status(200).json(jobs)
  }

  if (req.method === 'POST') {
    const { name, seccion, image, description = null } = req.body

    try {
      const jobSaved = await postJob(name, seccion, image, description)

      return res.status(201).json(jobSaved)
    } catch (error) {
      console.log(error)
      return res.status(400).send(error)
    }
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}