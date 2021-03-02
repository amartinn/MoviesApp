const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { Number, ObjectId } = Schema.Types;

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
module.exports = new Model('Ratings',ratingSchema)