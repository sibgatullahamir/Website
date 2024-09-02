import React from "react";
import "./About.scss";
import Card from "./Card/Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import HeaderPhone from "../HeaderPhone/HeaderPhone";
import Footer from "../Footer/Footer";

const varient = {
  initial: {
    x: -100,
    opacity: 0,
  },
  whileInView: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const About = () => {
  const valueData = [
    {
      title: "Progress Every Day",
      des: "We embrace challenges, challenge norms, and are dedicated to continuous advancement. Our goal is daily improvement, with a clear path for ongoing growth.",
    },
    {
      title: "Results Matter Most",
      des: "Each role we fulfill is marked by a dedication to meaningful outcomes. Beyond mere actions, we each shape results that define our success.",
    },
    {
      title: "One Playground",
      des: "Our shared Playground is the global hub where we create, innovate, and triumph collectively. As a unified global team, we transcend boundaries to reach a common vision.",
    },
    {
      title: "Unified Community",
      des: "Our collective Community serves as a global center where we innovate, create, and succeed together. As a cohesive global team, we surpass barriers to achieve a shared vision.",
    },
    {
      title: "Pursuit of Perfection",
      des: "Excellence isn't handed to us; it's earned. Our dedication propels us toward exceptional achievements. Setting lofty standards, we deliver with precision, expertise, and unmatched quality of service.",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="about">
        <div className="banner">
          <img src="/about-banner.jpg" alt="" />
        </div>

        <div className="about-content">
          <div className="banner-top">
            <motion.div
              className="left"
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <h5>GLOBAL TALENT WITHOUT BORDERS</h5>
              <h2>About Placement Plaza</h2>
              <p>
                Placement Plaza, established in 2000, swiftly recognized the
                burgeoning demand for Human Resource and Financial Management
                amidst globalization and economic expansion. With a foresight
                towards efficient HR management and transparent financial
                practices, Placement Plaza emerged as a pioneering force in this
                domain.
              </p>
              <button onClick={() => navigate("/contact-us")}>
                Speak to an Expert
              </button>
            </motion.div>

            <motion.div
              className="right"
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <img src="/about-banner-top.jpg" alt="" />
            </motion.div>
          </div>

          <div className="vision">
            <Card
              title="Our Vision"
              para="To create and enable a cordial working environment which contributes towards the growth of the organization through efficient management of human resource and enforce transparent financial policies."
              msg="The secret to building a successful business is this: empower talent who want to change the world, wherever they are."
              isFounder={true}
              img="/vision.jpg"
              flex={true}
            />
          </div>
          <div className="mission">
            <Card
              title="Our Mission"
              para="Owning the complexities of a global workforce from one single platform. We remove the barriers for Employees and Employers alike, to unlock a world of opportunities."
              msg=""
              isFounder={false}
              img="/mission.jpg"
              flex={false}
            />
          </div>

          <div
            className="values-wrap"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
            }}
          >
            <div className="values">
              <h5>Our Core Principles</h5>
              <h2>The Values That Make Up Our DNA</h2>

              <motion.div
                className="contents"
                variants={varient}
                initial="initial"
                whileInView="whileInView"
              >
                {valueData.map((item, i) => {
                  return (
                    <motion.div className="box" variants={varient}>
                      <div className="left">
                        <img src="/star.png" alt="" />
                      </div>
                      <div className="right">
                        <h3>{item.title}</h3>
                        <p>{item.des}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

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
      </div>
      <Footer />
    </>
  );
};

export default About;
