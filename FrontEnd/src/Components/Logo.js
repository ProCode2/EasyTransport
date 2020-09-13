import React from "react";
import "./Logo.css";
import LogoImage from "../assets/images/logo.jpg";

const Logo = () => {
  return (
    <div className="logo-image">
      <img src={LogoImage} alt="logo" width="40%" height="auto" />
    </div>
  );
};

export default Logo;
