var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
    nome: String,
    username: String,
    senha: String
},{
    versionKey:false
});

module.exports = mongoose.model("Usuario",UsuariosSchema);