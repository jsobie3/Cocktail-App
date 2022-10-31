const router = require("./api/favorites-routes");
const Favorite = require('../models')


router.get('/', async (req, res) => {
    try {
        const favoritesList = await Favorite.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        if (!favoritesList) {
            res.status(404).json({ message: 'No favorites found' })
        }
        console.log(favoritesList[0].dataValues.drink_name)
        res.render('favorites', {
            favoritesList,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router