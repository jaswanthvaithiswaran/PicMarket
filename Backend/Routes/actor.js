const express = require("express");
const router = express.Router();
const {isAdmin,isAuthenticated,isSignedIn} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createActor,getActors,getActorById} = require("../Controllers/actor");




router.param("userId",getUserById);
router.param("actorId",getActorById);
router.post("/actor/create/:userId",isSignedIn,isAuthenticated,isAdmin,createActor);
router.get("/actors",getActors);
module.exports = router;