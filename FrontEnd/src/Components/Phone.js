import React from "react";
import "./Phone.css";
import PhoneImage from "../assets/images/phone.png";

const Phone = () => {
  return (
    <div className="phone-image">
      <img src={PhoneImage} alt="phone" width="15rem" height="15rem" />
    </div>
  );
};

export default Phone;
