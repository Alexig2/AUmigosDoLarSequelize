const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const Usuario = db.define("Usuario", {
    cpf: {
        type: DataTypes.STRING,
        required: true,
    },
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
    sobrenome: {
        type: DataTypes.STRING,
        required: true,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        required: true,
    },
    email: {
        type: DataTypes.STRING,
        required: true,
    },
    senha: {
        type: DataTypes.STRING,
        required: true,
    },
    cidade: {
        type: DataTypes.STRING,
        required: true,
    },
    estado: {
        type: DataTypes.STRING,
        required: true,
    },
});

module.exports = Usuario;