const models = require('../models')
const findOrCreateUser = require('./user')
module.exports = {

    getAll: (req, res, next) => {
        const {userId} = req.body;
        findOrCreateUser(userId)
        .then(user => {
            res.send(user.favoriteMovies)
        })
        .catch(next)
    },
    addToFavorites: (req, res, next) => {
        const {userId,movieId} = req.body
        findOrCreateUser(userId)
        .then(user => {
           return Promise.all([
               models.User.updateOne({_id:userId},{$push: {favoriteMovies:movieId}}),
               models.User.findById(userId)
           ])
        }).then(([modifiedObj,user]) => {
            res.send(user.favoriteMovies)
        }).catch(next)

    },
    removeFromFavorites: (req, res, next) => {
        const {userId,movieId} = req.body
        findOrCreateUser(userId)
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