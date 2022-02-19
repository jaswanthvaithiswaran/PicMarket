const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../Controllers/auth");
const router = express.Router();
const {createTemplate} = require("../Controllers/template");
const multer = require("multer");
const { getUserById } = require("../Controllers/user");

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"F://Memes//Templates");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:fileStorageEngine})
router.param("userId",getUserById);

router.post("/template/create/:userId",isSignedIn,isAuthenticated,isAdmin,upload.single('photo'),createTemplate);

module.exports = router;