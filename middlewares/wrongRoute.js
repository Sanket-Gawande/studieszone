import express from "express";
export const unknownRouter = express.Router();

unknownRouter.get("/", (req, res) => {
  res.status(404).send("Unknown route");
});

unknownRouter.post("/", (req, res) => {
  res.status(404).send("Unknown route");
});
