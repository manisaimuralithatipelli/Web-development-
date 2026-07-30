const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
     first_name:{
          type:String,
          required:true,
        },
     last_name:{
          type:String,
          required:true,
        },
    email:{
         type:String,
         required:true,
         unique:true,
    },
   gender:{
        type:String,
        required:true,
   },
   age:{
       type:Number,
       required:true,
       min:1,
   },
});

const Student=mongoose.model("Student",studentSchema);

module.exports=Student;

