const router = require('express').Router();
const {
    addFavorite,
    removeFavorite,
    getMyFavorites,
} = require('../../controllers/favorite-controller');

// /api/favorites
router.route('/').post(addFavorite);

// /api/favorites
router.route('/').get(getMyFavorites);

// /api/favorites/remove
router.route('/remove').post(removeFavorite);

module.exports = router;