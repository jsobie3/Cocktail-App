const router = require('express').Router();
const { Favorite } = require('../../models');


router.get('/', (req, res) => {

    res.render('profile', {
      loggedIn: req.session.loggedIn
    });
  
  });



router.get('/favorites', async (req, res) => {
    try {
      const favoritesList = await Favorite.findAll({
        where: {
          user_id: req.session.user_id
        }
      })
      if (!favoritesList) {
        res.status(404).json({ message: 'No favorites found' })
      }
      res.render('favorites', { favoritesList })
    } catch (err) {
      res.status(500).json(err)
    }
  });

  module.exports = router