import secciones from "models/secciones"
import trabajos from "models/trabajos"
import { compress } from "next.config"

//#Get All
export const getAllSections = async () => await secciones.find()
export const getAllJobs = async () => await trabajos.find()

//#Get One
export const getOneSection = async (seccion) => await secciones.findOne({ link: seccion })
export const getOneJob = async (id) => await trabajos.findById(id)

//#Post
export const postSection = async (name, image, description) => {
  if (!name, !image) return new Error({
    message: 'No se han ingresado todos los datos necesarios'
  })

  try {

    if (description.length <= 1) description = null
    const newSection = new secciones({
      name,
      image: image || `/images/${name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}`,
      description,
      link: name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    })

    const savedSection = await newSection.save()

    return savedSection
  } catch (error) {
    console.error(error)
    return new Error(error)
  }
}

export const postJob = async (name, seccion, image, description) => {
  if (!name || !seccion || !image) throw new Error({
    message: 'No se han ingresado todos los datos necesarios.'
  })

  const img = image.split("\\") || ""

  try {
    const newJob = new trabajos({
      name,
      seccion,
      image: '/image/' + img[2],
      description
    })
    console.log(newJob)
/*  const jobSaved = await newJob.save() */
    return newJob
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

//#Patch
export const editSection = async (id, name, description, image) => {
  try {
    const editedSection = await secciones.updateOne({ _id: id }, {
      name,
      description,
      image
    })

    return editedSection
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const editJob = async (id, name, description, section) => {
  try {
    const editedJob = await trabajos.updateOne({ _id: id }, {
      name,
      description,
      section
    })

    return editedJob
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

//#Delete
export const deleteSection = async (seccion) => {
  try {
    const deletedSection = await secciones.findOneAndRemove({ link: seccion })
    return deletedSection
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export const deleteJob = async (id) => {
  try {
    const deleteJob = await trabajos.findByIdAndRemove({ _id: id })
    return deleteJob
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}