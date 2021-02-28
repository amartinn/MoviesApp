const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.rating.getAll)

router.put('/update', controllers.rating.update)


module.exports = router;