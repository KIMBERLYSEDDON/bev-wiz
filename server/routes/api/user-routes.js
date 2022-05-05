const router = require('express').Router();
const {
    signupUser,
    loginUser
} = require('../../controllers/user-controller');

// /api/users/signup
router.route('/signup').post(signupUser);

// /api/users/login
router.route('/login').post(loginUser);

module.exports = router;