var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');

var dados = fs.readFileSync('db.json')
var usuarios = JSON.parse(dados);
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log('Servidor iniciado em http://localhost:3001');
});

app.get('/', (req, res) => {
    return res.json(usuarios);
});

app.post('/', (req, res) => {

    var body = req.body;
    body.id = gerarId();

    usuarios.push(body);

    novosDados = JSON.stringify(usuarios, null, 2);

    fs.writeFile('db.json', novosDados, () => { console.log('Usuário Cadastrado') });
    return res.json(body);

})

function gerarId() {
    var maxId = Math.max.apply(Math, usuarios.map(function (usuario) { return usuario.id; }));
    var newId = maxId + 1;
    return newId;
}