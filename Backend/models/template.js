const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const templateSchema = new mongoose.Schema({
    photo:{
        data:Buffer,
        contentType:String
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
})

module.exports = mongoose.model("Template",templateSchema);