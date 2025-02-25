import React from "react";
import Logo from "./Logo";

import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Logo w={90} h={50} />
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

        <div className="flex items-center gap-4">
          <div className="text-2xl">
            <FaRegCircleUser />
            
          </div>

          <div className="text-xl">
            <span><FaCartPlus /></span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center">
              <p className="text-sm">0</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
