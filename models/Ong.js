const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const Ong = db.define("Ong", {
    cnpj: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
    },
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
    foto: {
        type: DataTypes.STRING,
    },
    cidade: {
        type: DataTypes.STRING,
        required: true,
    },
    estado: {
        type: DataTypes.STRING,
        required: true,
    },
    endereco: {
        type: DataTypes.STRING,
        required: true,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    senha: {
        type: DataTypes.STRING,
        require: true
    },
    agencia: {
        type: DataTypes.STRING,
    },
    conta_corrente: {
        type: DataTypes.STRING,
    },
    chave_pix: {
        type: DataTypes.STRING,
    },
    caixa_postal: {
        type: DataTypes.STRING,
    },
});

module.exports = Ong;