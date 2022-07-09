const Movie = require("../models/movie");
const cloudinary = require('cloudinary').v2;
const ObjectId = require('mongodb').ObjectId;
const Templates = require("../models/template");
exports.createMovie = async (req,res)=>{
    let file = req.files.photo.tempFilePath;

    result = await cloudinary.uploader.upload(file,
        {folder:"movies"})
    movie = new Movie();
    movie.name = req.body.name;
    movie.actor = req.body.actor;
    movie.comedian = req.body.comedian;
    movie.photo_location = result.secure_url;

    movie.save((err,movie)=>{
        if(err){
            console.log(err);
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
        req.movie = movie;
        next();
    })
}

exports.getMovies = (req,res)=>{
    Movie.find({}).sort({"name":1}).exec((err,movies)=>{
        if(err)
        {
            return res.status(400).json({
                "error":"No movies found in database"
            })
        }
        return res.json(movies);
    })
}

exports.getMovieTemplates = (req,res)=>{
        const MovieId = req.movie._id;
        const ObjectID = new ObjectId(MovieId);
        Templates.find({movie:ObjectID}).exec((err,templates)=>{
            if(err){
                return res.status(400).json({
                    "error":":No templates found in database"
                })
            }
            return res.json(templates);
        })
}