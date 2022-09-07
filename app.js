import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { coursesRouter } from "./Routes/courses.js";
import { unknownRouter } from "./middlewares/wrongRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4900;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// routes
app.use("/api/courses", coursesRouter);
app.use("api/", unknownRouter);

// connecting to DB and listening
console.log("connecting to mongoDB Atlas...");
mongoose.connect(process.env.MONG0_URI, {}, (error) => {
  if (!error) {
    console.log("Connected to mongoDB Atlas");

    app.listen(PORT, (error) => {
      if (!error) {
        console.log(`server is running on port : ${PORT}`);
      }
    });
  }
});
