const express = require("express");
const router = express.Router();
const {isSignedIn,isAuthenticated,isAdmin} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createMovie,getMovies,getMovieById } = require("../Controllers/movie");
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"F://Memes//Movie");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:fileStorageEngine})

router.param("userId",getUserById);
router.param("movieId",getMovieById);

router.post("/movie/create/:userId",isSignedIn,isAuthenticated,isAdmin,upload.single('photo'),createMovie);
router.get("/movies",getMovies);
module.exports = router;