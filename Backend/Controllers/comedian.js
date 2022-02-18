const Comedian = require("../models/comedian");


exports.createComedian = (req,res)=>{
    comedian = new Comedian();
    comedian.name = req.body.name;
    comedian.photo_location = "F://Memes//Actor//"+req.file.originalname;
    comedian.save((err,comedian)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"Failed to save comedian in database"
            })
        }
        return res.json(comedian);
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