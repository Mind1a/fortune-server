import express from "express";

const fortuneRoutes = express.Router();

fortuneRoutes.get("/all", (req, res) => {
  res.send("All Information");
});

fortuneRoutes.get("/templates", (req, res) => {
  res.send("Fortune infomration");
});

export default fortuneRoutes;
