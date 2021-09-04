import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./css/main.css";

function Navbar() {
  const [click, setClick] = useState(false); //states
  const [button, setButton] = useState(true);
  const usertoken = localStorage.getItem("token");
  // console.log(usertoken);

  const handleClick = () => setClick(!click); //handlers
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Travelgram
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tlogs" className="nav-links" onClick={closeMobileMenu}>
                Travelogues
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            {!usertoken && (
                <li className="nav-item">
                  <Link
                    to="/usersignup"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    Sign up
                  </Link>
                </li>
              )}

              {!usertoken && (
                <li className="nav-item">
                  <Link
                    to="/userlogin"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              )}
            

            {usertoken && (
              <Link to="/role/requestsection" className="btn btn-success action my-4">
                <li>My Profile</li>
              </Link>
            )}
            {usertoken && (
              <li className="nav-item">
                <Link
                  to="/userlogin"
                  className="nav-links-mobile"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    closeMobileMenu();
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
          <div style={{ marginBottom: "18px", marginLeft: "5rem" }}>
          {button && !usertoken && (
            <Button route="/usersignup" buttonStyle="btn--outline">
              Sign Up
            </Button>
          )}

          {button && !usertoken && (
            <Button route="/userlogin" buttonStyle="btn--outline">
              Login
            </Button>
          )}
          {button && usertoken && (
            <Button
              route="/userlogin"
              buttonStyle="btn--outline"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
              }}
            >
              Logout
            </Button>
          )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
