const router = require('express').Router();
const { Favorite } = require('../../models')

router.post('/', async (req, res) => {
  try {
    await Favorite.create({
      user_id: req.session.user_id,
      drink_id: req.body.drinkID,
      drink_name: req.body.drinkName
    })
    res.status(200).json({message: "Favorite added"})
  }
  catch (err) {
    res.status(500).json(err)
  }
})

// get all favorites where user_id foreign key matches current user id
router.get('/', async (req,res) => {
  try {
    const favoritesList = await Favorite.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
    if (!favoritesList) {
      res.status(404).json({message: 'No favorites found'})
    }
    console.log(favoritesList[0].dataValues.drink_name)
    res.render('favorites', {favoritesList})
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete(':/', async (req,res) => {
  try {
    Favorite.destroy({
      where: {
        id: req.params.id
      }
    })
    res("success")
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router