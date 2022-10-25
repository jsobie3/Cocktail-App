const { Drink } = require('../models');

const drinkdata = [
  {
    name: 'old-fashioned',
    ingredients: 'Bourbon',
    // tags: []
  },
  {
    name: 'mojito',
    main_liquor: 'Rum',
    // tags: []
  },
  {
    name: 'whiskey-shour',
    main_liquor: 'Whiskey',
    // tags: []
  },
  {
    name: 'rum-and-coke',
    main_liquor: 'Rum',
    // tags: []
  },
];

const seedDrink= () => Drink.bulkCreate(drinkdata);

module.exports = seedDrink;
