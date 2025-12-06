import express from "express";
import fortuneRoutes from "./routes/fortuneRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

// მომუშავეთა გუნდი
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// process.env.myPassword = "123456"
// ✅ MongoDB connection with try/catch
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
connectDB();

app.get("/home", (request, response) => {
  response.send("your welcome");
});

// localhost:4000
// facebook.com/api/fortune
app.use("/api/fortune", fortuneRoutes);

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server is urrning on Port: http://localhost:${PORT}`)
);
