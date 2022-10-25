const router = require('express').Router();
const { Drink } = require('../../models');

// get all drinks
router.get('/', async (req, res) => {
    try {
        const drinkData = await Drink.findAll();
        res.json(drinkData)
    } catch (err) {
        res.status(500).json(err);
    }
})


// get drink by id
router.get('/:id', async (req, res) => {
    try {
        const drinkData = await Drink.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!drinkData){
            res.status(404).json({message: "No drink found with this id"})
        }
        res.status(200).json(drinkData)
    } catch (err) {
        res.status(500).json(err);
    }
})

// Add drink
router.post('/', async (req, res) => {
    Drink.create({
        name: req.body.name,
        submitted_by: req.body.submitted_by,
        ingredients: req.body.ingredients
    });
    res.status(200).json({message: 'Drink added successfully'});
})

// Delete drink
router.delete('/:id', (req, res) => {
    Drink.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if (!data) {
            res.status(404).json({message: "No drink found with this ID"})
        }
        res.json(data);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
})

//update drink
router.put('/:id', (req, res) => {
    Drink.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {res.status(200).json('Updated successfully')})
    .catch (err => {res.status(500).json(err)})
})


module.exports = router;