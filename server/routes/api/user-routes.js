const router = require('express').Router();
const {
    signupUser,
    loginUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/').post(signupUser);

// /api/users/:username
router.route('/:username').post(loginUser);

module.exports = router;