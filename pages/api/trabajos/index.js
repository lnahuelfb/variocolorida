import { dbConnect } from "utils/mongoose";
import trabajos from "models/trabajos";

dbConnect()

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jobs = await trabajos.find()
    return res.status(200).json(jobs)
  }

  return res.status(400).json({ message: 'Este metodo no está soportado' })
}