const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../Controllers/auth");
const router = express.Router();
const {createTemplate, dailyUpload} = require("../Controllers/template");
const { getUserById } = require("../Controllers/user");


router.param("userId",getUserById);

router.post("/template/create/:userId",isSignedIn,isAuthenticated,isAdmin,createTemplate);
router.get("/dailyuploads",dailyUpload);
module.exports = router;