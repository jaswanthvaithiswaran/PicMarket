require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");



//importing routes

const authRoutes = require("./Routes/auth");
const userRoutes = require("./Routes/user");
const actorRoutes = require("./Routes/actor");
const comedianRoutes = require("./Routes/comedian");
//DB connection
mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>{
        console.log("DB CONNECTED");
    }).catch(()=>{
        console.log("DB Connection failed!!");
    }
    );

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",actorRoutes);
app.use("/api",comedianRoutes);
//port
const port = process.env.PORT;

//connection with port
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});
