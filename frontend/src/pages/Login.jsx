import React, { useState } from "react";
import loginIcon from "../assets/signin.gif";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to store user input (email & password)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Handles input changes and updates state dynamically
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    try {
      // Sending login data to API
      const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data), // Converts JS object to JSON format
      });

      const dataApi = await dataResponse.json(); // Converts response to JSON

      if (dataApi.success) {
        // TODO: Handle successful login (e.g., store token, redirect user)
        toast.success(dataApi.message);
      } else {
        // TODO: Handle login failure (e.g., show error message)
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.error("Login Error:", error); // Log any unexpected errors
    }
  };

  console.log("data login", data); // Logs form data for debugging

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto rounded">
          {/* Login Icon */}
          <div className="w-20 h-20 mx-auto ">
            <img src={loginIcon} alt="login icon" className="rounded-full " />
          </div>

          {/* Login Form */}
          <form className="" onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div className="my-2">
              <label>Email: </label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            {/* Password Input Field */}
            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2 rounded flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
                {/* Toggle Password Visibility */}
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <Link
              to={"/forgot-password"}
              className="block w-fit ml-auto hover:underline hover:text-red-500"
            >
              Forgot password?
            </Link>

            {/* Login Button */}
            <button className="bg-red-600 text-white px-6 py-2 mt-5 w-full max-w-[150px] mx-auto block rounded-full hover:scale-110 hover:bg-red-700 transition-all">
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-3">
            Don't have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
