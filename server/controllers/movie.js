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
        models.User.findOne({_id:userId})
        .then(user => {
           return Promise.all([
               models.User.updateOne({_id:userId},{$push: {favoriteMovies:movieId}}),
               models.User.findOne({_id:userId})
           ])
        }).then(([modifiedObj,user]) => {
            res.send(user.favoriteMovies)
        }).catch(next)

    },
    removeFromFavorites: (req, res, next) => {
        const {userId,movieId} = req.body
        models.User.findOne({_id:userId})
        .then(user => {
            return Promise.all([
                models.User.updateOne({_id:userId},{$pull: {favoriteMovies:movieId}}),
                models.User.findById(userId)
            ])
         }).then(([modifiedObj,user]) => {
             res.send(user.favoriteMovies)
         }).catch(next)
    }
}