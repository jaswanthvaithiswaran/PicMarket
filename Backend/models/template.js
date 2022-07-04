const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const templateSchema = new mongoose.Schema({
    photo_location:{
        type:String,
        required:true
    },
    movie:{
        type:ObjectId,
        ref:"Movie",
        required:true
    },
    keywords:{
        type:Array,
        default:[]
    }
},{timestamps:true});

module.exports = mongoose.model("Template",templateSchema);