import { dbConnect } from 'utils/mongoose'
import { getAllSections, postSection } from 'utils/apiFunctions'
import { createRouter } from 'next-connect'
import { handler } from 'utils/handler'

dbConnect()

const router = createRouter()

router.get(async (req, res) => {
  const sections = await getAllSections()
  return res.status(200).json(sections)
})

router.post(async (req, res) => {
  const { name, image, description } = req.body

  try {
    const savedSection = await postSection(name, image, description)
    return res.status(201).json(savedSection)
  } catch (error) {
    return res.status(400).json(error)
  }
})

export default router.handler(handler)