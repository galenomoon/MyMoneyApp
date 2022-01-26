const mongoose = require("mongoose");
mongoose.Promise = global.Promise; // Removing warnings
module.exports = mongoose.connect("mongodb://localhost/mymoney"); //database name

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite máximo de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "O '{VALUE}' não é válido para o atributo '{PATH}'.";
