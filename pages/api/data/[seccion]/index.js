import { dbConnect } from "utils/mongoose"
import secciones from "models/seccion"

dbConnect()

export default async function handler(req, res) {

  const { seccion } = req.query

  if (req.method === 'GET') {
    const data = await secciones.findOne({link: seccion})
    return res.status(200).json(data)
  }

  if (req.method === 'PATCH') {
    data.map(({ name }) => {
      if (name.toLowerCase() === seccion.toLowerCase()) return res.status(200).json({ message: `${seccion} actualizado correctamente` })
    })
  }
  return res.status(400).json({ message: 'Este metodo no está soportado' })
}