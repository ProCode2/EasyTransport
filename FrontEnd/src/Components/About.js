import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-heading">About The Site</h1>
      <h5 className="about-para">
        This is a project for the Design Thinking and Innovation paper.
      </h5>
      <p>
        This is the back bone to the new mobile device based application to
        locate a particular public transport on the map and estimate its time of
        arrival to the detected destination.
        <br />
        <br />
        The app will work on a Global Positioning System(GPS), tracking every
        vehicle in the proximity and try to judge the time required to reach a
        point with its current average speed.
      </p>
    </div>
  );
}
