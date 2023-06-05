const {sq} = require("../db");
const { DataTypes } = require('sequelize');
const UserSchema = require("./userModel");

const ProductSchema = sq.define("product", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: UserSchema,
          key: "id"
        }
      },
    buyerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: UserSchema,
            key: "id"
        }
    }
})


ProductSchema.sync()
    .then((result) => {
        console.log("Product table created successfully");
    })
    .catch((error) => {
        console.log(error)
    })

ProductSchema.belongsTo(UserSchema, { foreignKey: 'sellerId' });
ProductSchema.belongsTo(UserSchema, { foreignKey: 'buyerId' });

module.exports = ProductSchema;