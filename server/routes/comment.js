const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.comment.getAll)

router.put('/update', controllers.comment.update)


module.exports = router;