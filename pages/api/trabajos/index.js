import { dbConnect } from "utils/mongoose";
import { getAllJobs, postJob } from "utils/apiFunctions";
import { createRouter } from "next-connect";
import { handler } from "utils/handler";

const router = createRouter();

dbConnect()

router.get(async (req, res) => {
  const jobs = await getAllJobs()
  return res.status(200).json(jobs)
})

router.post(async (req, res) => {
  const { name, seccion, image, description = null } = req.body

  try {
    const jobSaved = await postJob(name, seccion, image, description)

    return res.status(201).json(jobSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).send(error)
  }
})

export default router.handler(handler);