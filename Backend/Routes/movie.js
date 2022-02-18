const express = require("express");
const { isAuthenticated } = require("../controllers/auth");
const router = express.Router();
const {isSignedIn,isAuthenticated,isAdmin} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createMovie } = require("../Controllers/movie");

router.param("userId",getUserById);

router.post("/movie/create/:userId",isSignedIn,isAuthenticated,isAdmin,createMovie);

module.exports = router;