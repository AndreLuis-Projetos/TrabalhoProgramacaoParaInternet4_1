var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriasSchema = new Schema({
    nome: String,
    descricao: String
},{
    versionKey:false
});

module.exports = mongoose.model("Categoria",CategoriasSchema);