const mongoose = require("mongoose");
const { Schema } = mongoose;

const Operadores = new Schema({
  nombre: String,
  licencia: String
});

//Definir y exportar con nombre y el esquema a exportar
module.exports = mongoose.model("Operadores", Operadores);
