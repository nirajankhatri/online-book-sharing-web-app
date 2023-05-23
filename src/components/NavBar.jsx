import React, { useState } from "react";
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
  const [showDropdown, setShowDropdown] = useState(false);

  let { loading, user, error } = useSelector((state) => state.authorization);

  if (!!!Object.entries(user).length) {
    user = JSON.parse(localStorage.getItem("authenticatedUser")) || {};
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
        <div className="nav-right">
          {!!!Object.entries(user).length ? (
            <CTAButton
              onClick={() => dispatch(signInWithGoogle())}
              label={"login"}
            />
          ) : (
            <div
              className="dropDownContainer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <div className="dropDownBtn">
                <div className="imageContainer">
                  <img src={user?.photoUrl} alt="User Profile" />
                </div>
              </div>

              <div className="dropdown">
                <p>{user.name.substring(0, user.name.indexOf(" "))} &#10576;</p>

                {showDropdown ? (
                  <>
                    <div className="dropdown__overlay"></div>
                    <div className="dropDownList">
                      <div onClick={() => dispatch(signOutFromGoogle())}>
                        Logout
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
