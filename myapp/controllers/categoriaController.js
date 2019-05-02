
var categoriaController = function (Categoria) {

    var get = function (req, res) {

        Categoria.find(function (err, Categorias) {

            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(Categorias);
            }
        });
    };

    var add = function (req, res) {

        if(req.body.nome === undefined || req.body.nome === null || req.body.nome === "" 
           || req.body.descricao === undefined || req.body.descricao === null || req.body.descricao === ""){

            res.status(500);
            res.send('Os seguintes campos não pode estar em branco: nome e descricao ');
            throw new Error('Os seguintes campos não pode estar em branco');
        }
        
        var categoria = new Categoria(req.body);

        categoria.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro : falha ao incluir Categoria...');
            }
            else {
                res.status(201);
                res.send(categoria);
            }
        })
    };

    var getById = function (req, res) {
        Categoria.findById(req.params.id, function (err, categoria) {
            if (err) {
                res.status(404);
                res.send("Categoria não encontrado...");
            }
            else {
                res.status(200);
                res.send(categoria);
            }
        })
    };

    var update = function (req, res) {

        if(req.body.nome === undefined || req.body.nome === null || req.body.nome === "" 
           || req.body.descricao === undefined || req.body.descricao === null || req.body.descricao === ""){

            res.status(500);
            res.send('Os seguintes campos não pode estar em branco: nome e descricao ');
            throw new Error('Os seguintes campos não pode estar em branco');
        }

        Categoria.findById(req.params.id, function (err, categoria) {
            if (err) {
                res.status(404);
                res.send("Categoria não encontrado...");
            }
            else {
                categoria.nome = req.body.nome;
                categoria.descricao = req.body.descricao;

                categoria.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(categoria);
                    }
                    else {
                        res.status(500);
                        res.send('Falha ao atualizar Categoria...');
                    }
                })
            }
        });
    };


    var del = function (req, res) {
        Categoria.findById(req.params.id, function (err, categoria) {
            categoria.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Categoria deletado...');
                }
            });
        });
    };

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del       
    }
};

module.exports = categoriaController;