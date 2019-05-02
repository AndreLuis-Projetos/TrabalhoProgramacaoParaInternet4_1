var express = require('express');
var Categoria = require('.././models/categoriaModel');
var categoriaController = require('../controllers/categoriaController')(Categoria);

var categoriaRouter = express.Router();

categoriaRouter.route('')
    .get(categoriaController.get)
    .post(categoriaController.add);

    categoriaRouter.route('/:id')    
   .get(categoriaController.getById)
   .put(categoriaController.update)
   .delete(categoriaController.del);

module.exports = categoriaRouter; 