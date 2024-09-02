import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Case from "./Components/CaseStudies/Case";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Employee from "./Components/Employee/Employee";
import Pricing from "./Components/Pricing/Pricing";
import UndefinedRoute from "./Components/UndefinedRoute/UndefinedRoute";

const App = () => {
  if (window.innerWidth === 900) window.location.reload();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about-us" Component={About} />
        <Route path="/case" Component={Case} />
        <Route path="/contact-us" Component={Contact} />
        <Route path="/login" Component={Login} />
        <Route path="/employee_detail/:id" Component={Employee} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="*" element={<UndefinedRoute />} />
      </Routes>
    </div>
  );
};

export default App;
