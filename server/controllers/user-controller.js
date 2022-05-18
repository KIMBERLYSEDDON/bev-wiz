require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const userController = {
    async signupUser(req, res) {
        try {
            const { username, email, password, name } = req.body;
            if (!username || !email || !password) {
                throw new Error('Missing required fields.');
            }

            const userObj = {
                username: username.trim().toLowerCase(),
                email: email.trim().toLowerCase(),
                password: password.trim(),
                name: name ? name.trim().toLowerCase() : "User",
            };

            const user = new User(userObj);

            await user.save();

            if (!user) {
                throw new Error('Invalid input.');
            }

            const token = jwt.sign({ id: user._id }, process.env.SECRET);
            res.json({ token: token });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async loginUser(req, res) {
        try {
            const { username, password } = req.body;
            if(!username || !password) {
                throw new Error('Missing required fields.');
            }

            const user = await User.findOne({
                username: username.trim().toLowerCase()
            });

            if (!user || !bcrypt.compareSync(password.trim(), user.password)) {
                throw new Error('Username or password is incorrect.');
            }

            const token = jwt.sign({ id: user._id }, process.env.SECRET)
            res.json({ token: token });
        } catch (err) {
            res.status(500).json(err);
        }

    }
};

module.exports = userController;