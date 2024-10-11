require('dotenv').config();
const conn = require("./db/conn");
const express = require('express');
const app = express();

const Usuario = require("./models/Usuario");
const Ong = require("./models/Ong");
const Animal = require("./models/Animal");

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static('public'));

conn
    .sync()
    .then(() => {
        console.log('Conectado.');
    })
    .catch((err) => {
        console.log('Erro de conexão: ' + err);
    });

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/doacoes", (req, res) => {
    res.sendFile(`${__dirname}/views/doacoes.html`);
});

app.get("/reportar", (req, res) => {
    res.sendFile(`${__dirname}/views/reportar.html`);
});

app.get("/animais", (req, res) => {
    res.sendFile(`${__dirname}/views/animais.html`);
});

app.post("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/usuarios/novo", (req, res) => {
    res.sendFile(`${__dirname}/views/novoUsuario.html`);
});

app.post('/usuarios/novo', async (req, res) => {
    const cpf = req.body.cpf;
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const data_nascimento = req.body.data_nascimento;
    const email = req.body.email;
    const senha = req.body.senha;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    const dadosUsuario = {
        cpf,
        nome,
        sobrenome,
        data_nascimento,
        email,
        senha,
        cidade,
        estado
    };

    const usuario = await Usuario.create(dadosUsuario);

    res.sendFile(`${__dirname}/views/entrar.html`);
});

app.get("/usuarios/entrar", (req, res) => {
    res.sendFile(`${__dirname}/views/entrar.html`);
});

app.listen(8000, () => {
    console.log('Servidor conectado na porta 8000.');
});