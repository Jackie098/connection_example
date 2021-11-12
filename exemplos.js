/**
 * Navegue até o arquivo de conexão e importe ele
 */
const pool = require('./postgre_connection');

// Essa função vai ter o dever de inserir valores
// numa tabela do banco
function inserindo_numa_tabela() {
  const insert = "INSERT INTO nome_tabela (nome, idade, altura) VALUES ($1, $2, $3)";

  const valores = ['joao', 18, 1.87];

  return new Promise(function (resolve, reject) {
    pool.query(insert, valores, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results)
      }
    })
  })
}

// Utilizando a função
inserindo_numa_tabela()
  .then(function (results) {
    console.log(results);
  })
  .catch(function (err) {
    console.log(err);
  })