var express = require("express");
var router = express.Router();
const {check} = require("express-validator");
const {signout,signup,signin,isSignedIn } = require("../controllers/auth");


router.get("/signout",signout);

router.post("/signup",[
    check("name").isLength({min:3}).withMessage("User name minimum length should be 3 char"),
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password").isLength({min:8}).withMessage("Minimum character length is 8")
],signup);

router.post("/signin",[
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password").isLength({min:8}).withMessage("Minimum character length is 8")
],signin);


router.get("/testroutes",isSignedIn,(req,res)=>{
    res.json(req.auth);
});

module.exports = router;