import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error while fetching feedback" });
  }
});

router.post("/create", async (req, res) => {
  //  client-ის მიერ გამოგზავნილი ინფორმაცია შევინახეთ ცვლადებში
  const { name, email, message, rating } = req.body;

  // თუ client-მა არ ჩაწერა Message-ს, დავუბრუნოთ პასუხი : "Message is required"
  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }

  //   რასაც დაამტებ  =  ჩვენს თაროზე დაამატე ახალი ელემენტი
  const feedback = await Feedback.create({
    name,
    email,
    message,
    rating,
  });

  // კლიენტს გააგებინე რომ წარმატებით დაემატა ელემენტი, ხოლო ეს ელემენტი არის: feedback
  res.status(201).json(feedback);
});

export default router;
