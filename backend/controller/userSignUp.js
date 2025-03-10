import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

const userSignUpController = async (req, res) => {
  try {
    const { email, password, name } = req.body;


    // Validate required fields
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Please provide all required fields (email, password, name).",
        error: true,
        success: false,
      });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email already exists.",
        error: true,
        success: false,
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the user
    const newUser = new userModel({ email, password: hashedPassword, name });
    const savedUser = await newUser.save();

    res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: "User created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

export default userSignUpController;
