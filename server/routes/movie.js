const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.movie.getAll)

router.post('/add', controllers.movie.addToFavorites)

router.delete('/remove', controllers.movie.removeFromFavorites)


module.exports = router;