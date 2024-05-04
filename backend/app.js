const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const conn = mongoose.connection;

// Routers
const authRouter = require("./routes/authRoute");
const testRouter = require("./routes/testRoute");
const profileRouter = require("./routes/profileRoute");
const testDetailsRouter = require("./routes/testDetailsRoute");
const userRouter = require("./routes/userRoute");


// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/test", testRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/test-details", testDetailsRouter);
app.use("/api/v1/user", userRouter);

module.exports = { app, conn };
