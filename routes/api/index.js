const router = require('express').Router();
const userRoutes = require('./user-routes')

//collect the packaged api endpoints 
// router.use('/users', userRoutes);
router.get('/',(req,res)=>{
    res.send('router')
})

module.exports = router; 