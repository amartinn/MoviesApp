
const controllers = require('../controllers/')
const router = require('express').Router()


router.post('/', controllers.user.set)


module.exports = router;