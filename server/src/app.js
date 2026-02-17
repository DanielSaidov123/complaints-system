import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.get("/", async (req, res) => {
  res.json({
    message: "Welcome to MongoDB Todo List API",
    version: "1.0.0",
  });
});

app.listen(PORT, async () => {
 await connectDB();
  console.log(`Server is running on port ${PORT}...`);
});
