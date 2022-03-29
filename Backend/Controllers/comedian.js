const Comedian = require("../models/comedian");


exports.createComedian = (req,res)=>{
    
    console.log(req.body);
    console.log(req.files);

    return res.send(req.body);
    
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