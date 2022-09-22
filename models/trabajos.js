import { Schema, model, models } from "mongoose";

const trabajosSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Debe ingresar un nombre para el trabajo.'],
    unique: [true, 'Debe tener un nombre unico.'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Debe ingresar el nombre de la imagen.'],
    unique: false,
    trim: true
  },
  seccion: {
    type: String,
    required: [true, 'Debe indicar la seccion a la que pertenece'],
    unique: false,
    trim: true
  },
  description: {
    type: String,
    required: false,
    unique: false,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.trabajos || model('trabajos', trabajosSchema)