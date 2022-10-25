const { Gallery } = require('../models');

  const galleryData = [
    {
      name: 'Our Favorites',
  
    },
    {
      name: 'Modern Classics',
   
    },
    {
      name: 'Explore by profile',

    }
  
  ];

const drinkGallery = () => Gallery.bulkCreate(galleryData);

module.exports = drinkGallery;
