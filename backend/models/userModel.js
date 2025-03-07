import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    profilePic: String,
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model named "user" based on userSchema
// The model represents the "users" collection in MongoDB (Mongoose auto-pluralizes)
const userModel = mongoose.model("user", userSchema);

export default userModel;
