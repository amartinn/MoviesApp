const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

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

module.exports = new Model('Comments',commentSchema)