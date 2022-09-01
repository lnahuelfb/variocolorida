import { dbConnect } from "utils/mongoose"
import { data } from "pages/api/data/index"

import trabajo from "models/trabajo"
import secciones from "models/seccion"

export default async function handler(req, res) {

  const tasks = await secciones.find()
  console.log(tasks)

  const { seccion } = req.query

  if (req.method === 'GET') {
    const response = data.filter((sec) => sec.seccion.toLowerCase() === seccion.toLowerCase())
    return res.status(200).json(response[0])
  }

  if (req.method === 'PATCH') {
    data.map((sec) => {
      if (sec.seccion.toLowerCase() === seccion.toLowerCase()) return res.status(200).json({ message: `${seccion} actualizado correctamente` })
    })
  }

  res.status(400).json({ message: 'Este metodo no está soportado' })

}