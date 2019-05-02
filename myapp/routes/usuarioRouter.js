var express = require('express');
var Usuario = require('.././models/usuarioModel');
var usuarioController = require('../controllers/usuarioController')(Usuario);

var usuarioRouter = express.Router();

usuarioRouter.route('')
    .get(usuarioController.get)
    .post(usuarioController.add);

    usuarioRouter.route('/:id')    
   .get(usuarioController.getById)
   .put(usuarioController.update)   
   .delete(usuarioController.del);


   usuarioRouter.route('/username/:username').get(usuarioController.getByUsername);

  
module.exports = usuarioRouter; 