// Importo a lib do 'pg' e armazeno numa variável
const Postgre = require('pg');

/**
 * Armazeno noutra variável a função 'Pool'
 * que serve para criar uma conexão com um banco postgree
 */
const Pool = Postgre.Pool;

/**
 * Crio uma variável que recebe um objeto com os dados de acesso
 * ao banco de dados que devo criar anteriormente
 * 
 * OBS: Os dados inseridos aqui são somente demonstrativos, preencha
 * os campos de acordo com o BANCO DE DADOS que VOCÊ CRIOU
 */
const dados = {
  user: 'admin',
  host: 'postgres',
  database: 'nome_do_bd',
  password: 1234,
  port: 5432
}

/**
 * Pool é uma classe, logo posso instanciar um objeto desta classe. 
 * 
 * Essa classe recebe um objeto como construtor. Neste objeto, devo
 * informar os dados de conexão com o banco de dados.
 * 
 * Assim, a variável 'pool' é um objeto da classe Pool que
 * tem o trabalho de fazer a ponte entre o sistema e o banco de dados
*/
const pool = new Pool(dados);


/**
 * Por fim, exporto a conexão que criei para poder utilizar
 * onde eu quiser
 */
module.exports = pool;