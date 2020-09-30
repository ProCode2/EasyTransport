import React, { useState, useEffect } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [fk, setfk] = useState("");
  const sendData = () => {
    fetch("http://localhost:5000/Feedback", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fk),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="feedback">
      <h1 className="feedaback-header">Feedback</h1>
      <label htmlFor="feedback"></label>
      <h5>Enter feedback to help developer improve: </h5>
      <textarea
        rows="10"
        type="text"
        className="input-feedback"
        placeholder="Enter Your Feedback"
        onChange={(e) => setfk(e.target.value)}
      />
      <button className="btn-feedback" onClick={sendData}>
        Submit
      </button>
    </div>
  );
}
