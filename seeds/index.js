const sequelize = require('../config/connection');
const seedDrink = require('./drinkData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDrink();

  await seedCategory();
  // await seedPaintings();

  process.exit(0);
};

seedAll();
