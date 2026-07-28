const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const userRouter = require("./routes/user");

app.use("/", userRouter);

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

