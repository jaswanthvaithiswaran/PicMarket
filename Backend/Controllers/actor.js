const Actor = require("../models/actor");


exports.createActor = (req,res)=>{
    actor = new Actor();
    actor.name = req.body.name;
    actor.photo_location = "F://Memes//Actor//"+req.file.originalname;
    actor.save((err,actor)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"Failed to save actor in database"
            })
        }
        return res.json(actor);
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