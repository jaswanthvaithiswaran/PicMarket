const express = require("express");
const router = express.Router();
const {isAdmin,isAuthenticated,isSignedIn} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createActor,getActors,getActorById} = require("../Controllers/actor");
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"F://Memes//Actor");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:fileStorageEngine})
router.param("userId",getUserById);
router.param("actorId",getActorById);
router.post("/actor/create/:userId",isSignedIn,isAuthenticated,isAdmin,upload.single('photo'),createActor);
router.get("/actors",getActors);
module.exports = router;