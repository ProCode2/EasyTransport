import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <label htmlFor="from"></label>
      <input type="text" className="input" placeholder="From Location" />
      <label htmlFor="to"></label>
      <input type="text" className="input" placeholder="Destination" />
      <button className="btn">GO</button>
    </div>
  );
}
