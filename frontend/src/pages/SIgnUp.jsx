import React, { useState } from "react";
import loginIcon from "../assets/signin.gif";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("data login", data);

  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto rounded">
          <div className="w-20 h-20 mx-auto ">
            <img src={loginIcon} alt="login icon" className="rounded-full " />
          </div>

          <form className="" onSubmit={handleSubmit}>
            <div className="my-2">
              <label>Email: </label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2 rounded flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <Link
              to={"/forgot-password"}
              className="block w-fit ml-auto hover:underline hover:text-red-500"
            >
              Forgot password ?
            </Link>

            <button className="bg-red-600 text-white px-6 py-2 mt-5 w-full max-w-[150px] mx-auto block rounded-full hover:scale-110 hover:bg-red-700 transition-all ">
              Login
            </button>
          </form>

          <p className="mt-3">
            Don't have account ?{" "}
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

export default SignUp;
