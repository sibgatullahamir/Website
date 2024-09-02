import React, { useEffect, useRef, useState, useContext } from "react";
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContetxt";
import axios from "axios";

axios.defaults.withCredentials = true;

const Login = () => {
  const { setLoginState } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isUserValid, setIsUserValid] = useState(true);
  const [isEmployee, setIsEmployee] = useState(false);

  // connecting to backend-------------------------------->
  const url =
    isEmployee === true
      ? "http://localhost:5000/api/auth/login-employee"
      : "http://localhost:5000/api/auth/login";
  const toLogin = async () => {
    if ((email === "") | (pass === "")) {
      alert("Please input email or password");
      document.getElementById("input-1").value = "";
      document.getElementById("input-2").value = "";
      return;
    }

    try {
      const res = await axios.post(url, {
        email: email,
        password: pass,
      });
      if (res.data.isValid && !isEmployee) {
        window.location.href = "/dashboard";
      } else if (res.data.isValid && isEmployee) {
        window.location.href = "/";
        setLoginState(true);
      } else setIsUserValid(false);
    } catch (error) {
      console.log(error);
    } finally {
      document.getElementById("input-1").value = "";
      document.getElementById("input-2").value = "";
    }
  };

  // Show and Hide password functionality----------------->
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passRef = useRef();
  const showPassword = () => {
    passRef.current.type = "text";
    setIsPasswordVisible(true);
  };
  const hidePassword = () => {
    passRef.current.type = "password";
    setIsPasswordVisible(false);
  };

  // User validity ---------------->
  useEffect(() => {
    if (isUserValid) {
      document.getElementById("loginPg").style.opacity = "1";
    } else document.getElementById("loginPg").style.opacity = "0.2";
  }, [isUserValid]);

  return (
    <>
      <div className="loginPg" id="loginPg">
        <div className="sm-circle"></div>
        <div className="sm-circle sm-right"></div>
        <div className="md-circle"></div>
        <div className="md-circle md-right"></div>
        <div className="lg-circle"></div>
        <div className="lg-circle lg-right"></div>

        <div className="login-form">
          <h2> {isEmployee ? "EMPLOYEE" : "USER"} LOGIN </h2>

          <div className="login-wrapper">
            <img src="/Login/image 2.png" className="login-img" alt="" />{" "}
            <div className="input-tag">
              <input
                type="text"
                placeholder="Enter your email"
                style={{ height: "3rem" }}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="input-1"
              />
              <img src="/Login/image 3.png" alt="" />
            </div>
            <div className="input-tag">
              <input
                type="password"
                placeholder="Enter your Password"
                style={{ height: "3rem" }}
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                id="input-2"
                ref={passRef}
              />
              <img src="/Login/image 4.png" alt="" />
              <img
                src="/Login/EyeFill.png"
                alt=""
                className="hide-password"
                onClick={showPassword}
                style={isPasswordVisible === true ? { display: "none" } : {}}
              />
              <img
                src="/Login/eye.png"
                alt=""
                className="show-password"
                onClick={hidePassword}
                style={!isPasswordVisible === true ? { display: "none" } : {}}
              />
            </div>
            <div className="forgot-pswrd">
              <span onClick={() => setIsEmployee(!isEmployee)}>
                {!isEmployee ? "Employee" : "User"} Login
              </span>{" "}
              <span>Forget Password</span>
            </div>
            <div className="login-btns">
              <button onClick={() => toLogin()}>Login</button>
              <button className="google-auth">
                <FcGoogle />
              </button>
            </div>
            <div className="not-a-member">
              Not a member? <a href="/register">SignUp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Invalid User */}
      <div
        className="invalid-user"
        style={isUserValid === true ? { display: "none" } : {}}
      >
        <h1>Either Email or Password is incorrect !</h1>
        <button onClick={() => setIsUserValid(true)}>Ok</button>
      </div>
    </>
  );
};

export default Login;
