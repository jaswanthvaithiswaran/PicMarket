require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

//port
const port = process.env.PORT;

//connection with port
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});
