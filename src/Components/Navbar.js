import React, { useState } from "react";
import "./Navbar.css";
import {
  RiMenu3line,
  RiCloseLine,
  RiMenuFill,
  RiMenu3Fill,
} from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <h1>
            <a href="/">U N I</a>
          </h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a
              href="https://paychek.uni.club/"
              alt="comm"
              className="gpt3__navbar-links_container-comm"
            >
              Uni Paycheck
            </a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <a href="https://paychek.uni.club/">Uni Paycheck</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
