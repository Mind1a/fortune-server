import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    // Name
    name: {
      type: String,
      default: "Guest",
      trim: true,
    },
    // Email      MINDIAARABULI@gmail.com
    //            mindiaarabuli@gmail.com
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    // Subject
    subject: {
      type: String,
      default: "contact",
      trim: true,
    },
    // Message
    message: {
      type: String,
      required: true,
      trim: true,
    },
    // isRead
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);
