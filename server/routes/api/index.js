const router = require('express').Router();
const userRoutes = require('./user-routes');
const favoriteRoutes = require('./favorite-routes');

// /api/users
router.use('/users', userRoutes);

// /api/favorites
router.use('/favorites', favoriteRoutes);

module.exports = router;