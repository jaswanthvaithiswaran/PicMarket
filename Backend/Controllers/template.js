const Template = require("../models/template");


exports.createTemplate = (req,res)=>{
    template = new Template();
    template.movie = req.body.movie;
    template.keywords = req.body.keywords;
    template.photo_location = "F://Memes//Actor//"+req.file.originalname;
    template.save((err,template)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"failed to save template in database",
                "message":err
            })
        }
        return res.json(template);
    })

}