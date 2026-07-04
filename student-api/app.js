const express = require("express");
const app = express();
app.use(express.json());
const students = require("./MOCK_DATA.json");

app.get("/students",(req,res)=>{
    res.json(students);
});
app.get("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const student = students.find((student) => student.id === id);
    if(!student){
    return  res.status(404).json({
       success:false,
       message:"student not found"
    });
    }

    res.status(200).json(student);
});
app.post("/students",(req,res)=>{
     const newStudent=req.body;
     students.push(newStudent);
     res.status(201).json({
       success:true,
       message:`Student added successfully`,
       "student": newStudent
     });
});

app.patch("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find((student)=> student.id=== id); 
   if(!student){
    return  res.status(404).json({
       success:false,
       message:"student not found"
    });
    }
    const updates=req.body;
    Object.assign(student, updates);
    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        student: student
    });
});

app.delete("/students/:id",(req,res)=>{
     const id=Number(req.params.id);
     const index=students.findIndex((student)=> student.id=== id);
     if(index ===-1){
      return  res.status(404).json({
        success:false,
        message:"student not found"
      });
     }
     students.splice(index, 1);
     res.status(200).json({
     success: true,
     message: "Student deleted successfully"
     });
});
app.listen(7000, () => {
    console.log("Server Running");
});
