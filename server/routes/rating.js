const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.rating.getAll)

router.put('/update', controllers.rating.update)

router.post('/create', controllers.rating.create)


module.exports = router;