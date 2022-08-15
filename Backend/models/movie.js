const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    photo_location:{
        type:String,
        required:true
    },
    _actorId:{
        type:ObjectId,
        ref:"Actor",
        
    },
    _comedianId:[ObjectId]
},{timestamps:true})

module.exports = mongoose.model("Movie",movieSchema);