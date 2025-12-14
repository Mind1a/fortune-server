import mongoose from "mongoose";

const feedbackShema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Guest",
    },
    email: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      required: true,
    },
    raiting: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

// feedbacks

//Teleponi
// teleponebi
export default mongoose.model("Feedback", feedbackShema);
