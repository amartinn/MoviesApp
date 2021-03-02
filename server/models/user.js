const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId, Number } = Schema.Types;

const userSchema = new Schema({
    favoriteMovies: [Number],
    comments:[{type: ObjectId,ref:'Comments'}],
    ratings: [{type: ObjectId,ref:'Ratings'}]
})
module.exports = new Model('Users',userSchema)