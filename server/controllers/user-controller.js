require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// TODO: add better error handling
const userController = {
    async signupUser(req, res) {
        try {
            const userObj = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
            };

            const user = new User(userObj);

            await user.save();

            if (user) {
                console.log('hit')
                const token = jwt.sign({ id: user._id }, process.env.SECRET);
                console.log(token);
                res.json(token);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async loginUser(req, res) {
        try {
            const user = await User.findOne({
                username: req.params.username
            });

            if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
                throw new Error('Username or password is incorrect.');
            }

            const token = jwt.sign({ id: user._id }, process.env.SECRET)
            res.json(token);
        } catch (err) {
            res.status(500).json(err);
        }

    }
};

module.exports = userController;