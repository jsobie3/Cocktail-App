const router = require('express').Router();
const { Drink } = require('../../models');

// get all drinks
router.get('/', async (req, res) => {
    try {
        const drinkData = await Drink.findAll();
    } catch (err) {
        res.status(500).json(err);
    }
})