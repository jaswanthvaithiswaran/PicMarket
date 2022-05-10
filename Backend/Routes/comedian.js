const express = require("express");
const router = express.Router();
const {isAdmin,isAuthenticated,isSignedIn} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createComedian,getComedians,getComedianById, getComedianMovies} = require("../Controllers/comedian");





router.param("userId",getUserById);
router.param("comedianId",getComedianById);
router.post("/comedian/create/:userId",isSignedIn,isAuthenticated,isAdmin,createComedian);
router.get("/comedians",getComedians);
router.get("/comedian/movies/:comedianId",getComedianMovies);
module.exports = router;