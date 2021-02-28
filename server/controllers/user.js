const models = require('../models')

module.exports = async (userId) => {
    const exists = await models.User.findById(userId)

    if(!exists){
        return  models.User.create({_id:userId})
    }
    return models.User.findById(userId)
}