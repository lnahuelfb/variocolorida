import { Schema, model, models } from "mongoose";

const seccionesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Debe ingresar el nombre de la seccion.'],
    unique: true,
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Debe ingresar una imagen.'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [false],
    unique: false,
    trim: true
  },
  link: {
    type: String,
    required: [false],
    unique: true,
    trim: true
  },
}, {
  timestamps: true,
  versionKey: false
})

export default models.secciones || model('secciones', seccionesSchema)