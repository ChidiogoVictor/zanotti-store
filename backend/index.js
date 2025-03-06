import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); // Load environment variables

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing

const PORT = process.env.PORT || 8000; // Set server port


connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
