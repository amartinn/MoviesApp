const router = require('../routes')

module.exports = (app) => {

    app.use('/api/movies', router.movie)

    app.use('/api/comments', router.comment)

    app.use('/api/ratings', router.rating)

    app.use('/api/user',router.user)
};