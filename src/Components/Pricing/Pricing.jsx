import React, { useState, useEffect, useRef } from "react";
import "./Pricing.scss";
import emailjs from "@emailjs/browser";
import PopUp from "../PopUp/PopUp";
import fetchCountryCodesAndFlags from "../../action/countryCode";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../CustomComp/CustomSelect";
import Header from "../Header/Header";
import HeaderPhone from "../HeaderPhone/HeaderPhone";
import Footer from "../Footer/Footer";

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
  const [selectedFlag, setSelectedFlag] = useState("https://flagcdn.com/in.svg");
  
  useEffect(() => {
    const getCountries = async () => {
      const countryData = await fetchCountryCodesAndFlags();
      setCountryCodes(countryData);
    };
    getCountries();
    setValue("");
  }, []);

  // validations ----------------------------------------->
  const [val, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  return (
    <>
      {window.innerWidth > 900 ? <Header /> : <HeaderPhone />}
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            style={(isLoading || isSent) ? { opacity: "0.2" } : { opacity: "1" }}
          >
            {/* Header */}
            <div className="bg-blue-600 py-8 px-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-center">PAYROLL SERVICE QUOTATION</h2>
              <p className="text-sm md:text-base text-center mt-2 text-blue-100">
                REQUEST YOUR CUSTOMIZED PAYROLL SOLUTION <span className="text-yellow-300">*</span>
              </p>
            </div>
            
            {/* Form */}
            <div className="p-6 md:p-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Two column layout for larger screens */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your business email"
                      name="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        !isValid && email ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300`}
                    />
                    {!isValid && email && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <div className="flex gap-2">
                      <input
                        name="code"
                        type="text"
                        value={code}
                        style={{ display: "none" }}
                      />
                      <div className="w-1/3">
                        <CustomSelect
                          bg="white"
                          setCode={setCode}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300"
                        />
                      </div>
                      <input
                        value={val}
                        name="number"
                        type="number"
                        placeholder="Enter your contact number"
                        onChange={handleChange}
                        className="w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Company Location */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company location"
                      name="location"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Number of Employees */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Number of Employees <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter total number of employees"
                      name="employee_count"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Payroll Frequency */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred Payroll Frequency <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="payroll_frequency" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select frequency</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                </div>

                {/* Additional Requirements - Full width */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Requirements
                  </label>
                  <textarea
                    name="requirements"
                    placeholder="Tell us about any specific payroll needs (tax compliance, international payments, benefits management, etc.)"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="form-submit-btn"
                  style={{ display: "none" }}
                ></button>
              </form>

              <div className="mt-8 text-center">
                <button
                  onClick={handleClick}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Request Payroll Quote</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pop - up start */}
      <PopUp isLoading={isLoading} isSent={isSent} />
      {/* pop - up ends */}
      <Footer />
    </>
  );
};

export default Pricing;
