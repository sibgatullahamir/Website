import React, { useState, useEffect } from "react";
import "./HeaderPhone.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HeaderPhone = () => {
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);
  const [height, setHeight] = useState(false);
  const [height2, setHeight2] = useState(false);
  const [height3, setHeight3] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (showHiddenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showHiddenMenu]);

  const solData = [
    "Stay Compliant",
    "Hire Employee",
    "Hire Contractors",
    "Finance Teams",
    "HR Teams",
    "Legal Teams",
  ];

  return (
    <div className={`header-ph transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`} id="hp-main">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          setShowHiddenMenu(false);
        }}
      >
        <img src="/logo.png" alt="" className="rounded-lg shadow-sm object-contain" />
        <div className="logo-text">
          <span className="logo-title text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Placement Plaza</span>
          <div className="tagline">
            <span className="tagline-text">Powered by </span>
            <span 
              className="teamtreak-text" 
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://teamtreak.com", "_blank");
              }}
            >
              TeamTreak HRMS
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <h5 
          onClick={() => navigate("/contact-us")} 
          className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          Client Connect
        </h5>
        <div className="nav-links">
          <span 
            onClick={() => navigate("/careers")} 
            className="hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Careers
          </span>
          <span 
            onClick={() => window.open("https://teamtreak.com", "_blank")} 
            className="hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            HRMS
          </span>
        </div>
        <div
          className={`hamMenu ${showHiddenMenu ? "active" : ""}`}
          style={showHiddenMenu ? { background: "#4f46e5" } : {}}
          onClick={() => setShowHiddenMenu(!showHiddenMenu)}
        >
          <div
            className="line line1"
            style={showHiddenMenu ? { background: "white", transform: "translateY(8px) rotate(45deg)" } : {}}
          ></div>
          <div
            className="line line2"
            style={showHiddenMenu ? { background: "white", opacity: "0" } : {}}
          ></div>
          <div
            className="line line3"
            style={showHiddenMenu ? { background: "white", transform: "translateY(-8px) rotate(-45deg)" } : {}}
          ></div>
        </div>
      </div>

      {/* hidden menu */}
      <div
        className="hidden-menu"
        style={{
          height: showHiddenMenu ? "calc(100vh - 80px)" : "0",
          transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      >
        <li>
          <div 
            className="text flex items-center justify-between"
          >
            <span>Solutions</span>
            <span 
              onClick={() => setHeight(!height)}
              className="transition-transform duration-300"
              style={{ transform: height ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <RiArrowDropDownLine size={24} />
            </span>
          </div>
          <ul 
            style={{
              height: height ? "15rem" : "0",
              transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              overflow: "hidden"
            }}
          >
            <h5 className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500">Solution By Role</h5>
            {solData.map((val, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    navigate("/");
                    setShowHiddenMenu(false);
                    setHeight(false);
                  }}
                  className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
                >
                  {val}
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <div 
            className="text flex items-center justify-between"
          >
            <span>Why Placement Plaza</span>
            <span 
              onClick={() => setHeight2(!height2)}
              className="transition-transform duration-300"
              style={{ transform: height2 ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <RiArrowDropDownLine size={24} />
            </span>
          </div>
          <ul 
            style={{
              height: height2 ? "11rem" : "0",
              transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              overflow: "hidden"
            }}
          >
            <h5 className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500">About Our Company</h5>
            <li
              onClick={() => {
                navigate("/about-us");
                setShowHiddenMenu(false);
                setHeight2(false);
              }}
              className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/case");
                setShowHiddenMenu(false);
                setHeight2(false);
              }}
              className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
            >
              Case Studies
            </li>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight2(false);
              }}
              className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
            >
              Country Coverage
            </li>
          </ul>
        </li>
        <li className="transition-all duration-300 hover:bg-indigo-50 hover:pl-2 hover:text-indigo-600 rounded-lg">
          <div 
            className="text"
            onClick={() => {
              navigate("/pricing");
              setShowHiddenMenu(false);
            }}
          >
            Pricing 
          </div>
        </li>
        <li>
          <div 
            className="text flex items-center justify-between"
          >
            <span>Resources</span>
            <span 
              onClick={() => setHeight3(!height3)}
              className="transition-transform duration-300"
              style={{ transform: height3 ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <RiArrowDropDownLine size={24} />
            </span>
          </div>
          <ul 
            style={{
              height: height3 ? "11rem" : "0",
              transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              overflow: "hidden"
            }}
          >
            <h5 className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500">Resources and Tools</h5>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight3(false);
              }}
              className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
            >
              Global Hiring Guides
            </li>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight3(false);
              }}
              className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
            >
              Blog
            </li>
            <li
              onClick={() => {
                navigate("/");
                setShowHiddenMenu(false);
                setHeight3(false);
              }}
              className="transition-all duration-300 hover:pl-2 hover:text-indigo-600"
            >
              HR Terms Glossary
            </li>
          </ul>
        </li>
        <li className="transition-all duration-300 hover:bg-indigo-50 hover:pl-2 hover:text-indigo-600 rounded-lg">
          <div 
            className="text"
            onClick={() => {
              navigate("/careers");
              setShowHiddenMenu(false);
            }}
          >
            Careers
          </div>
        </li>
      </div>

      {/* Add responsive styles */}
      <style jsx>{`
        @media (max-width: 360px) {
          .header-ph h5 {
            font-size: 0.875rem;
            padding: 0.5rem 0.75rem;
          }
          .hidden-menu .text {
            font-size: 0.9rem;
            padding: 0.75rem 1rem;
          }
          .logo img {
            max-width: 40px;
          }
          .logo-text {
            margin-left: 0.5rem;
          }
          .logo-title {
            font-size: 0.9rem;
          }
          .tagline {
            font-size: 0.7rem;
          }
        }
        
        /* Additional responsive styles */
        @media (max-width: 480px) {
          .header-ph {
            padding: 0 0.75rem;
          }
          .nav-links {
            display: none;
          }
          .hidden-menu li {
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 4px 8px;
          }
          .hidden-menu li:hover {
            background-color: rgba(79, 70, 229, 0.1);
          }
          .hidden-menu .text {
            font-weight: 500;
          }
          .line {
            transition: all 0.3s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderPhone;
