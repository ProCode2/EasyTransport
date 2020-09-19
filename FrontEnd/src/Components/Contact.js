import React from "react";
import "./Contact.css";
import Email from "./Email.js";
import Phone from "./Phone.js";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-header">Contact</h1>
      <h4 className="contact-details">
        Contact the Developer.
        <br />
      </h4>
      <p1 className="contact-Number">
        <Phone />
        Phone No. : 8420833011
        <br />
      </p1>
      <p2 className="contact-Email">
        <br />
        <br />
        <Email />
        Email id:
      </p2>
      <br />
      <p3> mazumdarayush.2002@gmail.com</p3>
    </div>
  );
}
