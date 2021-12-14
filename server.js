const express = require('express');
const app = express();

//view engine mostra com qual ferramenta a página será renderizada
app.set("view engine", "ejs");
//get chama a rota e o response indica de onde virá a renderização
app.get("/", function (req, res) {
    res.render("pages/index");
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})
//fica "ouvindo" e quando a porta indicado for rodada o index será chamado
app.listen(8080);
console.log("Rodando");