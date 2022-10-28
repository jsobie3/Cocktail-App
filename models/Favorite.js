const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User')

class Favorite extends Model {};

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // These DO NOT reference drinks in our database. It's a "reference" to the drink ID assigned by the external API.
        drink_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        freezeTableName: true,
        modelName: 'favorite'
    }
)
module.exports = Favorite;