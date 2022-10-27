const router = require('express').Router();

const userRoutes = require('./user-routes');
const drinkRoutes = require('./drink-routes');
const searchRoutes = require('./search-routes')
// const profileRoutes = require('./profile-routes')

router.use('/users', userRoutes);
router.use('/drinks', drinkRoutes);
router.use('/search', searchRoutes)
// router.use('/profile', profileRoutes);

module.exports = router;
