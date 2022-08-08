import { secciones } from "pages/api/data"

export default function handler(req, res) {

  const { seccion } = req.query

  switch (req.method) {
    case 'GET':
      secciones.map((sec) => {
        if (sec.seccion.toLowerCase() === seccion.toLowerCase()) return res.status(200).json(sec)
      })
    case 'PATCH':
      secciones.map((sec) => {
        if (sec.seccion.toLowerCase() === seccion.toLowerCase()) return res.status(200).json({ message: `${seccion} actualizado correctamente` })
      })
    default:
      return res.status(400).json({ message: 'Este metodo no está soportado' })
  }
}