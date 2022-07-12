const Template = require("../models/template");
const cloudinary = require("cloudinary").v2;

exports.createTemplate = async (req,res)=>{
    template = new Template();
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

exports.dailyUpload = (req,res)=>{
    
    Template.find({}).sort({"updatedAt":1}).limit(100).exec((err,templates)=>{
       
        if(err)
        {
            return res.status(400).json({
                "error":"no templates found"
            })
        }
        return res.json(templates);
    });

}