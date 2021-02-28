const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;
const Joi = require('joi')

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true
    },
    favoriteMovies: [String],
    comments:[{type: ObjectId,ref:'Comments'}],
    ratings: [{type: ObjectId,ref:'Ratings'}]
})

// userSchema.methods = {
//     joiValidate: (obj) => {
//         const schema = {
//             userId: Joi.types.String().require(),
//         }
//         return Joi.validate(obj,schema)
//     }
// }

module.exports = new Model('Users',userSchema)