import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config(); // Load environment variables

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // ✅ FIX: Enable JSON body parsing
app.use(cookieParser());

app.use("/api", router); // Middleware to use the router for all "/api" routes

const PORT = process.env.PORT || 8000; // Set server port

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connected to DB");
    console.log(`Server is running on port ${PORT}`);
  });
});
