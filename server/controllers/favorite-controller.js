const { Favorite } = require("../models");
const jwt_decode = require("jwt-decode");

const favoriteController = {
  async addFavorite(req, res) {
    try {
      const { authorization } = req.headers;
      const { id } = jwt_decode(authorization);

      if (!id) {
        throw new Error("User must be signed in.");
      }

      const { favoriteId } = req.body;
      if (!favoriteId) {
        throw new Error("Missing required fields.");
      }

      const favoriteObj = {
        favoriteId: favoriteId.trim(),
        userId: id,
      };

      const favorite = new Favorite(favoriteObj);
      await favorite.save();

      if (!favorite) {
        throw new Error("Invalid input.");
      }

      res.send(favorite);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFavorite(req, res) {
    try {
      const { authorization } = req.headers;
      const { id } = jwt_decode(authorization);

      if (!id) {
        throw new Error("User must be signed in.");
      }

      const { _id } = req.body;
      const favorite = await Favorite.findByIdAndRemove(_id);
      if (!favorite) {
        throw new Error("No valid favorite provided.");
      }

      res.send("success");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getMyFavorites(req, res) {
    try {
      const { authorization } = req.headers;
      const { id } = jwt_decode(authorization);

      console.log(id);

      if (!id) {
        throw new Error("User must be signed in.");
      }

      const favorites = await Favorite.find({
        where: { userId: id },
      });
      console.log(favorites);

      res.send({ favorites: favorites });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = favoriteController;
