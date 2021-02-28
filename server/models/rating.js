const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { Number, ObjectId } = Schema.Types;
const Joi = require('joi')


const ratingSchema = ({ 
    movieId:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true
    },
    author:{
        type:ObjectId,
        ref:'Users'
    }
})


// ratingSchema.methods = {
//     joiValidate: (obj) => {
//         const schema = {
//             movieId: Joi.types.String().require(),
//             rating: Joi.types.Number().required(),
//         }
//         return Joi.validate(obj,schema)
//     }
// }

module.exports = new Model('Ratings',ratingSchema)