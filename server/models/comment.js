const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;
const Joi = require('joi')


const commentSchema = ({ 
    movieId:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:ObjectId,
        ref:'Users'
    }
})


// commentSchema.methods = {
//     joiValidate: (obj) => {
//         const schema = {
//             movieId: Joi.types.String().require(),
//             body: Joi.types.String().required(),
//         }
//         return Joi.validate(obj,schema)
//     }
// }

module.exports = new Model('Comments',commentSchema)