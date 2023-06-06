const express = require('express');
const path = require('path');

const controller = require('./controller/index')

const app = express();

// app.use(express.static('public'));

// crear de acuerdo a lo visto de la separacion del controller crear 3 diferente controle 1. user 2. pokemon 3. role
app.get('/', controller.handlerHelloController)

app.listen(3000,function(){
  console.log('servidor escucha en http://localhost:3000/')
})
