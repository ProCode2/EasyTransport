import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import reactRouterDom from "react-router-dom";
const Nav = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {}, [nav]);
  return (
    <div className="nav">
      <div className="navbar">
        <h1 className="logo">Easy Transport</h1>
        <ul className="list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/feedback">
            <li>Feedback</li>
          </Link>
        </ul>
        <div className="ham-menu">
          <h1 className="" onClick={() => setNav(!nav)}>
            {nav ? "X" : "="}
          </h1>
        </div>
      </div>
      <div>
        <ul className={"mob-list" + (nav ? " display" : " display-none")}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/feedback">
            <li>Feedback</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
