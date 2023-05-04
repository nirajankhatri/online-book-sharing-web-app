import React from "react";
import { NavLink } from "react-router-dom";
import CTAButton from "./CTAButton";
import SideBarToggleBtn from "./SideBarToggleBtn";

const NavBar = () => {
  const onLoginHandler = () => {
    
  }
  return (
    <div className="navbar">
      <div className="nav-left">
        <SideBarToggleBtn />
        <img src={""} />
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="aboutus">About</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right btns">
        <CTAButton onClick={onLoginHandler} label="login" />
      </div>
    </div>
  );
};

export default NavBar;
