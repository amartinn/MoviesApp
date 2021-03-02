const models = require('../models')

module.exports = {

    getAll: (req, res, next) => {
        const {userId} = req.query
        models.User.findById(userId).populate('comments')
        .then(user => {
            res.send(user.comments)
        })
        .catch(next)
    },
    update: (req, res, next) => {
        const {movieId,comment} = req.body
        models.Comment.findOne({movieId}).then(c => {
            c.body = comment
            return c.save()
        }).then(updatedComment => {
            res.send(updatedComment)
        })
        .catch(next)
    },
    create: (req,res, next) => {
        const {userId,comment,movieId} = req.body
        models.User.findOne({_id:userId})
        .then(user => {
            const newComment = new models.Comment({
                author:user._id,
                body:comment,
                movieId:movieId
            })

            return Promise.all([
                models.User.updateOne({_id:userId},{$push:{comments:newComment._id}}),
                newComment.save()
            ])
        })
        .then(([updatedUser,createdComment]) => {
            res.send(createdComment)
        })
        .catch(next)
    }
}