const express = require("express");
const User = require("../models/user");

const router = express.Router();                                                                                                                
router.post("/users", async (req, res) => {
  const body = req.body;

  const user = await User.create({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender
  });

  return res.status(201).json({
    msg: "success"
  });
});


router.get("/users", async (req, res) => {
  const users = await User.find({});
  return res.json(users);
});


router.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      msg: "user not found"
    });
  }

  return res.json(user);
});


router.patch("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndUpdate(
    id,
    req.body
  );

  if (!user) {
    return res.status(404).json({
      msg: "user not found"
    });
  }

  return res.status(200).json({
    msg: "details updated successfully"
  });
});


router.delete("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({
      msg: "user not found"
    });                                                                             }

  return res.status(200).json({
    msg: "user deleted successfully"
  });
});


module.exports = router;