import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute top-10 right-10 text-indigo-200 opacity-20">
          <circle cx="40" cy="40" r="40" fill="currentColor" />
        </svg>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="absolute bottom-20 left-10 text-blue-200 opacity-20">
          <circle cx="60" cy="60" r="60" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 object-contain rounded-lg shadow-sm" />
              <div>
                <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Placement Plaza</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Leading provider of comprehensive payroll solutions and professional staffing services offering end-to-end HR management.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-gray-900 font-semibold mb-5 relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-indigo-500 after:-bottom-2 after:left-0">Our Services</h3>
            <ul className="space-y-3 mt-4">
              {[
                { title: "Payroll Processing", link: "/pricing" },
                { title: "Tax Management", link: "/pricing" },
                { title: "Benefits Administration", link: "/pricing" },
                { title: "Hiring Solutions", link: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <motion.button 
                    className="text-sm text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center gap-2 group"
                    onClick={() => {
                      if (item.link.startsWith("http")) {
                        window.open(item.link, "_blank");
                      } else {
                        navigate(item.link);
                      }
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-indigo-500 transition-colors duration-300"></span>
                    {item.title}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-gray-900 font-semibold mb-5 relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-indigo-500 after:-bottom-2 after:left-0">Company</h3>
            <ul className="space-y-3 mt-4">
              {[
                { title: "About Us", link: "/about-us" },
                { title: "Case Studies", link: "/case" },
                { title: "Payroll Blog", link: "/blogmain" },
                { title: "Careers", link: "/contact-us" },
                { title: "Contact Us", link: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <motion.button 
                    className="text-sm text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center gap-2 group"
                    onClick={() => navigate(item.link)}
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-indigo-500 transition-colors duration-300"></span>
                    {item.title}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-gray-900 font-semibold mb-5 relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-indigo-500 after:-bottom-2 after:left-0">Get In Touch</h3>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-gray-600">payroll@placementplaza.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-gray-600">9572745274</p>
                </div>
              </li>
              <li>
                <motion.button 
                  className="mt-4 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  onClick={() => navigate("/contact-us")}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.2)" }}
                >
                  Client Connect
                </motion.button>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 mt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Placement Plaza. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { title: "Privacy Policy", link: "/privacy" },
                { title: "Terms of Service", link: "/terms" },
                { title: "Cookies", link: "/cookies" },
              ].map((item, index) => (
                <motion.button 
                  key={index}
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-all duration-300"
                  onClick={() => navigate(item.link)}
                  whileHover={{ y: -2 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
