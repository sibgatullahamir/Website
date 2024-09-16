import React, { useState } from "react";
import "./Home.scss";
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
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const varient2 = {
  initial: {
    y: 200,
    opacity: 0,
  },
  whileInView: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Home = () => {
  const uspData = [
    "Optimize Management Focus to concentrate on achieving strategic organizational goals.",
    "Tailored Workforce Solutions to meet specific organizational needs efficiently.",
    "Customized Training Programs to align with the organization's requirements and enhance workforce capabilities.",
    "Ensured Timely Payments to ensure satisfaction and reliability.",
    "Compliance and Benefits Management with legal standards and safeguarding employee benefits.",
  ];
  const serviceData = [
    {
      title: "Hire Domestic Talent",
      subTitle: "Hire Best Domestic Talent",
      des: "Hiring domestic and global talent involves defining your needs, exploring diverse talent pools through online platforms, and understanding legal requirements for international hiring. Remote work arrangements and cultural sensitivity are key considerations, along with offering competitive compensation and streamlining the hiring process. Providing support for new hires and fostering diversity and inclusion are vital for success. Continuous feedback ensures effective collaboration and ongoing improvement within your team.",
      img: "/Hirings/talent.jpg",
    },
    {
      title: "Hire Contractors",
      subTitle: "Hire Contractors Worldwide",
      des: "Hiring contractors can offer flexibility and specialized skills without the commitment of a full-time employee. Start by clearly defining the scope of work and desired qualifications. Utilize online platforms, freelance marketplaces, and professional networks to find qualified contractors. Establish clear contracts outlining deliverables, timelines, and payment terms. Communication and project management tools can help facilitate collaboration with remote contractors. Ensure compliance with relevant labor laws and tax regulations, and consider factors like cultural fit and reliability when selecting contractors. Regular feedback and performance evaluations can help maintain quality and efficiency in contractor relationships.",
      img: "/Hirings/contractor.jpg",
    },
    {
      title: "HR Dashboard",
      subTitle: "Visibility and Control Of All Things HR Through One Platform",
      des: "An HR dashboard is a centralized tool that provides key insights and metrics related to various aspects of human resources management. It typically includes data on employee demographics, recruitment and hiring metrics, employee performance and engagement, turnover rates, training and development initiatives, and other relevant HR KPIs. The dashboard enables HR professionals and decision-makers to track trends, identify areas for improvement, and make data-driven decisions to optimize workforce management strategies. Visualizations such as charts, graphs, and tables make it easy to interpret and analyze HR data quickly. Additionally, customizable features allow organizations to tailor the dashboard to their specific needs and objectives.",
      img: "/Hirings/dashboard.jpg",
    },
    {
      title: "Source Global Talent",
      subTitle: "Hire Global Talent With Placement Plaza",
      des: "Source Global Talent Sourcing global talent involves leveraging online platforms like LinkedIn and international job boards, partnering with recruitment agencies, and networking with professionals worldwide. Utilizing employee referrals and engaging with remote work platforms and social media can also expand your reach. Additionally, collaborating with universities and cultural organizations helps access skilled graduates and diverse talent pools. By combining these strategies, businesses can effectively source global talent to drive innovation and growth.",
      img: "/Hirings/global-talent.jpg",
    },
  ];

  const companiesData = [
    "/Companies/janani.png",
    "/Companies/onida.png",
    "/Companies/lg.png",
    "/Companies/mahindra.png",
    "/Companies/samsung.png",
    "/Companies/surya.png",
    "/Companies/godrej.png",
    "/Companies/pfizer.png",
    "/Companies/novartis.png",
    "/Companies/relianceLog.png",
  ];

  const navigate = useNavigate();
  // Service Detail Logics
  const [subTitle, setSubTitle] = useState("Hire Best Domestic Talent");
  const [des, setDes] = useState(serviceData[0].des);
  const [img, setImg] = useState(serviceData[0].img);
  const [selectedIndx, setSelectedIndx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const setIndx = (index) => {
    setSelectedIndx(index);

    setIsFading(true); // Start fade out
    setTimeout(() => {
      setSubTitle(serviceData[index].subTitle);
      setDes(serviceData[index].des);
      setImg(serviceData[index].img);
      setIsFading(false); // Start fade in
    }, 500); // Match this duration with the CSS transition duration
  };

  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="home">
        <motion.div
          className="banner"
          variants={varient}
          initial="initial"
          animate="animate"
        >
          <motion.h5 variants={varient}>Best Staff Provider</motion.h5>
          <motion.h2 variants={varient}>
            "We provide top-tier talent, and a perfect fit for your
            <span style={{ color: "goldenrod" }}>
              {" "}
              <b></b>Business needs."
            </span>
          </motion.h2>
          <motion.p variants={varient}>
            Grow your global workforce on one platform with our top-tier
            Employer and Contractor Management solutions. Benefit from the best
            pricing, same-day onboarding, and availability in 30+ countries.
          </motion.p>
          <motion.div className="btns">
            <motion.div
              className="talk"
              onClick={() => navigate("/book-a-demo")}
            >
              Book a demo
            </motion.div>
            <motion.div
              className="tutorial"
              onClick={() =>
                (window.location.href =
                  "https://www.youtube.com/watch?v=dDhdOEvTDPo")
              }
            >
              Watch Tutorial
            </motion.div>
          </motion.div>
        </motion.div>

        {/* section-1 */}
        <div className="w-full max-w-screen-xl pt-16 flex flex-col items-center mx-auto">
          <h3 className="text-sm px-4 font-medium text-center md:text-xl 2xl:text-2xl">
            Leading domestic and global enterprises rely{" "}
            <span className="text-goldenrod font-bold">Placement Plaza</span>{" "}
            for their comprehensive global employment solutions
          </h3>
          <div className="w-[90%] h-21 py-8 overflow-hidden relative">
            <div className="flex animate-slider">
              {companiesData.concat(companiesData).map((val, i) => (
                <img
                  src={val}
                  alt={`Company ${i}`}
                  className="w-32 h-14 mx-5 border-r border-gray-600 object-cover"
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* section-2 */}
        <motion.div
          className="section-2"
          variants={varient2}
          initial="initial"
          whileInView="whileInView"
        >
          <h5>Placement Plaza's USP</h5>
          <h2>
            Enhancing Organizational Efficiency with Comprehensive HR Solutions
          </h2>
          <p>
            Derived from its vision, Placement Plaza focuses on delivering
            strategic HR solutions to support organizational success:
          </p>
          <div className="contents">
            <div className="left">
              <img src="/usp.jpg" alt="" />
            </div>
            <div className="right">
              {uspData.map((val, i) => {
                return (
                  <li key={i}>
                    <div className="tick">&#10004;</div>
                    <span>{val}</span>
                  </li>
                );
              })}
              <button onClick={() => navigate("/contact-us")}>
                Get Started
              </button>
            </div>
          </div>
        </motion.div>

        {/* section-3 */}
        <div className="section-3">
          <h2>What Services We Offer You</h2>
          <p>
            Global and domestic Employment Solution| Talent Acquisition|
            Training and Development| Payroll and Compensation Management |
            Benefits Administration |HR Compliance and Risk Management |
            Onboarding and Offboarding
          </p>
          <div className="service-menu">
            {serviceData.map((val, i) => {
              return (
                <div
                  key={i}
                  className="card"
                  style={
                    selectedIndx === i
                      ? {
                          background: "#003e71",
                          color: "white",
                        }
                      : {}
                  }
                  onClick={() => setIndx(i)}
                >
                  {val.title}
                </div>
              );
            })}
          </div>
          <div
            className="service-detail"
            style={isFading ? { opacity: 0 } : { opacity: 1 }}
          >
            <div className="left">
              <h2>{subTitle}</h2>
              <p>{des}</p>
            </div>
            <div className="right">
              <img src={img} alt="" />
            </div>
          </div>
        </div>

        {/* section-4 */}
        {/* <div className="service-detail section-4">
        <div className="left">
          <h5>IN-DEPTH COUNTRY HIRING GUIDES</h5>
          <h2>Guides for Hiring Today's Top Talent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptas nam sed, fuga nihil nostrum molestiae laudantium
            repudiandae minima velit laborum! Voluptate quaerat dolores ipsum
            expedita laborum incidunt voluptatem molestias at quae, dolore dicta
            atque dolor optio, deleniti ullam! At.
          </p>
          <button>Access Hiring Guides</button>
        </div>
        <div className="right">
          <img src="/guide.jpg" alt="" />
        </div>
      </div> */}

        {/* section-5 */}
        <motion.div
          className="section-5"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
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
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
