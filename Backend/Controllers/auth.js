
const User = require("../models/user");
const {validationResult} = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');



exports.signup = (req,res)=>{

    //form validation
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }

    //User object from models populate with post request
    const user = new User(req.body);

    //Saving user to DB
    user.save((err,user)=>{
        if(err)
        {
            console.log(err);
            return res.status(400).json({
                err:"NOT able to save user in Database"
            })
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        });
    });

}

exports.signin = (req,res)=>{

    //form validation
    const errors = validationResult(req);
    //getting response from post request
    const {email,password}= req.body;
    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }

    
    

    User.findOne({email},(err,user)=>{
            
        //user exist or not validation
        if(err)
        {
            return res.status(400).json({
                error:"error in retriving from db"
            })
        }
        else if(!user)
        {
            return res.status(400).json({
                error:"User does not exist"
            })
        }
        //password match authentication 
        else if(!user.authenticate(password)){
            return res.status(401).json({
                error:"Invalid email id or password"
            })
        }
        //console.log("TOKEN CREATION");
        //token creation
        const token = jwt.sign({_id:user._id},process.env.SECRET)
        
        //put token in cookie
        res.cookie("token",token,{expire: new Date()+9999});
       // req.profile = user;
        //sending response to frontend
        const {_id,name,email,role} = user;
        return res.json({
            token,user:{_id,name,email,role}
        });


    });


   
}

exports.signout = (req,res)=>{
    res.clearCookie("token");
    res.json({
        message:"User signout successfull"
    })
}


//protected routes

exports.isSignedIn = expressJwt({
    secret : process.env.SECRET,
    algorithms:['HS256'],
    userProperty:"auth",
});

//custom middleware

exports.isAuthenticated = (req,res,next)=>{
    let checker = req.profile && req.auth && (req.profile._id == req.auth._id);
    if(!checker)
    {
        
        return res.status(403).json({
            error:"Access denied"
        })
    }
    //console.log("Authenticated");
    next();
}

exports.isAdmin = (req,res,next)=>{
    if(req.profile.role === 0)
    {
        return res.status(403).json({
            error:"You are not admin,Access denied"
        })
    }
   // console.log("welcome admin");
    next();
}

