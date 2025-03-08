import express from "express";
import userSignUpController from "../controller/userSignUp.js";

const router = express.Router(); // Create an instance of an Express Router

// Define the POST route for user signup
// When a user sends a POST request to "/signup", it will be handled by userSignUpController
router.post("/signup", userSignUpController);

export default router;
