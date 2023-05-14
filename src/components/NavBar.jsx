import React from "react";
import { NavLink } from "react-router-dom";
import {
  signInWithGoogle,
  signOutFromGoogle,
} from "../configs/firebase-config";
import CTAButton from "./CTAButton";
import SideBarToggleBtn from "./SideBarToggleBtn";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";

const NavBar = () => {
  const dispatch = useDispatch();

  let { loading, user, error } = useSelector((state) => state.authorization);

  if (!!!Object.entries(user).length) {
    user = JSON.parse(localStorage.getItem("authenticatedUser"));
  }

  return (
    <>
      {loading && <Spinner />}
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
            onClick={
              !!Object.entries(user).length
                ? () => dispatch(signOutFromGoogle())
                : () => dispatch(signInWithGoogle())
            }
            label={!!Object.entries(user).length ? "logout" : "login"}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
