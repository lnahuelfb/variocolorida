import { secciones } from "pages/api/data"

export default function handler(req, res) {

  const { seccion } = req.query

  if (req.method === 'GET') {
    const response = secciones.filter((sec) => sec.seccion.toLowerCase() === seccion.toLowerCase())
    return res.status(200).json(response[0])
  }

  if (req.method === 'PATCH') {
    secciones.map((sec) => {
      if (sec.seccion.toLowerCase() === seccion.toLowerCase()) return res.status(200).json({ message: `${seccion} actualizado correctamente` })
    })
  }

  res.status(400).json({ message: 'Este metodo no está soportado' })

}