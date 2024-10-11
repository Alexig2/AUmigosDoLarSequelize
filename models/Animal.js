const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Ong = require("../models/Ong");


const Animal = db.define("Animal", {
    foto: {
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
    idade: {
        type: DataTypes.INTEGER,
    },
    medida_idade: {
        type: DataTypes.STRING,
    },
    raca: {
        type: DataTypes.STRING,
        required: true,
    },
    porte: {
        type: DataTypes.STRING,
        required: true,
    },
    especie: {
        type: DataTypes.STRING,
        required: true,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    sexo: {
        type: DataTypes.STRING,
        required: true,
    },
    disponivel: {
        type: DataTypes.INTEGER,
        required: true,
    },
});

Animal.belongsTo(Ong);
Ong.hasMany(Animal);

module.exports = Animal;