const mongoose = require("mongoose");


const comedianSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true})

module.exports = mongoose.model("Comedian",comedianSchema);