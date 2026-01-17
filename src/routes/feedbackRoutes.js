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
  //  client-ის მიერ გამოგზავნილი ინფორმაცია შევინახეთ ცვლადებში'

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

router.get("/create", (req, res) => {
  res.send("This is feedback creation endpoint");
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Feedback not found with this ID" });
    }

    res.status(200).json({ message: "Feedback message was deleted" });
  } catch (error) {
    console.error("Error deleting Feedback: ", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
