const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.render(path.resolve(__dirname + '/'+'index')) // siguiente clase controlar errores de cache 

  res.send("hola")
})

app.listen(3000,function(){
  console.log('servidor escucha en http://localhost:3000/')
})
