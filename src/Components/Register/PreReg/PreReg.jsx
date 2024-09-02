import React, { useState } from "react";
import "./PreReg.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ type, index, selectCard, setSelectCard, setSelectDomain }) => {
  // to select card ---->
  const selector = (i) => {
    setSelectCard(i);
    setSelectDomain(type.title);
  };

  return (
    <div className="outer-card">
      {/* selector */}
      <div
        className="selector"
        style={selectCard != index ? { display: "none" } : {}}
      >
        &#10004;
      </div>

      <div className="card" onClick={() => selector(index)}>
        <div className="front">
          <img
            src={type.img}
            alt=""
            style={index === 1 ? { width: "13rem" } : {}}
          />
          <button>{type.title}</button>
        </div>
        <div className="front f-back">
          <h4>{type.title}</h4>
          <div className="items">
            <li>
              &#10004; Onboard Employees or Contractors in 160+ territories
            </li>
            <li>
              &#10004; Pay a single invoice for your entire global workforce!
            </li>
            <li>
              &#10004; Track and approve Payroll changes all in one place!
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

const PreReg = () => {
  const cardData = [
    {
      title: "Business",
      img: "/Login/buisness.png",
    },
    {
      title: "Employee",
      img: "/Login/employee.png",
    },
  ];
  const navigate = useNavigate();
  const [selectCard, setSelectCard] = useState(-1);
  const [selectedDomain, setSelectDomain] = useState("");
  return (
    <div className="preReg">
      <h1>
        PLACEMENT <span style={{ color: "yellow" }}>PLAZA</span>{" "}
      </h1>
      <h3>Select your role:</h3>
      <div className="cards">
        {cardData.map((val, i) => {
          return (
            <Card
              type={val}
              key={i}
              index={i}
              selectCard={selectCard}
              setSelectCard={setSelectCard}
              selectedDomain={selectedDomain}
              setSelectDomain={setSelectDomain}
            />
          );
        })}
      </div>
      <div className="next-btn">
        <button onClick={() => navigate(`/register/${selectedDomain}`)}>
          Next
        </button>
      </div>
      <div className="text">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Sign in here</span>
      </div>
    </div>
  );
};

export default PreReg;
