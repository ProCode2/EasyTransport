import React from "react";
import "./Email.css";
import EmailImage from "../assets/images/email.jpg";

const Email = () => {
  return (
    <div className="email-image">
      <img src={EmailImage} alt="email" width="15rem" height="15rem" />
    </div>
  );
};

export default Email;
