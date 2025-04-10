import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrShieldSecurity } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { GoLaw, GoStack } from "react-icons/go";
import { MdBarChart } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa";

const Solution = ({ state, colTitle, showData, showP }) => {
  const solData = [
    {
      title: "Payroll Processing",
      img: <GrShieldSecurity />,
      nav: "/",
    },
    {
      title: "Tax Management",
      img: <FaRegFileLines />,
      nav: "/",
    },
    {
      title: "Benefits Administration",
      img: <FaRegFileLines />,
      nav: "/",
    },
  ];
  const solData2 = [
    {
      title: "Small Business",
      img: <RiBarChartGroupedFill />,
      nav: "/",
    },
    {
      title: "Mid-Market",
      img: <IoIosPeople />,
      nav: "/",
    },
    {
      title: "Enterprise",
      img: <GoLaw />,
      nav: "/",
    },
  ];

  const aboutData = [
    {
      title: "About Us",
      img: <GoStack />,
      nav: "/about-us",
      p: "Leading payroll solutions provider",
    },
    {
      title: "Success Stories",
      img: <MdBarChart />,
      nav: "/case",
      p: "See how we transform payroll management",
    },
    {
      title: "Global Coverage",
      img: <RiGlobalFill />,
      nav: "/",
      p: "Payroll solutions in 30+ countries",
    },
  ];

  const resourceData = [
    {
      title: "Payroll Guides",
      img: <RiGlobalFill />,
      p: "Comprehensive payroll management guides",
      nav: "/",
    },
    {
      title: "Tax Resources",
      img: <GrShieldSecurity />,
      p: "Stay compliant with tax regulations",
      nav: "/",
    },
    {
      title: "Payroll Calculator",
      img: <MdBarChart />,
      p: "Free payroll calculation tools",
      nav: "/",
    },
  ];

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`absolute top-12 left-0 z-50 p-4 flex justify-center items-center gap-4 bg-white border border-gray-200 shadow-md rounded-lg ${
        !state || isClicked ? "hidden" : ""
      }`}
    >
      <div className="w-72 p-2 flex flex-col justify-center items-start gap-2">
        <h5 className="text-sm text-gray-500 font-medium mb-2">{colTitle}</h5>
        {showData.map((val, i) => (
          <div key={i} className="flex flex-col items-start gap-2 w-full mb-2">
            <div className="flex items-center gap-2 w-full">
              <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-md">
                {val.img}
              </div>
              <h3
                className="text-sm font-medium text-gray-800 cursor-pointer hover:text-blue-600 transition-all duration-300"
                onClick={() => {
                  if (val.nav) {
                    navigate(val.nav);
                    setIsClicked(true);
                  }
                  setTimeout(() => setIsClicked(false), 2000);
                }}
              >
                {val.title}
              </h3>
            </div>
            {showP && val.p && (
              <p className="text-xs text-gray-500 ml-10 mt-[-4px]">
                {val.p}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
