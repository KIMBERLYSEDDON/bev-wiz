require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

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
    loginUser(req, res) {
        User.findOne({
            username: req.params.username
        })
            .select('-__v')
            .then((userData) => {
                try {
                    if (userData) {
                        if (bcrypt.compareSync(req.body.password, userData.password)) {
                            const token = jwt.sign({ id: userData.uuid }, process.env.SECRET)
                            res.json(token);
                        }
                    }
                } catch (err) {
                    res.status(500).json(err);
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
};

module.exports = userController;