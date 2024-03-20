let app = require("./db")

app.conecta.connect(function(err) {
    if (err) throw err;
    console.log("Banco Test Conectado!");
});