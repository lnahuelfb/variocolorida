import { secciones } from "pages/api/data"

export default function handler(req, res) {

  const { seccion } = req.query

  secciones.map((sec) => {
    if (sec.seccion.toLocaleLowerCase() === seccion.toLowerCase()) {
      switch (req.method) {
        case 'GET':
          return res.json(sec)
        case 'PATCH':
          return res.json({ message: `${seccion} actualizado correctamente` })
        default:
          return res.status(400).json({ message: 'Este metodo no está soportado' })
      }
    }
  })
}