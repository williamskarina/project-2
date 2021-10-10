const { Painting } = require('../models');

const paintingdata = [
  {
    name: 'Ocra',
    price:3.99,
    gallery_id: 1,
    filename: 'okra.jpg',
    description:
      'Okra grows in an elongated, lantern shape vegetable. It is a fuzzy, green colored, and ribbed pod.',
  },
  {
    name: 'broccoli',
    price:5.99,
    gallery_id: 1,
    filename: 'broccoli.jpg',
    description: 'broccoli bears dense green clusters of flower buds at the ends of the central axis and the branches.',
  },
  {
    name: 'kale',
    price:2.99,
    gallery_id: 1,
    filename: 'kale.jpg',
    description: "Kale is a wholesome, hearty, leafy green with a long stem.",
  },
  {
    name: 'asparagus',
    price:6.99,
    gallery_id: 1,
    filename: 'asparagus.jpg',
    description: "Asparagus is a bright green vegetable that is tender and sweet when it's cooked.",
  },
  {
    name: 'Kiwi',
    price:1.99,
    gallery_id: 2,
    filename: 'kiwi.jpg',
    description: "kiwi fruit is a true berry and has furry brownish green skin."
  },
  {
    name: 'Orange',
    price:3.99,
    gallery_id: 2,
    filename: 'kiwi.jpg',
    description:
      'An orange has a tough shiny orange skin. Inside, the fruit is divided into "segments".',
  },
  {
    name: 'Strawberries',
    price:6.99,
    gallery_id: 2,
    filename: 'strawberries.jpg',
    description:
     "A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces.",
  },
  {
    name: 'Apples',
    price:2.99,
    gallery_id: 2,
    filename: 'apple.jpg',
    description:
      "The apple is a pome (fleshy) fruit, in shades of red, green, or yellow in colour."
  },
  {
    name: 'Chicken',
    price:8.99,
    gallery_id: 3,
    filename: 'chicken.jpg',
    description:
      "chicken meat is known by its nutritional quality, as it contains significant amount of high-quality and easily digestible protein and a low portion of saturated fat. Therefore, chicken meat is recommended for consumption by all age groups.",
  },
  {
    name: 'Lamb',
    price:10.99,
    gallery_id: 3,
    filename: 'lamb.jpg',
    description:
      "Not only is it a rich source of high-quality protein, but it is also an outstanding source of many vitamins and minerals, including iron, zinc, and vitamin B12.",
  },
  {
    name: 'Ham',
    price:3.99,
    gallery_id: 3,
    filename: 'ham.jpg',
    description:
      "Ham is rich in protein, minerals, and other nutrients that support optimal health. The most notable include: Selenium.",
  },
  {
    name: 'Steak',
    price:11.99,
    gallery_id: 3,
    filename: 'steak.jpg',
    description:
      "Steak is one of the best protein rich foods. Steak is one of the best protein sources, and protein is important for pretty much every cell in your body.",
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
