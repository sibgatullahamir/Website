import React from "react";
import "./Card.scss";
import { motion } from "framer-motion";
const Card = ({ title, para, msg, isFounder, img, flex }) => {
  return (
    <motion.div
      className="card"
      style={!flex ? { flexDirection: "row-reverse" } : {}}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      <div className="left">
        <h2>{title}</h2>
        <p>{para}</p>
        <p className="message">"{msg}"</p>
        {isFounder ? <h5>Faiz Imam, CEO and Founder</h5> : ""}
      </div>

      <div className="right">
        <img src={img} alt="" />
      </div>
    </motion.div>
  );
};

export default Card;
