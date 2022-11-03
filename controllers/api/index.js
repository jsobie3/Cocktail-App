const router = require('express').Router();

const userRoutes = require('./user-routes');
const favoriteRoutes = require('./favorites-routes');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
// router.use('/profile', profileRoutes);

module.exports = router;
