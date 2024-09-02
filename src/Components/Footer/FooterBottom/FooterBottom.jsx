import React, { useRef } from "react";
import "./FooterBottom.scss";
import logo from "/logo.png";
import fb from "/fb.png";
import twitter from "/twitter.png";
import insta from "/insta.png";
import linkedIn from "/linkedIn.png";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
const FooterBottom = () => {
  const navigate = useNavigate();

  // Email Js --- Connection -------------------------->
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m17v3j7",
        "template_agz4njq",
        form.current,
        "xtwUI5bJZIW5Pnl1F"
      )
      .then(
        (result) => {
          alert("Thank You , we have received your message");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="footer-bottom">
      <div className="top">
        <div className="col-1">
          <div
            className="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="" />
            <p
              style={
                window.innerWidth > 500
                  ? { display: "none" }
                  : {
                      fontSize: "1rem",
                      fontWeight: "700",
                      textDecoration: "overline",
                    }
              }
            >
              Placement Plaza
            </p>
          </div>
          {/* <h3 style={{ marginTop: "0" }}>News Letter</h3> */}
          <p>Subscribe to our newsletter and be the first to know about</p>

          <form ref={form} onSubmit={sendEmail}>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button>Subscribe</button>
          </form>
        </div>
        <div
          className="col-2"
          style={
            window.innerWidth > 800
              ? { marginLeft: "30px" }
              : { marginLeft: "50px" }
          }
        >
          <h3>Services</h3>
          <li onClick={() => navigate("/")}>Hire Employees</li>
          <li onClick={() => navigate("/")}>Hire Contractors</li>
          {/* <li onClick={() => navigate("/")}>Global Placement Plaza</li> */}
          <li onClick={() => navigate("/")}>Competitive Benefits</li>
          <li onClick={() => navigate("/")}>Global Talent Network</li>
        </div>
        <div className="col-2">
          <h3>Solutions</h3>
          <li onClick={() => navigate("/")}>For Legal Teams</li>
          <li onClick={() => navigate("/")}>For Finance Teams</li>
          <li onClick={() => navigate("/")}>For People Teams</li>
          <li onClick={() => navigate("/")}>Compliance</li>
          <li onClick={() => navigate("/")}>For Founders</li>
        </div>

        <div
          className="col-2"
          style={window.innerWidth > 800 ? {} : { marginLeft: "50px" }}
        >
          <h3>Resources</h3>
          <li onClick={() => navigate("/case")}>Case Studies</li>
          <li onClick={() => navigate("/")}>Pricing</li>
          <li onClick={() => navigate("/about-us")}>About Us</li>
          <li onClick={() => navigate("/")}>Blogs</li>

          <div className="social-links">
            <h3>Our Social Media</h3>
            <div className="links">
              <div
                className="circle"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61560473970919",
                    "_blank"
                  )
                }
              >
                <img src={fb} alt="" className="fb-img" />
              </div>
              <div
                className="circle"
                onClick={() =>
                  window.open("https://x.com/placement_7541", "_blank")
                }
              >
                <img src={twitter} alt="" />
              </div>
              <div
                className="circle"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/placementplaza3571/",
                    "_blank"
                  )
                }
              >
                <img src={insta} alt="" />
              </div>
              <div
                className="circle"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/placement-plaza/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="line"></div>
        <div className="rights">
          2000&#169;Placement Plaza. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
