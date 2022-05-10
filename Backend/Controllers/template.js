const Template = require("../models/template");
const cloudinary = require("cloudinary").v2;

exports.createTemplate = async (req,res)=>{
    template = new Template();
    console.log(req.body.movie);
    let file = req.files.photo.tempFilePath;
    result = await cloudinary.uploader.upload(file,{folder:"templates"});
    template.movie = req.body.movie;
    template.photo_location = result.secure_url;
    template.save((err,template)=>{
        if(err){
            console.log(err);
            return res.status(400).json({
                "error":"failed to save template"
            })
        }
        res.json(template);
    })

   
}