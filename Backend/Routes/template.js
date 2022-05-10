const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../Controllers/auth");
const router = express.Router();
const {createTemplate} = require("../Controllers/template");
const { getUserById } = require("../Controllers/user");


router.param("userId",getUserById);

router.post("/template/create/:userId",isSignedIn,isAuthenticated,isAdmin,createTemplate);

module.exports = router;