const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();
const usuarios = require('../controllers/usuarios');

const {login} = usuarios;





router.post('/login', login);


module.exports = router;
