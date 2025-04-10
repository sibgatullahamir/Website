import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Solution from "./Solution";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  // Getting the login state

  const navigate = useNavigate();
  const [isSolnHover, setIsSolnHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isResourceHover, setIsResourceHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const logoVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "shadow-sm py-3"
      }`}
      id="h-main"
    >
      <div className="max-w-7xl mx-auto h-[80px] px-4 md:px-8 flex justify-between items-center">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
          whileHover="hover"
          variants={logoVariants}
        >
          <img src="./logo.jpeg" alt="Logo" className="w-14 h-14 object-contain rounded-lg shadow-sm" />
          <div className="flex flex-col justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-bold text-xl">Placement Plaza</span>
            <div className="flex items-center">
              <span className="text-xs text-gray-500">Powered by <a href="https://teamtreak.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-medium hover:underline transition-all duration-300">TeamTreak HRMS</a></span>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-7 text-gray-700 font-medium">
          <div
            className="group relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsSolnHover(true)}
            onMouseLeave={() => setIsSolnHover(false)}
          >
            <span className="text-sm group-hover:text-indigo-600 transition-all duration-300">Payroll Solutions</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-indigo-600 transition-all duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <AnimatePresence>
              {isSolnHover && (
                <Solution
                  state={isSolnHover}
                  colTitle="Solutions By Role"
                  showData={[
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Stay Compliant",
                      p: "Ensure legal compliance",
                      nav: "/"
                    },
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Hire Employees",
                      p: "Streamline onboarding",
                      nav: "/"
                    },
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Hire Contractors",
                      p: "Flexible workforce solutions",
                      nav: "/"
                    }
                  ]}
                  showP={true}
                />
              )}
            </AnimatePresence>
          </div>

          <div 
            className="group relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsAboutHover(true)}
            onMouseLeave={() => setIsAboutHover(false)}
          >
            <span className="text-sm group-hover:text-indigo-600 transition-all duration-300">Why Choose Us?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-indigo-600 transition-all duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <AnimatePresence>
              {isAboutHover && (
                <Solution
                  state={isAboutHover}
                  colTitle="Learn About Us"
                  showData={[
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "About Us",
                      p: "Our story & mission",
                      nav: "/about-us"
                    },
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Case Studies",
                      p: "Success stories",
                      nav: "/case"
                    },
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Country Coverage",
                      p: "Global reach",
                      nav: "/"
                    }
                  ]}
                  showP={true}
                />
              )}
            </AnimatePresence>
          </div>

          <div
            className="group relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsResourceHover(true)}
            onMouseLeave={() => setIsResourceHover(false)}
          >
            <span 
              className="text-sm group-hover:text-indigo-600 transition-all duration-300"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </span>
            <AnimatePresence>
              {isResourceHover && (
                <Solution
                  state={isResourceHover}
                  colTitle="Resources"
                  showData={[
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Blog",
                      p: "Latest insights",
                      nav: "/"
                    },
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Webinars",
                      p: "Expert sessions",
                      nav: "/"
                    },
                    {
                      img: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Global Guides",
                      p: "International resources",
                      nav: "/"
                    }
                  ]}
                  showP={true}
                />
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative group">
            <span 
              className="text-sm cursor-pointer group-hover:text-indigo-600 transition-all duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-indigo-600 after:bottom-[-4px] after:left-0 group-hover:after:w-full after:transition-all after:duration-300"
              onClick={() => navigate("/careers")}
            >
              Careers
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.button 
            className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-sm text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => window.open("https://teamtreak.com", "_blank")}
            whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.2)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            TeamTreak HRMS
          </motion.button>
          <motion.button
            className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-sm text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/contact-us")}
            whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)" }}
          >
            Client Connect
          </motion.button>
          <button className="lg:hidden p-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300" onClick={() => document.querySelector('body').classList.toggle('nav-open')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
