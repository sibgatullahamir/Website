import React, { useState, useEffect } from "react";
import "./CustomOption.scss";
const CustomOption = ({ data, placeholder, id }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredRoles, setFilteredRoles] = useState(data);
  const [inVal, setInVal] = useState("");

  //   setting value of li into input
  const handleLiClick = (i) => {
    setInVal(document.getElementById(`custom-${id}-${i}`).innerHTML);
    setShowDropDown(false);
  };
  //   search functionalities of input tag
  useEffect(() => {
    const results = data.filter((role) =>
      role.toLowerCase().includes(inVal.toLowerCase())
    );
    setFilteredRoles(results.length > 0 ? results : ["Other"]);
  }, [inVal]);
  const handleInputChange = (e) => {
    setInVal(e.target.value);
  };

  return (
    <div className="custom-option">
      <div className="wrapper">
        <input
          placeholder={placeholder}
          onClick={() => setShowDropDown(!showDropDown)}
          value={inVal}
          onChange={handleInputChange}
        />
        <div
          className="custom-dropDown"
          style={showDropDown ? {} : { display: "none" }}
        >
          {filteredRoles.map((val, i) => {
            return (
              <li
                key={i}
                id={`custom-${id}-${i}`}
                onClick={() => handleLiClick(i)}
              >
                {val}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomOption;
