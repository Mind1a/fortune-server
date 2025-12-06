import express from "express";
import fortuneRoutes from "./routes/fortuneRoutes.js";

const app = express();

app.get("/home", (request, response) => {
  response.send("your welcome");
});

app.use("/api/fortune", fortuneRoutes);

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server is urrning on Port: http://localhost:${PORT}`)
);
