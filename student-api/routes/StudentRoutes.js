const express= require("express");
const router = express.Router();
const Student = require("../model/model");

router.post("/students",async(req,res)=>{
     try{
     const body=req.body;
     const students= await Student.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        age:body.age,
      });
     return res.status(201).json({
        msg:"student created succesfully"
     });
}
    catch(err){
       res.status(500).json({
         msg:err.message,
      });
   }
 });

router.get("/students",async(req,res)=>{
    try{
        const student=await Student.find({});
        return res.status(200).json(student);
    }catch(err){
         return res.status(500).json({
          msg:err.message
        });
    }
});

router.get("/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const student=await Student.findById(id);
        return res.status(200).json(student);
    }catch(err){
         return res.status(500).json({
          msg:err.message
        });
    }
});

router.patch("/students/:id",async(req,res)=>{
      try{
         const id=req.params.id;
         const body=req.body;
         const student= await Student.findByIdAndUpdate(id,body);
         return res.status(200).json(student);
     }
     catch(err){
         return res.status(500).json({
            msg:err.message
        });
    }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndDelete(id);
    res.status(200).json({
      message: "Student deleted successfully",
      student
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports=router;

