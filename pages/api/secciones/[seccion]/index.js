import { dbConnect } from "utils/mongoose"
import secciones from "models/secciones"

dbConnect()

export default async function handler(req, res) {
  const { seccion } = req.query

  if (req.method === 'GET') {
    const section = await secciones.findOne({ link: seccion })

    return res.status(200).json(section)
  }

  if (req.method === 'PATCH') {
    const section = await secciones.findOne({ link: seccion })
    
    return res.status(200).json({
      message: `${section.name} modificada exitosamente!`
    })
  }
  return res.status(400).json({ message: 'Este metodo no está soportado' })
}