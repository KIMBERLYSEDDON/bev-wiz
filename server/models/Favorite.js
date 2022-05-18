const { Schema, Types, model } = require("mongoose");

const favoriteSchema = new Schema({
    favoriteId: {
        type: Types.ObjectId,
        require: true,
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;