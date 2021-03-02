const models = require('../models')

module.exports = {

    getAll: (req, res, next) => {
        const {userId} = req.query
        models.User.findById(userId).populate('ratings')
        .then(user => {
            res.send(user.ratings)
        })
        .catch(next)
    },
    update: (req, res, next) => {
        const {movieId,rating} = req.body
        models.Rating.findOne({movieId}).then(r => {
            r.rating = Number(rating)
            return r.save()
        }).then(updatedRating => {
            res.send(updatedRating)
        })
        .catch(next)
    },
    create: (req,res, next) => {
        const {userId,rating,movieId} = req.body
        models.User.findOne({_id:userId})
        .then(user => {
            console.log(user)
            const newRating = new models.Rating({
                author:user._id,
                rating:Number(rating),
                movieId:movieId
            })

            return Promise.all([
                models.User.updateOne({_id:userId},{$push:{ratings:newRating._id}}),
                newRating.save()
            ])
        })
        .then(([updatedUser,createdRating]) => {
            res.send(createdRating)
        })
        .catch(next)
    }
}