
const Actor = require("../models/actor");
const Movies = require("../models/movie");
const cloudinary = require('cloudinary').v2;
var ObjectId = require('mongodb').ObjectId;
exports.createActor = async(req,res)=>{
    let file = req.files.photo.tempFilePath;

    result = await cloudinary.uploader.upload(file,{
        folder:"Actors"
    })
    
    const actor = new Actor();
    actor.name = req.body.name;
    actor.photo_location = result.secure_url;

    actor.save((err,actor)=>{
        if(err){
            console.log(err);
            return res.status(400).json({
                "error":"failed to save actor in database"
            })
        }
        res.json(actor);
    });
    
}

exports.getActorById = (req,res,next,id)=>{
    Actor.findById(id).exec((err,actor)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"No actor found"
            })
        }
       req.actor = actor;
       next();
    })
}

exports.getActors = (req,res)=>{
    Actor.find().exec((err,actors)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"no actors found in database"
            })
        }
        return res.json(actors);
    })
}
exports.getActorMovies = (req,res)=>{
    const actorId = req.actor._id;
    const ObjectID = new ObjectId(actorId);

    console.log(ObjectID);
    Movies.find({
        "actor":ObjectID
    }).exec((err,movies)=>{
        console.log(movies);
        if(movies==null|| err)
        {
            return res.status(400).json({
                "error":"no movies found for this actor"
            })
        }
        
        return res.json(movies);
    })
}