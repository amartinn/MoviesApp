const movie = require('./movie')
const comment = require('./comment')
const rating = require('./rating')
const user = require('./user')
const controllers = {
    movie,
    comment,
    rating,
    user
}
module.exports = controllers