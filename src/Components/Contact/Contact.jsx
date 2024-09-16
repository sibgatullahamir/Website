import React, { useState } from "react";
import logo from "/logo.png";
import fb from "/fb.png";
import twitter from "/twitter.png";
import insta from "/insta.png";
import linkedIn from "/linkedIn.png";
import CustomSelect from "../../CustomComp/CustomSelect"; // Import the custom select component

const Contact = () => {
  const [code, setCode] = useState("+91"); // Country code state
  const [value, setValue] = useState(""); // Phone number state

  // Function to handle input changes and restrict to numbers
  const restrictNum = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  return (
    <div className="w-full h-screen p-4 flex justify-center items-center max-sm:h-auto">
      {/* inner background */}
      <div
        className="w-full h-full flex rounded-2xl border-2 border-black 2xl:w-[1500px] 2xl:h-[40rem] max-sm:flex-col max-sm:gap-12"
        style={{ background: "#ebf5fc" }}
      >
        {/* left side */}
        <div className="w-[50%] flex flex-col justify-center items-center gap-8 max-sm:w-full max-sm:gap-4">
          {/* left-top */}
          <div className="w-full flex flex-col justify-center items-start pl-20 gap-2 max-sm:pl-10 max-sm:pt-20">
            <h2 className="text-3xl font-medium max-sm:text-2xl">Contact Us</h2>
            <p className="w-64 text-sm max-sm:text-xs">
              Email, Call, or complete the form to learn how Untitled can solve
              your messaging problem.
            </p>
            <p className="w-64 text-sm font-semibold max-sm:text-xs ">
              {" "}
              Email : info@placementplaza.com
            </p>
            <p className="w-64 text-sm font-semibold max-sm:w-full">
              Phone : 7970942455
            </p>
          </div>

          {/* left-bottom */}
          <p className="w-full text-sm px-10 font-light max-sm:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iure.
            Corrupti commodi modi natus quis quisquam debitis amet placeat?
            Dolores repellat, enim eum eos amet reprehenderit laudantium at
            fugit. Architecto.
          </p>

          {/* left-socialmedia */}
          <div className="social-links w-full pl-8 ">
            <div className="links w-full flex gap-2 cursor-pointer">
              <div
                className="circle border-2 border-black p-2 rounded-full max-sm:scale-75"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61560473970919&mibextid=ZbWKwL",
                    "_blank"
                  )
                }
              >
                <img src={fb} alt="" className="fb-img w-4 h-4" />
              </div>
              <div
                className="circle border-2 border-black p-2 rounded-full max-sm:scale-75"
                onClick={() =>
                  window.open(
                    "https://x.com/placement_7541?t=TgRX8eZOCi47PlUr5tTddA&s=09",
                    "_blank"
                  )
                }
              >
                <img src={twitter} alt="" className="w-4 h-4" />
              </div>
              <div
                className="circle border-2 border-black p-2 rounded-full max-sm:scale-75"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/placementplaza_/",
                    "_blank"
                  )
                }
              >
                <img src={insta} alt="" className="w-4 h-4" />
              </div>
              <div
                className="circle border-2 border-black p-2 rounded-full max-sm:scale-75"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/placementplaza/",
                    "_blank"
                  )
                }
              >
                <img src={linkedIn} alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* right - side */}
        <div className="w-[50%] h-full p-8 px-24 max-sm:w-full max-sm:px-4 max-sm:flex max-sm:justify-center">
          {/* form */}
          <form
            className="w-full h-full flex flex-col gap-4 py-6 px-8 max-sm:w-[19rem]"
            style={{ background: "#FFC700", borderRadius: "3rem" }}
          >
            <h2 className="text-xl font-medium max-sm:text-lg">Get in Touch</h2>
            <p className="text-xs -mt-4 max-sm:text-[0.65rem]">
              You can reach us anytime
            </p>
            <div className=" flex gap-3 max-sm:flex-col">
              <input
                type="text"
                name="first name"
                placeholder="First name"
                className=" py-2 px-2 border-none outline-none rounded-xl text-sm max-sm:!w-[15rem]"
                style={{ width: "11rem" }}
              />
              <input
                type="text"
                name="last name"
                placeholder="Last name"
                style={{ width: "11rem" }}
                className="  py-2 px-2 border-none outline-none rounded-xl text-sm max-sm:!w-[15rem]"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-90 py-2 px-2 border-none outline-none rounded-xl text-sm"
            />

            {/* Phone number input logic */}
            <div className="wrapper">
              <span
                style={{ display: "flex", gap: "10px" }}
                className="flex w-90"
              >
                {/* Hidden input to store country code */}
                <input
                  name="code"
                  type="text"
                  value={code}
                  style={{ display: "none" }}
                />
                {/* Custom Select for country code */}
                <CustomSelect setCode={setCode} />
                {/* Input field for phone number */}
                <input
                  value={value}
                  name="number"
                  type="number"
                  placeholder="Number"
                  onChange={restrictNum}
                  style={{ width: "65%" }}
                  className="py-1 px-2 border-none outline-none rounded-xl text-sm"
                />
              </span>
            </div>
            <textarea
              name="message"
              className="w-90 py-2 px-2 border-none outline-none rounded-xl text-xs"
              style={{ height: "10rem" }}
              placeholder="Message"
            ></textarea>
            <button className="w-90 bg-[#483800] p-2 rounded-xl text-[#FFC700]">
              Submit
            </button>
            <p className="text-xs font-light">
              By contacting us, you agree to our Terms of services and Privacy
              Policy{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
