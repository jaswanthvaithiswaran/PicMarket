const mongoose = require("mongoose");


const comedianSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    photo:{
       type:String,
       required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Comedian",comedianSchema);