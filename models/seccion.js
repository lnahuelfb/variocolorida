import { Schema, model, models } from "mongoose";

const seccionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Debe ingresar el nombre de la seccion'],
    unique: true,
    trim: true
  },
  image: {
    type: String,
    required: [true],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [false],
    unique: true,
    trim: true
  },
  link: {
    type: String,
    required: [false],
    unique: true,
    trim: true
  },
  trabajos: {
    type: [{
      name: {
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        unique: true,
        trim: true
      },
      image: {
        type: String,
        required: [true],
        unique: true,
        trim: true
      },
    }],
    required: [false],
    trim: true
  },
}, {
  timestamps: true,
  versionKey: false
})

export default models.seccion || model('seccion', seccionSchema)