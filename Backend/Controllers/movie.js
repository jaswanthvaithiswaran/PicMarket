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

exports.getMovieById = (req,res,next,id)=>{
    Movie.findById(id).exec((err,movie)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"no Movie found with this id"
            })
        }
        return res.json(movie);
    })
}

exports.getMovies = (req,res)=>{
    Movie.find().exec((err,movies)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"No movies found in database"
            })
        }
        return res.json(movies);
    })
}