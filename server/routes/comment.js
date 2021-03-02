const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.comment.getAll)

router.put('/update', controllers.comment.update)
router.post('/create', controllers.comment.create)


module.exports = router;