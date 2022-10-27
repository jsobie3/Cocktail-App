const { Category } = require('../models');

const categoryData = [
    {
        name: 'Whiskey'
    },
    {
        name: 'Rum'
    },
    {
        name: 'Vodka'
    },
    {
        name: 'Gin'
    },
    {
        name: 'Tequila'
    },
    {
        name: 'Brandy'
    }
];

const seedCategory = () => Drink.bulkCreate(categoryData);

module.exports = seedCategory;