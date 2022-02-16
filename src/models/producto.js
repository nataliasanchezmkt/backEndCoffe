//la mision de este archivo es modelar el dato a guardar en la base de dato
//modelaremos el esquema es que es como el esqueleto de la bd
import mongoose, { Schema } from "mongoose";

// creamo el esquema es similar a una clase de jses6

const productoSchema = new Schema({
  name: {
    type: String,
    maxlength: 200,
    unique: true,
    required: true
  },
  price: {
    type: Number,
    required: true,
    maxlength: 2000
  },
  url: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  }
});

const Producto = mongoose.model('producto', productoSchema)

export default Producto;