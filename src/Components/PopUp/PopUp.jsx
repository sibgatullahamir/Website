import React from "react";
import "./PopUp.scss";
import { useNavigate } from "react-router-dom";
const PopUp = ({ isLoading, isSent }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Popup for validation */}
      <div
        className="pop-up"
        style={isLoading === false ? { display: "none" } : {}}
      >
        <div className="top">
          <img className="pop-img" src="/growth.png" alt="" />
        </div>
        <div className="bottom">
          <div className="text-area">
            Connecting you to us ,Hang On please !
          </div>
        </div>
      </div>

      {/* Pop up for success */}
      <div
        className="pop-up"
        style={isSent === false ? { display: "none" } : {}}
      >
        <div className="top">
          <img className="pop-img" src="/check.png" alt="" />
        </div>
        <div className="bottom success">
          <div className="text-area">
            Thanks! We Have Received Your Quotation Request. We Will Reach Out
            To You Within 48 Hours
          </div>
          <button
            onClick={() => {
              navigate("/");
              document.getElementById("h-main").style.opacity = "1";
              document.body.style.overflow = "";
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUp;
