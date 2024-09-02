import React, { useEffect, useState } from "react";
import fetchCountryCodesAndFlags from "../action/countryCode";
import "./CustomSelect.scss";
const CustomSelect = ({ bg, setCode }) => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCountryCodesAndFlags();
      setCountries(data);
      setSelectedCountry(data[0]);
    };
    getData();
  }, []);
  return (
    <div
      className="custom-select"
      onClick={() => setDropdownOpen(!dropdownOpen)}
      style={bg != undefined ? { background: bg } : {}}
    >
      <div className="selected-country">
        <span>{selectedCountry.code}</span>
        <img src={selectedCountry.flag} alt="" />
      </div>

      {/* custom options */}
      <div
        className="custom-options"
        style={dropdownOpen === false ? { display: "none" } : {}}
      >
        {countries?.map((country, index) => {
          return (
            <div
              className="option"
              key={index}
              onClick={() => {
                setSelectedCountry(country);
                setCode(country.code);
              }}
            >
              <span>{country.code}</span>
              <span>{country.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelect;
