import { dbConnect } from 'utils/mongoose'
import { getAllSections, postSection } from 'utils/apiFunctions'

dbConnect()

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      const sections = await getAllSections()
      return res.status(200).json(sections)

    case 'POST':
      const { name, image, description } = req.body

      try {
        const savedSection = await postSection(name, image, description)
        return res.status(201).json(savedSection)
      } catch (error) {
        return res.status(400).json(error)
      }

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}
