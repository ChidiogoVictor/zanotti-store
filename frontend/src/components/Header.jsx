import React from "react";
import Logo from "./Logo";

import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-purple-400">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search Products Here..."
            className="w-full outline-none "
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <FiSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-2xl">
            <FaRegCircleUser />
          </div>

          <div className="text-xl relative">
            <span>
              <FaCartPlus />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"}>
              <button className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
