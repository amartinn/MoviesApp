const models = require('../models')
module.exports = {

    getAll: (req, res, next) => {
        const {userId} = req.query;
        models.User.findOne({_id:userId})
        .then(user => {
            res.send(user.favoriteMovies)
        })
        .catch(next)
    },
    addToFavorites: (req, res, next) => {
        const {userId,movieId} = req.body
        models.User.updateOne({_id:userId},{$push: {favoriteMovies:movieId}})
        .then(_ => {
            return models.User.findById(userId)
        })
        .then(user => {
            res.send(user.favoriteMovies)
        })
        .catch(next)


    },
    removeFromFavorites: (req, res, next) => {
        const {userId,movieId} = req.body
        models.User.updateOne({_id:userId},{$pull: {favoriteMovies:movieId}})
        .then(_ => {
            return models.User.findById(userId)
        })
        .then(user => {
            res.send(user.favoriteMovies)
        })
        .catch(next)
    }
}