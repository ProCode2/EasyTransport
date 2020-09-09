import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
    const [nav, setNav] = useState(false);
    useEffect(() => {}, [nav]);
    return (
        <div className="nav">
            <div className="navbar">
                <h1 className="logo">Easy Transport</h1>
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Feedback</li>
                </ul>
                    <div className="ham-menu">
                        <h1 className="" onClick={() => setNav(!nav)}>
                            {nav ? "X" : "="}
                        </h1>
                    </div>
                </div>
            <div>
                <ul
                    className={
                        "mob-list" + (nav ? " display" : " display-none")
                    }
                >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Feedback</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
