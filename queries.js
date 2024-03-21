const conexao = require("./db")
///Consulta com SELECT *
conexao.conecta.query('SELECT id_produto,nome_produto FROM produto', function(err, result, fields) 
{
if (err) throw err
console.log(result)
console.log(fields)// metadado do banco de dados em relação a tabela
});
