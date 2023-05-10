import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  signInWithGoogle,
  signOutFromGoogle,
} from "../configs/firebase-config";
import CTAButton from "./CTAButton";
import SideBarToggleBtn from "./SideBarToggleBtn";
import { userContext } from "../context/userContext";
// import { useDispatch } from "react-redux";
// import { loginSuccess, startLoading } from "../containers/users/authSlice";

const NavBar = () => {
  const userInfo = useContext(userContext);

  // const dispatch = useDispatch()

  // const onLoginHandler = () => {
  //   dispatch(startLoading());
  //   signInWithGoogle().then(() => {
  //     dispatch(loginSuccess());
  //   })
  // }

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
        <CTAButton
          onClick={!userInfo ? signInWithGoogle : signOutFromGoogle}
          label={!userInfo ? "login" : "logout"}
        />
      </div>
    </div>
  );
};

export default NavBar;
