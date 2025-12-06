import express from "express";

const fortuneRoutes = express.Router();

// facebook.com/api/fortune/all
fortuneRoutes.get("/all", (req, res) => {
  res.send("All Information");
});

// facebook.com/api/fortune/all
fortuneRoutes.get("/templates", (req, res) => {
  res.send("Fortune infomration");
});

export default fortuneRoutes;
