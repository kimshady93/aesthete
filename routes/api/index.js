const router = require('express').Router();
const userRoutes = require('./user-routes')

//collect the packaged api endpoints 
router.user('/users', userRoutes);

module.exports = router; 