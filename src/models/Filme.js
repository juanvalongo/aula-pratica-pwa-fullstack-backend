const mongoose = require("mongoose");   

const filmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  diretor: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true,
    min: 1888,
    validate: {
        validator: function (valor) {
            return valor <= new Date().getFullYear();    // A regra que determina se é válido
            },
            message: "O ano não pode ser maior que o ano atual"
    }
  },
  nota: {
    type: Number,
    min: 0,
    max: 10
  }
 },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Filme", filmeSchema);