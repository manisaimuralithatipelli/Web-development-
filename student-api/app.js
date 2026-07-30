
 require("dotenv").config()

 const express=require("express");

 const mongoose=require("mongoose");

 const app=express();

 const studentRoutes = require("./routes/studentRoutes");

 app.use(express.json());

 mongoose
 .connect(process.env.MONGO_URI)
 .then(()=> console.log("connected to Db"))
 .catch((err)=> console.log(err)); 

  app.use("/",studentRoutes);

  app.listen(process.env.PORT || 8003,()=>{
    console.log("server running");
  });
