import React from "react";
import "./Contact.css";
import Email from "./Email.js";
import Phone from "./Phone.js";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-header">Contact</h1>
      <h4 className="contact-detail">
        Contact the Developer.
      </h4>
      <div className="contact-details">
        <Phone />
        <p>Phone No: 8420833011</p>
      </div>
      <div className="contact-details">
        <Email />
        <p>Email id: mazumdarayush.2002@gmail.com</p>
      </div>
    </div>
  );
}
