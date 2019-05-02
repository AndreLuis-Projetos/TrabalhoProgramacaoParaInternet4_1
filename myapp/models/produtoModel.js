var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutosSchema = new Schema({
    nome: String,
    descricao: String,
    marca:String,
    peso:String,
    preco: Number,
    quantidade: Number,
    imagem1: String,
    imagem2: String,
    imagem3: String,
    imagem4: String,
    desconto:[{valor:Number, descricao:String}],
    fornecedor:[{nome:String, endereco:String}],
    categoria:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'categorias'
    }
},{
    versionKey:false
});

module.exports = mongoose.model("Produto",ProdutosSchema);