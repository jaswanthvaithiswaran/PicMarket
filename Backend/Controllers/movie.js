const Movie = require("../models/movie");

exports.createMovie = (req,res)=>{
    movie = new Movie();
    movie.name = req.body.name;
    movie.photo_location = "F://Memes//Actor//"+req.file.originalname;
    movie.actor = req.body.actor;
    movie.comedian = req.body.comedian;

    movie.save((err,movie)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"failed to save movie in database"
            })
        }
        return res.json(movie);
    })
}