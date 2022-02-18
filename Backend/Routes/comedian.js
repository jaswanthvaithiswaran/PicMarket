const express = require("express");
const router = express.Router();
const {isAdmin,isAuthenticated,isSignedIn} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const {createComedian,getComedians,getComedianById} = require("../Controllers/comedian");
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"F://Memes//Comedian");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:fileStorageEngine})
router.param("userId",getUserById);
router.param("actorId",getComedianById);
router.post("/comedian/create/:userId",isSignedIn,isAuthenticated,isAdmin,upload.single('photo'),createComedian);
router.get("/comedians",getComedians);
module.exports = router;