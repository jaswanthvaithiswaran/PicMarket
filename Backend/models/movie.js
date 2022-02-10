const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    actor:{
        type:ObjectId,
        ref:"Actor",
        
    },
    comedian:{
        type:ObjectId,
        ref:"Comedian"
    }
},{timestamps:true})

module.exports = mongoose.model("Movie",movieSchema);