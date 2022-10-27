const { Drink } = require('../models');


// Drink category values 
// 1 - Whiskey
// 2 - Rum
// 3 - Vodka 
// 4 - Gin
// 5 - Tequila
// 6 - Brandy
// 7 - Champagne

const drinkdata = [
  {
    name: 'Old-Fashioned',
    main_liquor: 'Whiskey',
    // tags: []
    category_id: 1,
    
  },
  {
    name: 'Mojito',
    main_liquor: 'Rum',
    // tags: []
    category_id: 2,
  },
  {
    name: 'whiskey-shour',
    main_liquor: 'Whiskey',
    // tags: []
    category_id: 1,
  },
  {
    name: 'rum-and-coke',
    main_liquor: 'Rum',
    // tags: []2
    category_id: 2,
  },
  {
    name: 'Margarita',
    main_liquor: 'Tequila',
    // tags: []
    category_id: 5,
  },
  {
    name: 'Martini',
    main_liquor: 'Vodka',
    // tags: []
    category_id: 3,
  },
  {
    name: 'Moscow Mule',
    main_liquor: 'Vodka',
    // tags: []
    category_id: 3,
  },
  {
    name: 'Manhattan',
    main_liquor: 'Whiskey',
    // tags: []
    category_id: 1,
  },
  {
    name: 'Vesper',
    main_liquor: 'Gin',
    // tags: []
    category_id: 4,
  },
  {
    name: 'Mimosa',
    main_liquor: 'Champagne',
    // tags: []
    category_id: 7,
  },
  {
    name: 'Sidecar',
    main_liquor: 'Rum',
    // tags: []
    category_id: 2,
  },
  {
    name: 'Daiquiri',
    main_liquor: 'Rum',
    // tags: []
    category_id: 2,
  },
];

const seedDrink= () => Drink.bulkCreate(drinkdata);

module.exports = seedDrink;
