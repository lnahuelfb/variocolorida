import { dbConnect } from 'utils/mongoose'
import secciones from "models/secciones"

dbConnect()

export default async function handler(req, res) {

  const sections = await secciones.find()

  switch (req.method) {
    case 'GET':
      return res.status(200).json(sections)

    case 'POST':
      const { name, image, description } = req.body

      console.log(req.body)

      if (!name || !image || !description) {
        return res.status(401).json({ message: 'No ingresó todos los datos' })
      }

      const newSection = new secciones({
        name,
        image: image || `/images/${name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}`,
        description,
        link: name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(),
        trabajos: trabajos || [],
      })

      console.log(newSection._id)

      const savedSection = await newSection.save()

      return res.status(201).json(savedSection)

    case 'PATCH':
      

    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}
