import { secciones } from "../data"

export default function handler(req, res) {
  const { seccion, trabajo } = req.query

  console.log(seccion, trabajo)

  secciones.map((sec) => {
    if (sec.seccion.toLocaleLowerCase() === seccion.toLowerCase()) {
      sec.trabajos.map(t => {
        if (t.name.toLowerCase() === trabajo.toLowerCase()) {
          switch (req.method) {
            case 'GET':
              return res.status(200).send(t)
            default:
              return res.status(400).json({ message: 'Este metodo no está soportado' })
          }
        }
      })
    }
  })
}