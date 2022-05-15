const router = require('express').Router();
const {
    addFavorite,
    removeFavorite,
} = require('../../controllers/favorite-controller');

// /api/favorites
router.route('/').post(addFavorite);

// /api/users/login
router.route('/remove').post(removeFavorite);

module.exports = router;