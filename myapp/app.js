var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var categoriaRouter = require('./routes/categoriaRouter');
var produtoRouter = require('./routes/produtoRouter');
//var usuariosRouter = require('./routes/usuarios');
var usuarioRouter = require('./routes/usuarioRouter');
var authRouter = require('./routes/auth');

var mongoose = require('mongoose');
var app = express();

var url = 'mongodb://localhost:27017/trabalhoProgramacaoInternet4'
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados MongoDB.')
});
mongoose.connect(url);
app.listen(5000, function () {
    console.log('Servidor escutando na porta 5000');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categoria', authRouter.validaUsuario);
app.use('/produto', authRouter.validaUsuario);

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/categoria', categoriaRouter);
app.use('/produto', produtoRouter);
app.use('/usuario', usuarioRouter);
app.use('/auth', authRouter.router);

module.exports = app;