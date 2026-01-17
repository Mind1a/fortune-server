import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!email || !message) {
      res.status(400).json({ message: "Email and Message are required" });
    }

    const contact = await Contact.create({
      name,
      email, // email:email
      subject,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error("error creating contact", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("error fetching contacts", error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Contact not found with this ID" });
    }

    res.status(200).json({ message: "Cotanct message was deleted" });
  } catch (error) {
    console.error("Error deleting contacts: ", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
