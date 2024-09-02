import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrShieldSecurity } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { GoLaw, GoStack } from "react-icons/go";
import { MdBarChart } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa";

const Solution = ({ state, type }) => {
  const solData = [
    {
      title: "Stay Compliant",
      img: <GrShieldSecurity />,
      nav: "/",
    },
    {
      title: "Hire Employee",
      img: <FaRegFileLines />,
      nav: "/",
    },
    {
      title: "Hire Contractors",
      img: <FaRegFileLines />,
      nav: "/",
    },
  ];
  const solData2 = [
    {
      title: "Finance Teams",
      img: <RiBarChartGroupedFill />,
      nav: "/",
    },
    {
      title: "HR Teams",
      img: <IoIosPeople />,
      nav: "/",
    },
    {
      title: "Legal Teams",
      img: <GoLaw />,
      nav: "/",
    },
  ];

  const aboutData = [
    {
      title: "About Us",
      img: <GoStack />,
      nav: "/about-us",
      p: "Know all about us",
    },
    {
      title: "Case Studies",
      img: <MdBarChart />,
      nav: "/case",
      p: "About our customers",
    },
    {
      title: "Country Coverage",
      img: <MdBarChart />,
      nav: "/",
      p: "Hiring in 30+ Countries",
    },
  ];

  const resourceData = [
    {
      title: "Global Hiring Guides",
      img: <RiGlobalFill />,
      p: "Free in depth hirings for you",
      nav: "/",
    },
    {
      title: "Blogs",
      img: <FaRegFileImage />,
      p: "Stay up to date with HR news and blogs",
      nav: "/",
    },
    {
      title: "HR Terms",
      img: <GrShieldSecurity />,
      p: "Your HR Terminology handbook",
      nav: "/",
    },
  ];

  const [showData, setShowData] = useState([]);
  const [showDataCol2, setShowDataCol2] = useState([]);
  const [showCol2, setShowCol2] = useState(false);
  const [colTitle, setColTitle] = useState("");
  const [showP, setShowP] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (type === "solution") {
      setShowData(solData);
      setShowCol2(true);
      setColTitle("Solution");
      setShowDataCol2(solData2);
    } else if (type === "about") {
      setShowData(aboutData);
      setShowCol2(false);
      setColTitle("Why Placement Plaza");
      setShowP(true);
    } else {
      setShowData(resourceData);
      setShowCol2(false);
      setColTitle("Tools and Resource Center");
      setShowP(true);
    }
  }, [type]);

  const navigate = useNavigate();

  return (
    <div
      className={`absolute top-12 left-0 z-50 p-2 flex justify-center items-center gap-4 bg-white border border-gray-200 shadow-md ${
        !state || isClicked ? "hidden" : ""
      }`}
    >
      <div className="w-72 p-2 flex flex-col justify-center items-start gap-2">
        <h5 className="text-sm text-gray-500">{colTitle}</h5>
        {showData.map((val, i) => (
          <div key={i} className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-10 bg-blue-200 flex items-center justify-center rounded-md">
                {val.img}
              </div>
              <h3
                className="text-sm font-medium text-blue-900 cursor-pointer hover:text-blue-300"
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
            {showP && (
              <p className="text-xs font-medium text-black ml-10 mt-[-12px]">
                {val.p}
              </p>
            )}
          </div>
        ))}
      </div>
      {showCol2 && (
        <div className="w-72 p-2 flex flex-col justify-center items-start gap-2">
          <h5 className="text-sm text-gray-500">By Role</h5>
          {showDataCol2.map((val, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-10 bg-blue-200 flex items-center justify-center rounded-md">
                {val.img}
              </div>
              <h3
                className="text-sm font-medium text-blue-900 cursor-pointer hover:text-blue-300"
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Solution;
