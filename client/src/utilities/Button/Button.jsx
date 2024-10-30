import React from "react";
import "./Button.scss";
const Button = ({ size, text }) => {
   return <button className={`button ${size}`}>{text}</button>;
};

export default Button;
