const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User')

class Drink extends Model { };

Drink.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        submitted_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "user",
                key: 'id'
            }
        },
        ingredients: {
            type: DataTypes.STRING
        },
        // tags: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: true
        // }
        // ingredients, probably(enter manually)? Flavor-profile tags(dropdown list)? drink size(dropdown list)? Ask a bartender what else this needs
    }, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'drink',
}
)

module.exports = Drink;