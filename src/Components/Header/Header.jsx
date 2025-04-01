import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Solution from "./Solution";

const Header = () => {
  // Getting the login state

  const navigate = useNavigate();
  const [isSolnHover, setIsSolnHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isResourceHover, setIsResourceHover] = useState(false);

  return (
    <div
      className="w-full bg-white flex justify-center items-center 2xl:pt-4"
      id="h-main"
    >
      <div className="w-[89%] max-w-[1366px] h-[100px] px-12 flex justify-between items-center">
        <div
          className="flex-[0.5] -mr-12 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="./logo.jpeg" alt="Logo" className="w-20" />
        </div>

        <ul className="flex-[1.5] xl:flex-[1.5] 2xl:flex-[2] flex justify-between items-center">
          <li
            onMouseEnter={() => setIsSolnHover(true)}
            onMouseLeave={() => setIsSolnHover(false)}
            className="list-none text-[#003e71] font-medium cursor-pointer p-2.5 transition-all duration-500 flex justify-center items-center relative hover:bg-[#cae4ff] hover:rounded-lg"
          >
            Solutions
            <span className="w-4 h-4 bg-[#cae4ff] flex justify-center items-center rounded-full ml-1">
              <img src="/down-arrow.png" alt="Arrow" className="mt-1 w-3" />
            </span>
            <Solution state={isSolnHover} type="solution" />
          </li>
          <li
            onMouseEnter={() => setIsAboutHover(true)}
            onMouseLeave={() => setIsAboutHover(false)}
            className="list-none text-[#003e71] font-medium cursor-pointer p-2.5 transition-all duration-500 flex justify-center items-center relative hover:bg-[#cae4ff] hover:rounded-lg"
          >
            Why Placement Plaza?
            <span className="w-4 h-4 bg-[#cae4ff] flex justify-center items-center rounded-full ml-1">
              <img src="/down-arrow.png" alt="Arrow" className="mt-1 w-3" />
            </span>
            <Solution state={isAboutHover} type="about" />
          </li>
          <li
            onMouseEnter={() => setIsResourceHover(true)}
            onMouseLeave={() => setIsResourceHover(false)}
            className="list-none text-[#003e71] font-medium cursor-pointer p-2.5 transition-all duration-500 flex justify-center items-center relative hover:bg-[#cae4ff] hover:rounded-lg"
          >
            Resources
            <span className="w-4 h-4 bg-[#cae4ff] flex justify-center items-center rounded-full ml-1">
              <img src="/down-arrow.png" alt="Arrow" className="mt-1 w-3" />
            </span>
            <Solution state={isResourceHover} type="resource" />
          </li>

          {/* start edited */}
          <li
            onClick={() => navigate("/blogmain")}
            className="list-none text-[#003e71] font-medium cursor-pointer p-2.5 transition-all duration-500"
          >
            {"Blogs"}
          </li>
          {/* end edited */}

          <li
            onClick={() => navigate("/pricing")}
            className="list-none text-[#003e71] font-medium cursor-pointer p-2.5 transition-all duration-500"
          >
            {"Pricing"}
          </li>
        </ul>

        <div className="flex-1 flex justify-end items-center gap-2.5">
          <button className="p-2.5 border border-gray-400 bg-white text-[16px] text-[#003e71] font-semibold cursor-pointer rounded-lg transition-all duration-500 hover:bg-[#003e71] hover:text-white">
            {"TeamTreak"}
          </button>
          <button
            className="p-2.5 border border-gray-400 bg-[#003e71] text-[16px] text-white font-medium cursor-pointer rounded-lg transition-all duration-500 hover:bg-blue-100 hover:text-[#003e71]"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
