const express = require("express");
const router = express.Router();
const {isSignedIn,isAuthenticated,isAdmin} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createMovie,getMovies,getMovieById,getMovieTemplates } = require("../Controllers/movie");






router.param("userId",getUserById);
router.param("movieId",getMovieById);

router.post("/movie/create/:userId",isSignedIn,isAuthenticated,isAdmin,createMovie);
router.get("/movies",getMovies);
router.get("/movie/templates/:movieId",getMovieTemplates);
module.exports = router;