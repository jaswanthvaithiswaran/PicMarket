const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../Controllers/auth");
const router = express.Router();
const {createTemplate, dailyUpload,getTemplateById,getTemplate} = require("../Controllers/template");
const { getUserById } = require("../Controllers/user");


router.param("userId",getUserById);
router.param("templateId",getTemplateById);
router.post("/template/create/:userId",isSignedIn,isAuthenticated,isAdmin,createTemplate);
router.get("/template/:templateId",getTemplate);
router.get("/dailyuploads",dailyUpload);
module.exports = router;