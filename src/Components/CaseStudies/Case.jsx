import React from "react";
import "./Case.scss";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import HeaderPhone from "../HeaderPhone/HeaderPhone";
import Footer from "../Footer/Footer";
const Case = () => {
  const companiesData = [
    "/Companies/janani.png",
    "/Companies/onida.png",
    "/Companies/lg.png",
    "/Companies/mahindra.png",
    "/Companies/samsung.png",
    "/Companies/surya.png",
    "/Companies/godrej.png",
  ];
  const navigate = useNavigate();
  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="case">
        <div className="banner">
          <div className="left">
            <h5>Our work</h5>
            <h2>Case Studies</h2>
            <p>
              Placement Plaza was established in the year 2000 at Patna and it
              takes pride in stating that within a span of 23 years Placement
              Plaza had its branches in the states of Jharkhand, Uttar Pradesh
              and Madhya Pradesh, Delhi besides Bihar.
            </p>
            <button onClick={() => navigate("/contact-us")}>Get Started</button>
          </div>
          <div className="right">
            <div className="box" style={{ display: "none" }}>
              <div className="slider">
                {companiesData.map((val, i) => {
                  return <img src={val} alt="" className="slides" key={i} />;
                })}
              </div>
              {/* Duplicate */}
              <div className="slider">
                {companiesData.map((val, i) => {
                  return <img src={val} alt="" className="slides" key={i} />;
                })}
              </div>
            </div>
            <div className="box">
              <div className="slider slider-2">
                {companiesData.map((val, i) => {
                  return (
                    <img src={val} alt="" className="slides type-2" key={i} />
                  );
                })}
              </div>
              {/* Duplicate */}
              <div className="slider">
                {companiesData.map((val, i) => {
                  return (
                    <img src={val} alt="" className="slides type-2" key={i} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* section-5 */}
        <div className="section-5">
          <h5>Scale the way you work, with Placement Plaza.</h5>
          <h2>
            Let's grow your distributed workforce,{" "}
            <span style={{ color: "#003e71" }}>today.</span>{" "}
          </h2>
          <div className="btns">
            <div className="talk" onClick={() => navigate("/contact-us")}>
              Let's Talk
            </div>
            <div className="tutorial" onClick={() => navigate("/contact-us")}>
              Get Started
            </div>
          </div>

          <img className="watch" src="/watch.png" alt="" />
          <img className="team-work" src="/teamwork2.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Case;
