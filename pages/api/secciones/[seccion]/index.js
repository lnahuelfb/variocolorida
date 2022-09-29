import { dbConnect } from "utils/mongoose"
import { deleteSection, editSection, getOneSection } from "utils/apiFunctions"

dbConnect()

export default async function handler(req, res) {
  const { seccion } = req.query

  if (req.method === 'GET') {
    try {
      const section = await getOneSection(seccion)

      return res.status(200).json(section)
    } catch (error) {
      console.log(error);
      return res.status(404).json(error)
    }
  }

  if (req.method === 'DELETE') {
    try {
      const deletedSection = await deleteSection(seccion)

      return res.status(200).json(deletedSection)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  if (req.method === 'PATCH') {
    const { name, description, image } = req.body
    const section = await editSection(id, name, description, image)

    return res.status(200).json(section)
  }
  return res.status(400).json({ message: 'Este metodo no está soportado' })
}