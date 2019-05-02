
var ProdutoController = function (Produto) {

    var get = function (req, res) {

        Produto.find(function (err, Produto) {

            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(Produto);
            }
        });
    };

    var add = function (req, res) {

        
        if(req.body.nome === undefined || req.body.nome===null || req.body.nome === "" 
           || req.body.descricao === undefined || req.body.descricao===null || req.body.descricao === "" 
           || req.body.imagem1 === undefined || req.body.imagem1===null || req.body.imagem1 === ""
           || req.body.preco === undefined || req.body.preco===null || req.body.preco === 0
           || req.body.quantidade === undefined || req.body.quantidade===null || req.body.quantidade === 0 
           || req.body.categoria === undefined || req.body.categoria===null 
           || req.body.fornecedor === undefined || req.body.fornecedor===null  || req.body.fornecedor.nome ==="" || req.body.fornecedor.endereco ==="" ){
             
            res.status(500);
            res.send('Os seguintes campos não pode estar em branco: nome, descricao, imagem1, preco, quantidade, fornecedor.nome e fornecedor.endereço  ');
            throw new Error('Os seguintes campos não pode estar em branco');
        }

        var produto = new Produto(req.body);

        produto.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro : falha ao incluir Produto...');
            }
            else {
                res.status(201);
                res.send(produto);
            }
        })
    };

    var getById = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                res.status(200);
                res.send(produto);
            }
        })
    };

    var getByCategorias = function(req, res){

        Produto.find({'categoria':req.params.id}, function(err, produto){
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                res.status(200);
                res.send(produto);
            }
        })
         
    };

    var update = function (req, res) {

        if(req.body.nome === undefined || req.body.nome===null || req.body.nome === "" 
           || req.body.descricao === undefined || req.body.descricao===null || req.body.descricao === "" 
           || req.body.imagem1 === undefined || req.body.imagem1===null || req.body.imagem1 === ""
           || req.body.preco === undefined || req.body.preco===null || req.body.preco === 0
           || req.body.quantidade === undefined || req.body.quantidade===null || req.body.quantidade === 0 
           || req.body.categoria === undefined || req.body.categoria===null 
           || req.body.fornecedor === undefined || req.body.fornecedor===null  || req.body.fornecedor.nome ==="" || req.body.fornecedor.endereco ==="" ){
             
            res.status(500);
            res.send('Os seguintes campos não pode estar em branco: nome, descricao, imagem1, preco, quantidade, fornecedor.nome e fornecedor.endereço  ');
            throw new Error('Os seguintes campos não pode estar em branco');
        }
        
        Produto.findById(req.params.id, function (err, produto) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                produto.nome = req.body.nome;
                produto.descricao = req.body.descricao;
                produto.marca = req.body.marca;
                produto.peso = req.body.peso;
                produto.preco = req.body.preco;
                produto.quantidade = req.body.quantidade;
                produto.desconto = req.body.desconto;
                produto.fornecedor = req.body.fornecedor;
                produto.categoria = req.body.categoria;
                produto.imagem1 = req.body.imagem1;
                produto.imagem2= req.body.imagem2;
                produto.imagem3= req.body.imagem3;
                produto.imagem4= req.bodyimagem4;

                produto.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(produto);
                    }
                    else {
                        res.status(500);
                        res.send('Falha ao atualizar Produto...');
                    }
                })
            }
        });
    };


    var del = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            produto.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Produto deletado...');
                }
            });
        });
    };

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del,
        getByCategorias:getByCategorias
    }
};

module.exports = ProdutoController;