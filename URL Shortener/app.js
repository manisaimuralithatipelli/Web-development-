require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose');
const path = require("path");
const app=express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
const router =require('./routes/route');
const URL = require('./models/url');

 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
app.use(express.static("public"));
 app.use("/url",router);

 mongoose.connect(process.env.MONGO_URI)
        .then(()=> console.log('connected to DB'))
        .catch((err)=> console.log(err));

 app.get("/",async(req, res) => {
    const urls=await  URL.find({});
    return res.render("home",{
         urls:urls
    });
 });

const PORT=process.env.PORT||7008;
 app.listen(PORT,(req,res)=> {
    console.log('server started at 7008');
});
