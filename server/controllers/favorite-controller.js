const { Favorite } = require('../models');
const jwt_decode = require("jwt-decode");

const favoriteController = {
    async addFavorite(req, res) {
        const { authorization } = req.headers;
        const { id } = jwt_decode(authorization);

        if (!id) {
            throw new Error('User must be signed in.');
        }

        const { favoriteId } = req.body;
        if (!favoriteId) {
            throw new Error('Missing required fields.');
        }

        const favoriteObj = {
            favoriteId: favoriteId.trim(),
            userId: id,
        };

        const favorite = new Favorite(favoriteObj);
        await favorite.save();

        if (!favorite) {
            throw new Error('Invalid input.');
        }

        res.send(favorite);
    },
    async removeFavorite(req, res) {
        const { authorization } = req.headers;
        const { id } = jwt_decode(authorization);

        if (!id) {
            throw new Error('User must be signed in.');
        }

        const { _id } = req.params;
        const favorite = await Favorite.findByIdAndRemove(_id);
        if (!favorite) {
            throw new Error('No valid favorite provided.');
        }

        res.send("success");
    },
};

module.exports = favoriteController;