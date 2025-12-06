import express from "express";
import Fortune from "../models/Fortune.js";
import FortuneTemplate from "../models/FortuneTemplate.js";

const fortuneRoutes = express.Router();

// Get All Fortune
// localhost:4000/api/fortune/all
fortuneRoutes.get("/all", async (req, res) => {
  try {
    const fortunes = await Fortune.find().sort({ createdAt: -1 });
    res.status(200).json(fortunes);
  } catch (error) {
    console.error("Error Fetching fortunes");
    res.status(500).json({ message: "Server error while fetching fortunes" });
  }
});

fortuneRoutes.get("/random", async (req, res) => {
  try {
    //  is array : ["sample text","meore text"]
    const randomFortune = await FortuneTemplate.aggregate([
      { $sample: { size: 1 } },
    ]);

    res.status(200).json(randomFortune[0]);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching fortunes" });
  }
});

// localhost:4000/api/fortune/templates

fortuneRoutes.get("/templates", async (req, res) => {
  try {
    const templates = await FortuneTemplate.find().sort({ createdAt: -1 });
    res.status(200).json(templates);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching fortunes" });
  }
});

fortuneRoutes.post("/save", async (req, res) => {
  const { name, text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "You miss Text! Text is required" });
  }

  const newFortune = new Fortune({ name, text });
  const savedFortune = await newFortune.save();
});

export default fortuneRoutes;
