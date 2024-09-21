import React, { useState, useEffect, useRef } from "react";
import "./Pricing.scss";
import emailjs from "@emailjs/browser";
import PopUp from "../PopUp/PopUp";
import fetchCountryCodesAndFlags from "../../action/countryCode";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../CustomComp/CustomSelect";

const Pricing = () => {
  const form = useRef();
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const [code, setCode] = useState("+91");

  // For Pop-up ------------------------------------->
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const setOpacity = () => {
    if (isLoading | isSent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Form Activation by external button --------------------->
  const handleClick = () => {
    document.getElementById("form-submit-btn").click();
  };

  // Email Js --- Connection -------------------------->

  const sendEmail = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsLoading(true);
      setOpacity();
      emailjs
        .sendForm(
          "service_vcwk9w9",
          "template_2qs43ki",
          form.current,
          "kGsrg0oe36rKgRt_5"
        )
        .then(
          (result) => {
            setIsLoading(false);
            setIsSent(true);
            setValue("");
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    } else {
      alert("please provide a valid email id");
    }
  };

  // fetching country codes
  const [countryCodes, setCountryCodes] = useState([]);
  // const [selectedCode, setSelectedCode] = useState("+91");
  const [selectedFlag, setSelectedFlag] = useState(
    "https://flagcdn.com/in.svg"
  );
  useEffect(() => {
    const getCountries = async () => {
      const countryData = await fetchCountryCodesAndFlags();
      setCountryCodes(countryData);
      // console.log(countryData);
    };
    getCountries();

    setValue("");
  }, []);

  const handleOptionChange = (code) => {
    const selectedOption = countryCodes.find((option) => option.code === code);
    if (selectedOption) {
      setSelectedFlag(selectedOption.flag);
    }
  };
  // validations ----------------------------------------->
  const [val, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [email, setEmail] = useState("");
  // List of common free email domains
  const freeEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "mail.com",
    "zoho.com",
    "protonmail.com",
    "yandex.com",
    "gmx.com",
  ];
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const [msg, setMsg] = useState("");

  return (
    <div className="pricing">
      <div className="top" onClick={() => navigate("/")}>
        <img src="/logo.png" alt="" />
      </div>

      <div
        className="bottom prc-bottom"
        style={
          (isLoading === true) | (isSent === true)
            ? { opacity: "0.1" }
            : { opacity: "1" }
        }
      >
        <h2>QUOTATION FORM</h2>
        <h3>
          PLEASE FILL IN THE FORM BELOW <span style={{ color: "red" }}>*</span>
        </h3>
        <div className="pricing-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="left">
              {/* For comany name */}
              <div className="input-wrapper">
                <label>
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  required
                />
              </div>

              {/* for Number */}
              <div className="input-wrapper">
                <label>Contact Number</label>
                <span style={{ width: "21rem", display: "flex", gap: "10px" }}>
                  <input
                    name="code"
                    type="text"
                    value={code}
                    style={{ display: "none" }}
                  />
                  <CustomSelect
                    bg="rgba(255, 255, 255, 0.7)"
                    setCode={setCode}
                  />
                  <input
                    value={val}
                    name="number"
                    type="number"
                    placeholder="Number"
                    // maxLength={13}
                    onChange={handleChange}
                    style={{ width: "13.2rem" }}
                  />
                </span>
              </div>

              {/* For Buisness Email */}
              <div className="input-wrapper">
                <label>
                  Business Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              {/* Hiring Location */}
              <div className="input-wrapper">
                <label>
                  Hiring Location <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  required
                />
              </div>
            </div>
            <div className="left right">
              {/* For comany Website */}
              <div className="input-wrapper">
                <label>
                  Website URL <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" placeholder="url" required name="url" />
              </div>

              {/* Timeline and budget  */}
              <div className="input-wrapper">
                <label>
                  Timeline <span style={{ color: "red" }}>*</span> and Budget
                </label>
                <span style={{ display: "flex", gap: "5px" }}>
                  <select name="timeline" id="" style={{ width: "7rem" }}>
                    <option value="Timeline">Timeline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="1-6 Months">1-6 Months</option>
                    <option value="6-12 Months">6-12 Months</option>
                    <option value="1+ year">1+ year</option>
                  </select>
                  <select name="budget" id="" style={{ width: "7rem" }}>
                    <option value="$">&#36; </option>
                    <option value="₹">&#x20b9;</option>
                  </select>
                  <input
                    type="number"
                    style={{ width: "5rem" }}
                    placeholder="Budget"
                    required
                    name="cost"
                  />
                </span>
              </div>

              {/* For comany Information */}
              <div className="input-wrapper">
                <label>Brief About the Company </label>
                <input
                  type="text"
                  placeholder="About your company"
                  name="intro"
                />
              </div>

              {/* Requirments */}
              <div className="input-wrapper">
                <label>
                  Company Requirments <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Requirments"
                  required
                  name="req"
                />
              </div>
            </div>
            {/* Hidden tags for function */}
            <input type="text" hidden value={msg} name="message" />
            <button style={{ display: "none" }} id="form-submit-btn">
              formSubmit
            </button>
          </form>

          {/* Queries */}
          <div className="more-queries">
            {/* <div className="top"></div> */}
            <div className="bottom">
              <textarea
                name=""
                id=""
                placeholder="Tell us more about the project in detail"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div
            className="pricing-btns"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/*Submit - btn */}
            <button className="submit-btn" onClick={handleClick}>
              Submit
            </button>
            {/* Go back #btn */}
            <button
              className="submit-btn"
              onClick={() => navigate("/")}
              style={{ background: "goldenrod", color: "black" }}
            >
              Go back
            </button>
          </div>
        </div>
      </div>

      {/* pop - up start */}
      <PopUp isLoading={isLoading} isSent={isSent} />
      {/* pop - up ends */}
    </div>
  );
};

export default Pricing;
