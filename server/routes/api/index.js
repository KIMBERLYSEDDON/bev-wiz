const router = require('express').Router();
const userRoutes = require('./user-routes');

// /api/users
router.use('/users', userRoutes)

module.exports = router;