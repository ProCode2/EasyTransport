import React from "react";
import "./Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback">
      <h1 className="feedaback-header">Feedback</h1>
      <label htmlFor="feedback"></label>
      <textarea
        rows="10"
        type="text"
        className="input-feedback"
        placeholder="Enter Your Feedback"
      />
      <button className="btn-feedback">Submit</button>
    </div>
  );
}
