//inclusão dos pacotes
const express = require('express');
const mysql = require('mysql2');
//instaciando o express
const app = express();
//definição da porta
const port = 3000;

//Abrindo conexão com base de dados

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'sistema_noticias'
});

connection.connect();

// Serviço de Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {
  //Busca categorias

  connection.query(
    'SELECT id, nome FROM sistema_noticias.categoria',
    (err, rows, fields) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

//Serviço de busca de noticias
app.get('/news-api/v1/categorias/:categoriaId/noticias', (req, res) => {
  res.send(req.params.categoriaId);
  //Busca categorias

  // connection.query(
  //   'SELECT id, nome FROM sistema_noticias.categoria',
  //   (err, rows, fields) => {
  //     if (err) throw err;

  //     res.send(rows);
  //   }
  // );
});

//Subindo o servidor node
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
