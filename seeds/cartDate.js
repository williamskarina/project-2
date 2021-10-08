const { Cart} = require('../models');

const cartdata = [
  {
    id:'0',
    name: 'nope',
    price: 0.0,    
  },

];


const seedCart = () => Cart.bulkCreate(cartdata);

module.exports = seedCart;