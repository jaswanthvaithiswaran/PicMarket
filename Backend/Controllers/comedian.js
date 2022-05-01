const Comedian = require("../models/comedian");

const cloudinary = require("cloudinary").v2;    //cloudinary is a node module
exports.createComedian = async (req,res)=>{
    

    let file = req.files.photo.tempFilePath;
    result = await cloudinary.uploader.upload(file,{
        folder:"Comedians"
    })
   
    const comedian = new Comedian();
    comedian.name = req.body.name;
    comedian.photo_location = result.secure_url;

    comedian.save((err,comedian)=>{
        if(err)
        {
            console.log(err);
            return res.status(400).json({
                "error":err
            })
        }
        res.json(comedian);
    });


    
}

exports.getComedianById = (req,res,next,id)=>{
    Comedian.findById(id).exec((err,comedian)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"No comedian found"
            })
        }
       req.comedian = comedian;
       next();
    })
}

exports.getComedians = (req,res)=>{
    Comedian.find().exec((err,comedians)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"no comedians found in database"
            })
        }
        return res.json(comedians);
    })
}