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
      title: "Accuracy First",
      des: "We maintain the highest standards of precision in every calculation. Our commitment to accuracy ensures that every payroll process is executed flawlessly, every time.",
    },
    {
      title: "Compliance Assured",
      des: "We stay ahead of changing regulations and ensure complete compliance across all jurisdictions. Our dedication to regulatory adherence protects your business interests.",
    },
    {
      title: "Technology Innovation",
      des: "Our cutting-edge payroll technology platform continuously evolves to meet modern business needs. We leverage automation and AI to deliver efficient, error-free processing.",
    },
    {
      title: "Client-Centric Approach",
      des: "We put our clients' needs first, providing personalized payroll solutions that adapt to their unique requirements. Our support team ensures seamless service delivery.",
    },
    {
      title: "Data Security",
      des: "We maintain the highest standards of data protection and privacy. Our robust security measures ensure that sensitive payroll information remains confidential and protected.",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="about">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/40 z-10"></div>
          <img 
            src="/about-banner.jpg" 
            alt="About Banner" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/60 z-20"></div>
          <div className="relative z-30 max-w-screen-xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h5 className="text-yellow-400 font-semibold tracking-wider uppercase mb-2">About Us</h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Placement Plaza</h1>
              <p className="text-lg text-gray-100">Leading providers of payroll solutions and the creators of TeamTreak HRMS - designed for modern businesses.</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="max-w-screen-xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                className="space-y-6"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h5 className="text-blue-600 font-semibold tracking-wider uppercase">Our Story</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Placement Plaza</h2>
                <p className="text-gray-600 leading-relaxed">
                  Placement Plaza, established in 2010, has evolved into a leading provider of comprehensive payroll solutions. Recognizing the complexities of modern payroll management, we've developed innovative solutions including our proprietary TeamTreak HRMS platform that combines cutting-edge technology with expert service to deliver accurate, compliant, and efficient payroll processing worldwide.
                </p>
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                Speak to an Expert
              </button>
            </motion.div>

            <motion.div
                className="bg-white p-2 rounded-xl shadow-md"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/about-banner-top.jpg" alt="" className="rounded-xl w-full h-auto object-cover" />
            </motion.div>
          </div>

            {/* Platform Section */}
            <div className="bg-white py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h5 className="text-blue-600 font-semibold tracking-wider uppercase mb-4">Our HRMS Platform</h5>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">TeamTreak HRMS</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Our flagship product TeamTreak HRMS is a comprehensive human resource management system designed to streamline your HR operations. From payroll processing to employee management, TeamTreak offers a complete solution for modern businesses.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                      {
                        title: "Payroll Management",
                        description: "Automated payroll processing with tax calculations and compliance built-in.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )
                      },
                      {
                        title: "Employee Portal",
                        description: "Self-service portal for employees to access documents and submit requests.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )
                      },
                      {
                        title: "Analytics Dashboard",
                        description: "Comprehensive reports and analytics for better decision making.",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )
                      }
                    ].map((feature, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <button 
                      onClick={() => window.open("https://teamtreak.com", "_blank")}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      <span>Visit TeamTreak.com</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 mb-6">To revolutionize global payroll management through our innovative TeamTreak HRMS platform, enabling businesses to manage their workforce compensation efficiently and compliantly across borders.</p>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 italic">"The key to successful payroll management is precision, compliance, and reliability - delivered through our TeamTreak HRMS platform."</p>
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img src="/vision.jpg" alt="Vision" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">To provide seamless, accurate, and compliant payroll solutions through our unified TeamTreak platform. We eliminate the complexities of global payroll management, enabling businesses to focus on growth while we handle their payroll needs with precision.</p>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 italic">"We're committed to empowering businesses with our innovative TeamTreak HRMS platform."</p>
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img src="/mission.jpg" alt="Mission" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="py-20 bg-gray-50 rounded-xl">
              <div className="text-center mb-16">
                <h5 className="text-blue-600 font-semibold tracking-wider uppercase mb-4">Our Principles</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Values That Define Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">Our core values shape how we develop our TeamTreak HRMS platform and deliver our payroll services.</p>
              </div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
                variants={varient}
                initial="initial"
                whileInView="whileInView"
              >
                {valueData.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={varient}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                    <p className="text-gray-600">{item.des}</p>
                    </motion.div>
                ))}
              </motion.div>
          </div>

            {/* CTA Section */}
            <div className="py-20 text-center">
              <h5 className="text-blue-600 font-semibold tracking-wider uppercase mb-4">Ready to Get Started?</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Transform Your Payroll Management with TeamTreak HRMS
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  onClick={() => navigate("/contact-us")}
                >
                  Request a Demo
                </button>
                <button 
                  className="px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-0.5"
                  onClick={() => window.open("https://teamtreak.com", "_blank")}
                >
                  Visit TeamTreak.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
