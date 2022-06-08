//inclusão dos pacotes
const express = require('express');
const mysql = require('mysql2');
//instaciando o express
const app = express();
//definição da porta
const port = 3000;
// Serviço de Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {
  res.send([
    {
      Name: 'Arthur',
      idade: 32
    }
  ]);
});
//Subindo o servidor node
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
