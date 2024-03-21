let app = require("./db")
let consulta = require("./queries")

app.conecta.connect(function(err) {
    if (err) throw err;
    console.log("Banco Test Conectado!");
});

consulta.conexao