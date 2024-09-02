import React from "react";
import "./Footer.scss";
import FooterBottom from "./FooterBottom/FooterBottom";
const Footer = () => {
  // path to avoid header

  return (
    <div className="footer">
      {/* <div className="top">
        <PreFooter />
      </div> */}
      <div className="bottom">
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
