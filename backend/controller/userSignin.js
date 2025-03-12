import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    console.log("checkPassword", checkPassword);

    if (checkPassword) {
    } else {
      throw new Error("Please check password");
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

export default userSignInController;
