import { dbConnect } from "utils/mongoose"
import { deleteSection, editSection, getOneSection } from "utils/apiFunctions"
import { createRouter } from 'next-connect'
import { handler } from 'utils/handler'

dbConnect()

const router = createRouter()

router.get(async (req, res) => {
  const { seccion } = req.query

  try {
    const section = await getOneSection(seccion)

    return res.status(200).json(section)
  } catch (error) {
    console.log(error);
    return res.status(404).json(error)
  }
})

router.patch(async (req, res) => {
  const { name, description, image } = req.body
  const seccion = await editSection(id, name, description, image)

  return res.status(200).json(seccion)
})

router.delete(async (req, res) => {
  const { seccion } = req.query
  try {
    const deletedSection = await deleteSection(seccion)

    return res.status(200).json(deletedSection)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
})

export default router.handler(handler)