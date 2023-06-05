const {sq} = require("../db");
const { DataTypes } = require('sequelize');

const UserSchema = sq.define("users", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        uinique: true
    },
    password : {
        type : DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

UserSchema
    .sync()
    .then((result) => {
        console.log("Users table created successfully");
    })
    .catch((error) => {
        console.log(error)
    })

module.exports = UserSchema;