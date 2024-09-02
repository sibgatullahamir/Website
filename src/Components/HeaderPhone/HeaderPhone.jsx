import React, { useState } from "react";
import "./HeaderPhone.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const HeaderPhone = () => {
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);
  const [height, setHeight] = useState(false);
  const [height2, setHeight2] = useState(false);
  const [height3, setHeight3] = useState(false);

  const navigate = useNavigate();

  const solData = [
    "Stay Compliant",
    "Hire Employee",
    "Hire Contractors",
    "Finance Teams",
    "HR Teamss",
    "Legal Teams",
  ];

  return (
    <div className="header-ph" id="hp-main">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          setShowHiddenMenu(false);
        }}
      >
        <img src="/logo.png" alt="" />
      </div>
      <div className="right">
        <h5 onClick={() => navigate("/contact-us")}>Book a Demo</h5>
        <div
          className="hamMenu"
          style={showHiddenMenu ? { background: "#003e71" } : {}}
          onClick={() => setShowHiddenMenu(!showHiddenMenu)}
        >
          <div
            className="line"
            style={showHiddenMenu ? { background: "white" } : {}}
          ></div>
          <div
            className="line"
            style={showHiddenMenu ? { background: "white" } : {}}
          ></div>
          <div
            className="line"
            style={showHiddenMenu ? { background: "white" } : {}}
          ></div>
        </div>
      </div>

      {/* hidden menu */}
      <div
        className="hidden-menu"
        style={
          showHiddenMenu ? { height: "calc(100vh - 80px)" } : { height: "0" }
        }
      >
        <li>
          <div className="text">
            Solutions{" "}
            <span onClick={() => setHeight(!height)}>
              <RiArrowDropDownLine />
            </span>{" "}
          </div>
          <ul style={height ? { height: "15rem" } : { height: "0" }}>
            <h5>Solution By Role</h5>
            {solData.map((val, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    navigate("/");
                    setShowHiddenMenu(false);
                    setHeight(false);
                  }}
                >
                  {val}
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <div className="text">
            Why Placement Plaza{" "}
            <span onClick={() => setHeight2(!height2)}>
              <RiArrowDropDownLine />
            </span>{" "}
          </div>
          <ul style={height2 ? { height: "11rem" } : { height: "0" }}>
            <h5 style={{ marginTop: "0" }}>Solution By Role</h5>
            <li
              onClick={() => {
                navigate("/about-us");
                setShowHiddenMenu(false);
                setHeight2(false);
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/case");
                setShowHiddenMenu(false);
                setHeight2(false);
              }}
            >
              Case Studies
            </li>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight2(false);
              }}
            >
              Country Coverage
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <div className="text">Pricing </div>
        </li>
        <li>
          <div className="text">
            Resources{" "}
            <span onClick={() => setHeight3(!height3)}>
              <RiArrowDropDownLine />
            </span>{" "}
          </div>
          <ul style={height3 ? { height: "11rem" } : { height: "0" }}>
            <h5 style={{ marginTop: "0" }}>Resoruces and Tools</h5>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight3(false);
              }}
            >
              Global Hiring Guides
            </li>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight3(false);
              }}
            >
              Blog
            </li>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight3(false);
              }}
            >
              HR Terms Glossary
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default HeaderPhone;
