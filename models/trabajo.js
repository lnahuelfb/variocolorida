import { Schema, model, models } from "mongoose";

const trabajoSchema = new Schema({
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
  id: {
    type: String,
    required: [true],
    unique: true,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.trabajo ||model('trabajo', trabajoSchema)