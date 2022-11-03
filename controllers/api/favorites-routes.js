const router = require('express').Router();
const { Favorite } = require('../../models')

router.post('/', async (req, res) => {
  // let alreadyFavorited = await Favorite.findOne({
  //   where: {
  //     user_id: req.session.user_id,
  //     drink_id: req.body.drinkID
  //   }
  // })
  // console.log('Favorite Check________________________________________________________________: ', alreadyFavorited)
  // if (alreadyFavorited){
  //   // alert('Already a favorite!')
  //   res.end()
  // }
  try {
    await Favorite.create({
      user_id: req.session.user_id,
      drink_id: req.body.drinkID,
      drink_name: req.body.drinkName,
      drink_image: req.body.drinkImage
    })
    res.status(200).json({ message: "Favorite added" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})

// get all favorites where user_id foreign key matches current user id
router.get('/', async (req, res) => {
  try {
    const favoritesList = await Favorite.findAll({
      where: {
        user_id: req.headers.user_id
      }
    })
    if (!favoritesList) {
      res.status(404).json({ message: 'No favorites found' })
    }
    res.json(favoritesList)
  } catch (err) {
    res.status(500).json("Jalen broke this")
  }
});

router.delete('/:id', async (req, res) => {
  try {
    Favorite.destroy({
      where: {
        drink_id: req.params.id
      }
    })
    res.json({ message: "success" })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/all', async (req, res) => {
  try {
    const favorites = await Favorite.findAll()
    res.status(200).json(favorites)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
})

module.exports = router