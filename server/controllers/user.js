const models = require('../models')
module.exports  = {

    set: (req,res,next) => {
        
        models.User.create({})
        .then(user => {
            res.send(user._id)
        })
    }
}