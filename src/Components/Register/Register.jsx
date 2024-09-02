import React, { useEffect, useState } from "react";
import "./Register.scss";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
// import { occupationData } from "../../utils/occupationData";
// import { registerUser } from "../../action/UserSignup";

const Register = () => {
  // states to handle all the changes--------------->
  const [userName, setUserName] = useState("");
  const [domain, setDomain] = useState("");
  const [compName, setCompName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const [isPasVisible, setIsPasVisible] = useState(0);
  const [isSquareClicked, setIsSquareClicked] = useState(false);
  const { option } = useParams();
  const url =
    option === "Employee"
      ? "http://localhost:5000/api/auth/register-employee"
      : "http://localhost:5000/api/auth/register";

  // Success pop-up function---------------------------------->
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserRegistered)
      document.getElementById("register").style.opacity = "0.1";
    else document.getElementById("register").style.opacity = "1";
  }, [isUserRegistered]);

  //   connecting to backend and saving the user data into DB----------------->
  // const toSignUp = () => {
  //   registerUser(
  //     userName,
  //     domain,
  //     compName,
  //     email,
  //     pass,
  //     cnfPass,
  //     setIsUserRegistered,
  //     url
  //   );
  // };

  return (
    <>
      <div className="register" id="register">
        <div className="signUp-form">
          <h2>Signup</h2>
          <div className="input-tag">
            <input
              type="text"
              placeholder="Full Name"
              style={{ height: "3rem" }}
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              id="in-1"
            />
            <img
              src="/Login/Account.png"
              alt=""
              style={{ width: "1.5rem", bottom: "0.8rem" }}
            />
          </div>
          <div className="input-tag">
            <select
              name=""
              id=""
              style={{ height: "3rem", color: "gray" }}
              onChange={(e) => setDomain(e.target.value)}
            >
              {occupationData.map((val, i) => {
                return (
                  <option value={val} key={i} style={{ paddingRight: "20px" }}>
                    {val}
                  </option>
                );
              })}
            </select>
            <img
              src="/Login/Account.png"
              alt=""
              style={{ width: "1.5rem", bottom: "0.8rem" }}
            />
          </div>
          <div className="input-tag">
            <input
              type="text"
              placeholder="Company Name"
              style={{ height: "3rem" }}
              required
              onChange={(e) => setCompName(e.target.value)}
            />
            <img
              src="/Login/Account.png"
              alt=""
              style={{ width: "1.5rem", bottom: "0.8rem" }}
            />
          </div>
          <div className="input-tag">
            <input
              type="text"
              placeholder="Business Email"
              style={{ height: "3rem" }}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="in-2"
            />
            <img src="/Login/image 3.png" alt="" style={{ bottom: "1rem" }} />
          </div>
          <div className="input-tag">
            <input
              type="password"
              placeholder="Create a password"
              style={{ height: "3rem" }}
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
              id="in-3"
            />
            <img src="/Login/image 4.png" alt="" style={{ bottom: "1rem" }} />
          </div>
          <div className="input-tag">
            <input
              type={isPasVisible ? "text" : "password"}
              placeholder="Confirm password"
              style={{ height: "3rem" }}
              required
              id="in-4"
              onChange={(e) => {
                setCnfPass(e.target.value);
              }}
            />
            <img
              src={!isPasVisible ? "/Login/EyeFill.png" : "/Login/eye.png"}
              alt=""
              style={{ width: "1.2rem", bottom: "1rem", cursor: "pointer" }}
              onClick={() => setIsPasVisible(!isPasVisible)}
            />
          </div>
          <div className="terms-conditions">
            <div
              className="square"
              onClick={() => setIsSquareClicked(!isSquareClicked)}
              style={
                isSquareClicked
                  ? { background: "rgb(0, 174, 255)", color: "white" }
                  : { background: "white" }
              }
            >
              {isSquareClicked ? "✓" : ""}
            </div>
            <p>I accept terms and conditions</p>
          </div>
          <div className="login-btns">
            <button
              // onClick={() => toSignUp()}
              style={
                !isSquareClicked ? { background: "grey", cursor: "auto" } : {}
              }
              disabled={isSquareClicked ? false : true}
            >
              Sign Up
            </button>
            {/* <button className="google-auth">
              <FcGoogle />
            </button> */}
          </div>
          <div className="not-a-member">
            Already have an Account? <a href="/login">Login</a>
          </div>
        </div>
      </div>

      {/* Success message for user Registered*/}
      <div
        className="invalid-user"
        style={isUserRegistered === false ? { display: "none" } : {}}
      >
        <h1>You have been successfully registered</h1>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </>
  );
};

export default Register;
