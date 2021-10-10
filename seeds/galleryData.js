const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Vegtables',
    
  },
  {
    name: 'Fruits',
   
  },
  {
    name: 'Meat',
   
  },
  {
    name: 'Seafood',
    
  },
  {
    name: 'Cart',
    
  },
];


const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
