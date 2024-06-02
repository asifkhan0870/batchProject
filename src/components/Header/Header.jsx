import React from "react";
import { BsFire } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import "./Header.css";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 751) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <div className="h-wrapper">
      <div className="h-left">
        <div className="h-logo">
          <OutsideClickHandler
            onOutsideClick={() => {
              setmenuOpen(false);
            }}
          />
          <BsFire className="h-img" size={30} />

          <span className="h-text">uifry</span>
        </div>

        <div className="h-navigation" style={getMenuStyle(menuOpen)}>
          <ul>
            <a href="#">
              {" "}
              <li>Home</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Pricing</li>
            </a>
            <a href="#">
              <li>Features</li>
            </a>

            <button className="btn">Download</button>
          </ul>
          <div
            className="menu-icon"
            onClick={() => setmenuOpen((prev) => !prev)}
          >
            <IoMdMenu size={25} />
          </div>
        </div>
      </div>

      {/* <div className="h-right">
        <button className="btn">Download</button>
       
      </div> */}
    </div>
  );
};

export default Header;
