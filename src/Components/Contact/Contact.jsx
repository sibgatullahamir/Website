import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import Header from "../Header/Header";
import HeaderPhone from "../HeaderPhone/HeaderPhone";
import Footer from "../Footer/Footer";
import fetchCountryCodesAndFlags from "../../action/countryCode";
import CustomSelect from "../../CustomComp/CustomSelect";
const Contact = () => {
  const navigte = useNavigate();
  const [code, setCode] = useState("+91");

  // Calling of API contains country codes and flags
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchCountryCodesAndFlags();
  //     setCountryData(data);
  //   };
  //   getData();
  // }, []);

  // Number Validation
  const [value, setValue] = useState("");
  const restrictNum = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  // Email Js --- Connection -------------------------->
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_u8tumqq",
        "template_ggewpss",
        form.current,
        "Jr2_NGqGKWQW26WzV"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (isLoading | isSent) {
      document.body.style.overflow = "hidden";
      document.getElementById("h-main").style.opacity = "0.1";
    } else {
      if (window.innerWidth > 900) {
        document.body.style.overflow = "";
        document.getElementById("h-main").style.opacity = "1";
      } else {
        document.body.style.overflow = "";
        document.getElementById("hp-main").style.opacity = "1";
      }
    }
  }, [isLoading, isSent]);

  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="contact">
        <img
          src="/contact.png"
          alt=""
          className="banner-bottom"
          style={
            (!isLoading === false) | (isSent === true) ? { opacity: "0.1" } : {}
          }
        />

        <div
          className="form"
          style={
            (!isLoading === false) | (isSent === true) ? { opacity: "0.1" } : {}
          }
        >
          <h2>Get Started With Placement Plaza</h2>
          <p>
            We value your feedback and are here to assist you with any inquiries
            or support you may need. Whether you have a question, need
            assistance, or want to share your thoughts, we're just a message
            away.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="top">
              <div className="wrapper">
                <label htmlFor="">
                  First name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="wrapper">
                <label htmlFor="">
                  Last name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="wrapper">
                <label htmlFor="">
                  Buisness Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Buisness Email"
                  required
                />
              </div>
              <div className="wrapper">
                <label htmlFor="">
                  Hiring Timeline<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="timeline"
                  id=""
                  style={{ color: "gray" }}
                  required
                >
                  <option value="Select">Select</option>
                  <option value="Immediatley">Immediately</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="4-6 Months">4-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>
              </div>
              <div className="wrapper">
                <label htmlFor="">
                  Have you connected us before?
                  <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="past_client"
                  id=""
                  style={{ color: "gray" }}
                  required
                >
                  <option value="Please Select">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="wrapper">
                <label htmlFor="">
                  How Many Employees Are You Looking to Hire?
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="emp_no"
                  type="number"
                  placeholder="No. of Employees"
                  required
                />
              </div>
              <div className="wrapper">
                <label htmlFor="">Where are you hiring?</label>
                <input
                  name="hiring_place"
                  type="text"
                  placeholder="Hiring Place"
                />
              </div>
              <div className="wrapper">
                <label htmlFor="">Phone Number</label>
                <span
                  style={{ width: "84%", display: "flex", gap: "10px" }}
                  className="ph-input-span"
                >
                  <input
                    name="code"
                    type="text"
                    value={code}
                    style={{ display: "none" }}
                  />
                  <CustomSelect setCode={setCode} />
                  <input
                    value={value}
                    name="number"
                    type="number"
                    placeholder="+91"
                    // maxLength={13}
                    onChange={restrictNum}
                    style={{ width: "60%" }}
                  />
                </span>
              </div>
            </div>
            <div className="bottom">
              <p
                style={{
                  color: "rgb(52, 51, 51)",
                  fontSize: "0.7rem",
                  justifyContent: "flex-start",
                  marginTop: "20px",
                  fontWeight: "600",
                }}
              >
                By clicking submit, you understand that Placement Plaza will
                process your info to respond to you in accordance with our
                Privacy Policy.
              </p>

              <div className="btn">
                <button>Schedule Your Demo</button>
              </div>
            </div>
          </form>
        </div>

        {/* pop - up starts */}
        <PopUp isLoading={isLoading} isSent={isSent} />
        {/* pop - up ends */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
