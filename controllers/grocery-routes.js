const router = require ('express').Router();

const produce = [
    {
        produce_name: 'Okra',
        price: '$3.99',
    },
    {
        produce_name: 'Broccoli',
        price: '$3.99',
    },
    {
        produce_name: 'Kale',
        price: '$2.99',
    },
    {
        produce_name: 'Asparagus',
        price: '$6.99',
    },
    {
        produce_name: 'Kiwi',
        price: '$1.99',
    },
    {
        produce_name: 'Orange',
        price: '$3.99',
    },
    {
        produce_name: 'Strawberry',
        price: '$6.99',
    },
    {
        produce_name: 'Apple',
        price: '$2.99',
    },
];

router.get('/', async (req, res) => {
    res.render('all');
});

router.get('/produce/:num', async (req, res) => {
    return res.render('produce', produce[req.params.num - 1]);
});

module.exports = router;