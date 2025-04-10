import React, { useState } from "react";
import logo from "/logo.png";
import fb from "/fb.png";
import twitter from "/twitter.png";
import insta from "/insta.png";
import linkedIn from "/linkedIn.png";
import CustomSelect from "../../CustomComp/CustomSelect"; // Import the custom select component
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [code, setCode] = useState("+91"); // Country code state
  const [value, setValue] = useState(""); // Phone number state
  const navigate = useNavigate();

  // Function to handle input changes and restrict to numbers
  const restrictNum = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="fixed top-6 left-8 z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-6">Contact Our Payroll Experts</h2>
                <p className="text-blue-100 mb-8">
                  Need assistance with payroll management? Our team of payroll experts is here to help. Whether you have questions about tax compliance, international payroll, or our platform features, we're ready to assist.
                </p>
                
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Email</p>
                      <p className="font-medium">payroll@placementplaza.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Phone</p>
                      <p className="font-medium">9572745274</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-blue-200">Connect With Us</p>
                  <div className="flex gap-4">
                    {[
                      { icon: fb, url: "https://www.facebook.com/profile.php?id=61560473970919&mibextid=ZbWKwL" },
                      { icon: twitter, url: "https://x.com/placement_7541?t=TgRX8eZOCi47PlUr5tTddA&s=09" },
                      { icon: insta, url: "https://www.instagram.com/placementplaza_/" },
                      { icon: linkedIn, url: "https://www.linkedin.com/company/placementplaza/" }
                    ].map((social, index) => (
                      <button
                        key={index}
                        onClick={() => window.open(social.url, "_blank")}
                        className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors duration-300"
                      >
                        <img src={social.icon} alt="" className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-12">
              <div className="max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Consultation</h3>
                <p className="text-gray-600 mb-8">Let's discuss your payroll needs</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="first name"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="last name"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="flex gap-4">
                      <div className="w-1/3">
                        <CustomSelect 
                          setCode={setCode}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      <input
                        value={value}
                        name="number"
                        type="number"
                        placeholder="Phone number"
                        onChange={restrictNum}
                        className="w-2/3 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about your payroll requirements and challenges"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Request Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By contacting us, you agree to our Terms of services and Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
