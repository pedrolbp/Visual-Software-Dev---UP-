var express = require('express');
var router = express.Router();
//Implementar as dependencias para o funcionamento da classe User
const db =require('../models') // carregando o banco de dados

//Carregando as classes service e controller da user
const UserService = require('../services/userService');
const UserController = require('../controllers/userController');

//Construir os objetos a partir das classes
const userService = new UserService(db.User);
const userController = new UserController(userService);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Módulo de usuários rodando.');
});


//Rota para registrar novo usuário
router.post('/novouser', async (req,res)=>{
  userController.createUser(req,res);
});
module.exports = router;
